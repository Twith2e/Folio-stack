export function getLogo(url: string): string {
  if (!url) return "";

  // Normalize the URL to ensure it has a protocol
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;

  // Return the logo URL
  return `https://logo.clearbit.com/${normalizedUrl}`;
}
