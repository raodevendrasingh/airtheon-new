import { Link, useLoaderData, useNavigate } from "react-router";
import { authClient } from "@/utils/auth-client";
import type { Route } from "./+types/home";
import { auth } from "@/utils/auth";
import { Button } from "@/components/ui/button";

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
						<div className="flex flex-col gap-3">
							<span>Signed in as:</span>
							<span>
								{session.user.name} ({session.user.email})
							</span>
							<Button
								onClick={handleSignOut}
								variant="destructive"
								className="w-fit"
							>
								Sign out
							</Button>
						</div>
					) : (
						<div className="flex flex-col gap-3">
							<span>Not signed in</span>
							<Link to="/sign-in">
								<Button className="w-fit">Sign In</Button>
							</Link>
						</div>
					)}
				</span>
			</div>
		</div>
	);
}
