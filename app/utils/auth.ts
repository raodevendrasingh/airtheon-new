import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";

const db = (env: Env) => drizzle(env.DB);

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
	}),
});
