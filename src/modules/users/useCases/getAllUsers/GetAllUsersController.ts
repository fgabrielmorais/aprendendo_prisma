//vai servir para receber as informações no controller e passar para o useCase

import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";


export class GetAllUserController{
    async handle(req: Request, res: Response){
        const getAllUsersUseCase = new GetAllUsersUseCase();
        const result = await getAllUsersUseCase.execute();
    
        return res.status(201).json(result);
    }
}