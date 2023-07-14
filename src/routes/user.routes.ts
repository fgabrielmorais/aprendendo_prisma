import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import { GetAllUserController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUserController();
const userRoutes = Router();

//vai puxar o endereço que colocou no index.ts, que no caso é o /users
userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
export { userRoutes };