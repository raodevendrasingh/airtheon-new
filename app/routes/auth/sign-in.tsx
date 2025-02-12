import { useState } from "react";
import { Form } from "react-router";
import { authClient } from "@/utils/auth-client";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = async () => {
		await authClient.signIn.email(
			{
				email,
				password,
			},
			{
				onRequest: () => {
					console.warn("Sign in Initiated...");
				},
				onSuccess: () => {
					alert("Successfully signed in!");
				},
				onError: (ctx) => {
					alert(ctx.error);
				},
			},
		);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-2xl shadow-xl">
				<div>
					<h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-white">Sign In</h2>
				</div>

				<Form onSubmit={signIn} className="mt-8 space-y-6">
					<div className="space-y-4">
						<div>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								className="block w-full rounded-lg border-0 bg-gray-700 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>

						<div>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
							Continue
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
}
