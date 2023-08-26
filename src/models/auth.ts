class AuthModel {
  static async login(email: string, password: string) {
    return { token: "12345", email, password };
  }
}

export default AuthModel;
