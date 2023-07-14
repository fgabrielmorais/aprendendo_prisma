
import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMoviesByReleaseDateUseCase{
    async execute(): Promise<Movie[]>{
        const movies = await prisma.movie.findMany({
            
            //meio que a função que o banco deve realizar para a mostra da tabela, filtrando-a e etc
            orderBy: {
                release_date: "desc"
            },

            //o que você quer incluir ou não no get
            include: {
                movie_rent: {
                    select: {
                        
                        //tabela do usuário
                        user: {
                           select: {
                            name: true,
                            email: true
                           }

                        }
                    }
                }
            }
        });

        return movies;
    }
}