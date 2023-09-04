import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/jwt";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ").pop();
  if (!token) return res.sendStatus(401);
  if (!verifyToken(token)) return res.sendStatus(401);
  next();
};
