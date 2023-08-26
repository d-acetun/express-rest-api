import { Router } from "express";
import UserController from "../controllers/users";
import { verifyToken } from "../middlewares/auth";
const usersRouter = Router();

usersRouter.get("/getAll", UserController.getAll);
usersRouter.use(verifyToken);
export default usersRouter;
