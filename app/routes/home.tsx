import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Airtheon" }];
}

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-5">
			<h1 className="text-primary text-6xl font-bold">Airtheon</h1>
			<span className="text-3xl font-semibold text-muted-foreground">Copilot for your brain.</span>
		</div>
	);
}
