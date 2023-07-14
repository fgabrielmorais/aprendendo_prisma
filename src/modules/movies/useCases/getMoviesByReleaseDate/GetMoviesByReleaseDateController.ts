//vai servir para receber as informações no controller e passar para o useCase

import { Request, Response } from "express";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesByReleaseDateUseCase";

export class GetMoviesByReleaseDateController{
    async handle(req: Request, res: Response){

        const getMoviesByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase();

        const result = await getMoviesByReleaseDateUseCase.execute();

        return res.status(201).json(result);
    }
}