type GreetingRoute = {
  paths: readonly string[];
  greeting: string;
};

const GREETING_ROUTES: readonly GreetingRoute[] = [
  { paths: ["/"], greeting: "Hey! Need help getting found on Google?" },
  { paths: ["/riyadh/seo"], greeting: "Want better search visibility in Riyadh?" },
  {
    paths: ["/jeddah/seo", "/dammam/seo", "/services/seo"],
    greeting: "Looking to improve your SEO in Saudi Arabia?",
  },
  {
    paths: ["/digital-marketing-expert-calicut"],
    greeting: "Need help growing your business in Calicut?",
  },
  { paths: ["/about"], greeting: "Got a project idea? Let's talk." },
];

const FALLBACK_GREETING = "Hey! Need help with your website?";

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

/** Returns the single context-aware chatbot greeting for a route. */
export function getChatbotGreeting(pathname: string): string {
  const path = normalizePath(pathname);
  return GREETING_ROUTES.find((route) => route.paths.includes(path))?.greeting ?? FALLBACK_GREETING;
}
