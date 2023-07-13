import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppErrors";

export class CreateUserUseCase{

    async execute({name, email}: CreateUserDTO): Promise<User>{
        //verificar se o usuário já existe
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                //como as variáveis possuem o mesmo nome, basta colocar somente email
                email
            }
        });

        if(userAlreadyExists){
            //se o email existir, volta um erro
            throw new AppError("User already exists!");
        }


        // Criar o usuário
        const user = await prisma.user.create({    
            //um objeto com as propriedades de nome e email
            data: {
                name, 
                email
            }
        });

        //retornando um usuário criado
        return user;
    }
}