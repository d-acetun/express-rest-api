import { Router } from "express";
import authRouter from "./auth";
import usersRouter from "./users";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.use("/auth", authRouter);
router.use(verifyToken);
router.use("/users", usersRouter);

export default router;
