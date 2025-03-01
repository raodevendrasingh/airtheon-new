import { Form, redirect } from "react-router";
import type { Route } from "./+types/sign-in";
import { auth } from "@/utils/auth";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Sign In | Airtheon" },
		{
			name: "description",
			content: "Copilot For Your Brain. Sign in to access your account.",
		},
	];
}

export async function action({ request, context }: Route.ActionArgs) {
	const { env } = context.cloudflare;
	const formData = await request.formData();

	const body = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { headers } = await auth(env).api.signInEmail({
		request,
		body,
		asResponse: true,
	});

	return redirect("/profile", { headers });
}

export default function SignIn() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-2xl shadow-xl">
				<div>
					<h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-white">Sign In</h2>
				</div>

				<Form method="post" className="mt-8 space-y-6">
					<div className="space-y-4">
						<div>
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="block w-full rounded-lg border-0 bg-gray-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>

						<div>
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="block w-full rounded-lg border-0 bg-gray-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-colors duration-200"
						>
							Sign In
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
}
