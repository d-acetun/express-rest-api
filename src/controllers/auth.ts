import { Request, Response } from "express";
import AuthModel from "../models/auth";
import { loginType } from "../schemas/auth";

class AuthController {
  static async login(req: Request<unknown, unknown, loginType>, res: Response) {
    const { email, password } = req.body;
    const session = await AuthModel.login(email, password);
    res.status(200).json(session);
  }
}

export default AuthController;
