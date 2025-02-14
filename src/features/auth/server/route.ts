import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { SignInSchema } from "../schemas";

const app = new Hono().post("/login", zValidator("json", SignInSchema), (c) => {
  const data = c.req.valid("json");
  console.log(data);

  return c.json({
    success: true,
    message: `${data.email} is ${data.password}`,
  });
});

export default app;
