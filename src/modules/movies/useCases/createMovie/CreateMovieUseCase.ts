import { Movie} from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";
import { AppError } from "../../../../errors/AppErrors";

export class CreateMovieUseCase{

    async execute({title, duration, release_date,}: CreateMovieDTO): Promise<Movie>{
        //verificar se o filme já existe
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                //como as variáveis possuem o mesmo nome, basta colocar somente email
                title,
            },
        });

        if(movieAlreadyExists){
            //se o email existir, volta um erro
            throw new AppError("Movie already exists!");
        }


        // Criar o usuário
        const movie = await prisma.movie.create({    
            //um objeto com as propriedades de nome e email
            data: {
                title, 
                duration,
                release_date,
            },
        });

        //retornando um usuário criado
        return movie;
    }
}