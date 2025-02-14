import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(1, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" }),
});
