import { Router } from "express";
import authRouter from "./auth";
import usersRouter from "./users";
import { checkAuth } from "../middlewares/auth";
const router = Router();

router.use("/auth", authRouter);
router.use(checkAuth);
router.use("/users", usersRouter);

export default router;
