import { Request, Response, NextFunction } from "express";
export const verifyToken = (_req: Request, _res: Response, _next: NextFunction) => {
  // console.log("no autenticado");
  // res.sendStatus(401);
  _next()
};
