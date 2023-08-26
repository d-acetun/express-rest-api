import { Router } from "express";
import AuthController from "../controllers/auth";
import { notFound } from "../middlewares/notFound";
import { schemaValidation } from "../middlewares/schemaValidator";
import { loginSchema } from "../schemas/auth";

const authRouter = Router();

authRouter.post("/login", schemaValidation(loginSchema), AuthController.login);
authRouter.use(notFound);

export default authRouter;
