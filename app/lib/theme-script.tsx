interface ThemeScriptProps {
	storageKey?: string;
	defaultTheme?: string;
}

export function ThemeScript({ storageKey = "app-theme", defaultTheme = "dark" }: ThemeScriptProps) {
	// This script will be injected into the head and run before React hydration
	const themeScript = `
		(function() {
			try {
				const storageKey = "${storageKey}";
				const theme = localStorage.getItem(storageKey) || "${defaultTheme}";
				const root = document.documentElement;
				
				root.classList.remove("light", "dark");
				
				if (theme === "system") {
					const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light";
					root.classList.add(systemTheme);
				} else {
					root.classList.add(theme);
				}
			} catch (e) {
				console.error("Theme initialization failed:", e);
			}
		})();
	`;

	return (
		<script
			// Using nonce or other security measures would be better in production
			// This is a non-jsx script that will be inserted as-is
			suppressHydrationWarning
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{ __html: themeScript }}
		/>
	);
}

// Alternative approach using a function component
export function createThemeScript(storageKey = "app-theme", defaultTheme = "dark") {
	return `
		if (!window.document.documentElement.classList.contains('light') && !window.document.documentElement.classList.contains('dark')) {
			try {
				const theme = localStorage.getItem("${storageKey}") || "${defaultTheme}";
				const root = window.document.documentElement;
				
				if (theme === "system") {
					const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light";
					root.classList.add(systemTheme);
				} else {
					root.classList.add(theme);
				}
			} catch (e) {}
		}
	`;
}
