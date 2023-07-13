import "express-async-errors";
import express, { NextFunction, Request, Response, request } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppErrors";

const app = express();

app.use(express.json());
app.use(routes);

//parte de erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
   
    //erro na parte externa, que o usuário cometeu
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    //erro do nosso próprio tratamento
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
});

app.listen(3333, () => console.log("Server is running in port 3333"));