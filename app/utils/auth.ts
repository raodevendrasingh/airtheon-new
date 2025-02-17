import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";
import { betterAuth } from "better-auth";
import { account, session, user, verification } from "@/db/schema";

export const auth = (env: Env) =>
	betterAuth({
		database: drizzleAdapter(drizzle(env.DB), {
			provider: "sqlite",
			schema: {
				account,
				user,
				session,
				verification,
			},
		}),
		emailAndPassword: {
			enabled: true,
		},
	});
