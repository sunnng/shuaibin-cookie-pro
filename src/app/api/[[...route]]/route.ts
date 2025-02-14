import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";
import { hc } from "hono/client";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("/auth", auth);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;

const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
