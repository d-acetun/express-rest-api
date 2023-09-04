import { sign, verify } from "jsonwebtoken";
import { IUser } from "../types/types";

export const signToken = ({ name, email }: IUser) => {
  const token = sign(
    {
      name,
      email,
    },
    "secret",
    { expiresIn: 60 * 5 }
  );
  return { token };
};

export const verifyToken = (token: string) => {
  try {
    return verify(token, "secret");
  } catch (err) {
    return null;
  }
};
