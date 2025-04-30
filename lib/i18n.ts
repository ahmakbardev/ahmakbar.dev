export function getClientLocale(): "en" | "id" {
  if (typeof window === "undefined") return "en";
  const locale = window.location.pathname.split("/")[1];
  return locale === "id" ? "id" : "en";
}
