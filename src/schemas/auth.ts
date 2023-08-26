import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z.string().nonempty("Email is required").email({
      message: "Write a correct email",
    }),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "password must contain at least 6 characters"),
  }),
});

export type loginType = z.infer<typeof loginSchema>["body"];
