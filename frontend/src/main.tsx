import { createRoot } from "react-dom/client";
import {HelmetProvider} from 'react-helmet-async'
import App from "./App.tsx";
import "./index.css";

const apiBaseUrl = String(import.meta.env.VITE_API_BASE_URL || "").trim().replace(/\/$/, "");

if (apiBaseUrl) {
	const originalFetch = window.fetch.bind(window);

	window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
		const toApiUrl = (url: URL) => `${apiBaseUrl}${url.pathname}${url.search}${url.hash}`;

		if (typeof input === "string" || input instanceof URL) {
			const currentUrl = new URL(String(input), window.location.origin);
			if (currentUrl.origin === window.location.origin && currentUrl.pathname.startsWith("/api/")) {
				return originalFetch(toApiUrl(currentUrl), init);
			}
			return originalFetch(input, init);
		}

		const requestUrl = new URL(input.url, window.location.origin);
		if (requestUrl.origin === window.location.origin && requestUrl.pathname.startsWith("/api/")) {
			const proxiedRequest = new Request(toApiUrl(requestUrl), input);
			return originalFetch(proxiedRequest, init);
		}

		return originalFetch(input, init);
	};
}

createRoot(document.getElementById("root")!).render(
<HelmetProvider>
<App />
</HelmetProvider>

);
