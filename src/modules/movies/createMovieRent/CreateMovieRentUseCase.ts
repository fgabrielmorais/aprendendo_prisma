import { AppError } from "../../../errors/AppErrors";
import { prisma } from "../../../prisma/client";
import { CreateMovieRentDTO } from "../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase{
    async execute({movieId, userId }: CreateMovieRentDTO): Promise<void>{
        //verificar se filme existe
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId
            },
        });

        if(!movieExists){
            throw new AppError("Movie does not exists!");
        }


        //verificar se o filme já não está alugado por outra pessoa
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId
            },
        });

        if(movieAlreadyRented){
            throw new AppError("movie already rented!");
        }
    

        //verificar se o usuário existe
        const userExists = await prisma.user.findUnique({
            where: {
                id: userId
            },
        });

        if(!userExists){
            throw new AppError("User does not exists!");
        }

        //criar a locação
        await prisma.movieRent.create({
            data: {
                movieId,
                userId,
            },
        });
    }
}