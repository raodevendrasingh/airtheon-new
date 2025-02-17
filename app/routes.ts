import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	layout("routes/auth/layout.tsx", [
		route("sign-up", "routes/auth/sign-up.tsx"),
		route("sign-in", "routes/auth/sign-in.tsx"),
	]),
	route("profile", "routes/profile.tsx"),
	route("api/auth/*", "routes/api.auth.$.ts"),
] satisfies RouteConfig;
