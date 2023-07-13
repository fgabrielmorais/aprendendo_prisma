import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createUser/createMovieController";
import { CreateMovieRentController } from "../modules/movies/createMovieRent/CreateMovieRentController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const movieRoutes = Router();

//vai puxar o endereço que colocou no index.ts, que no caso é o /users
movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieController.handle);



export { movieRoutes }