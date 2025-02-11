import { betterAuth } from "better-auth";

export const auth = (env: Env) => {
	return betterAuth({
		database: {
			provider: "sqlite",
		},
	});
};
