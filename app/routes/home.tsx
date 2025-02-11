import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "React Router App" },
		{ name: "description", content: "React Router x Cloudflare SAAS Kit!" },
	];
}

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex items-center justify-center gap-2">
				<h1 className="text-red-500 text-2xl font-semibold">React Router</h1>
				<span>x</span>
				<h1 className="text-orange-500 text-2xl font-semibold">Cloudflare</h1>
			</div>
			<div>
				<span className="text-base">SAAS Starter Kit</span>
			</div>
		</div>
	);
}
