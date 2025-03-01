import { BrandIconLogo } from "@/components/brand-logo";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-5">
			<BrandIconLogo />
			<h1 className="text-primary text-6xl font-bold">Airtheon</h1>
			<span className="text-3xl font-semibold text-muted-foreground">Copilot for your brain.</span>
		</div>
	);
}
