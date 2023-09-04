import { signToken } from "../helpers/jwt";

class AuthModel {
  static async login(email: string, _password: string) {
    return signToken({ name: "Diego", email });
  }
}

export default AuthModel;
