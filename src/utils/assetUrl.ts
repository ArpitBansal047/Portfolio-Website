/** Cache-bust public folder assets so Netlify/CDN serves fresh files after redeploy. */
export function assetUrl(path: string): string {
  const version = import.meta.env.VITE_BUILD_VERSION || "1";
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}v=${version}`;
}
