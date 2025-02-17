import { Link, useLoaderData, useNavigate } from "react-router";
import { authClient } from "@/utils/auth-client";
import type { Route } from "./+types/home";
import { auth } from "@/utils/auth";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Profile" }];
}

export async function loader({ request, context }: Route.LoaderArgs) {
	const { env } = context.cloudflare;
	const session = await auth(env).api.getSession({
		headers: request.headers,
	});
	return session;
}

export default function Profile() {
	const session = useLoaderData<typeof loader>();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		await authClient.signOut();
		navigate("/sign-in");
	};

	return (
		<div className="p-5">
			<div>
				<span>
					{session ? (
						<>
							Signed in as:
							<br />
							{session.user.name} ({session.user.email})
							<br />
							<button onClick={handleSignOut} className="border bg-red-400">
								Sign out
							</button>
						</>
					) : (
						<div className="flex flex-col gap-3">
							<span>Not signed in</span>
							<Link to="/sign-in">
								<button className="border bg-red-500 px-1 rounded-lg">Sign In</button>
							</Link>
						</div>
					)}
				</span>
			</div>
		</div>
	);
}
