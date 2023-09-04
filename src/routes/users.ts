import { Router } from "express";
import UserController from "../controllers/users";
const usersRouter = Router();

usersRouter.get("/getAll", UserController.getAll);
export default usersRouter;
