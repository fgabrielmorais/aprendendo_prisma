import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";

const createUserController = new CreateUserController();
const userRoutes = Router();

//vai puxar o endereço que colocou no index.ts, que no caso é o /users
userRoutes.post("/", createUserController.handle);

export { userRoutes }