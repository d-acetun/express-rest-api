import { Request, Response } from "express";
import UserModel from "../models/users";
class UserController {
  static async getAll(_: Request, res: Response) {
    const session = await UserModel.getAll();
    res.status(200).json(session);
  }
}

export default UserController;
