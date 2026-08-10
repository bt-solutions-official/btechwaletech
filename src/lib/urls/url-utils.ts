import { siteBrand } from "@data/site/site-config";

export function withTrailingSlash(path: string): string {
  if (!path) return "/";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
}

export function canonicalUrl(path: string): string {
  return new URL(withTrailingSlash(path), siteBrand.domain).toString();
}

export function assertUniqueCanonicalPaths(paths: string[]): void {
  const seen = new Set<string>();
  for (const path of paths.map(withTrailingSlash)) {
    if (seen.has(path)) {
      throw new Error(`Duplicate canonical path detected: ${path}`);
    }
    seen.add(path);
  }
}
