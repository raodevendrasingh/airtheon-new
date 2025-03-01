import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
} from "react-router";
import { useLocation } from "react-router";
import { ThemeProvider } from "./providers/theme-provider";
import { createThemeScript } from "./lib/theme-script";
import type { Route } from "./+types/root";
import "./app.css";

export function meta({ location }: Route.MetaArgs) {
	const baseUrl = "https://airtheon.com";
	const currentUrl = `${baseUrl}${location?.pathname || ""}`;
	const title = "Copilot For Your Brain | Airtheon";
	const description =
		"Save memories, notes, and tasks in one visual hub. Capture web content, organize with AI-powered search, and share effortlessly.";
	const ogImage = "https://airtheon.com/og-image.png";
	return [
		{ title },
		{ name: "description", content: description },
		{
			name: "keywords",
			content:
				"airtheon, ai, copilot, brain, memory, notes, tasks, web, content, organize, search, share",
		},
		{ property: "og:url", content: currentUrl },
		{ property: "og:site_name", content: "Airtheon" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:image", content: ogImage },
		{ property: "og:type", content: "website" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:site", content: "@airtheonlabs" },
		{ property: "twitter:creator", content: "@airtheonlabs" },
		{ property: "twitter:title", content: title },
		{ property: "twitter:description", content: description },
		{ property: "twitter:image", content: ogImage },
	];
}

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
	},
	{
		rel: "apple-touch-icon",
		sizes: "180x180",
		href: "/apple-touch-icon.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon-32x32.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon-16x16.png",
	},
	{ rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
	const location = useLocation();
	const baseUrl = "https://airtheon.com";
	const canonicalUrl = `${baseUrl}${location.pathname}`;

	const themeScript = createThemeScript("app-theme", "dark");

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<link rel="canonical" href={canonicalUrl} />
			</head>
			<body>
				<ThemeProvider defaultTheme="dark" storageKey="app-theme">
					{children}
					<ScrollRestoration />
					<Scripts />
					<script suppressHydrationWarning>{themeScript}</script>
				</ThemeProvider>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
