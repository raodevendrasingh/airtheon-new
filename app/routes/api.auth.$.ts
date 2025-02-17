import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";
import { auth } from "@/utils/auth";

export async function loader({ request, context }: LoaderFunctionArgs) {
	const { env } = context.cloudflare;
	return auth(env).handler(request);
}

export async function action({ request, context }: ActionFunctionArgs) {
	const { env } = context.cloudflare;
	return auth(env).handler(request);
}
