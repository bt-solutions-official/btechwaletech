import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const pagesRoot = join(process.cwd(), "src", "pages");
const routeFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
      continue;
    }
    routeFiles.push(fullPath);
  }
}

function toRoute(filePath) {
  const relativePath = relative(pagesRoot, filePath).split(sep).join("/");
  const withoutExtension = relativePath.replace(/\.(astro|md|mdx)$/, "");
  if (withoutExtension === "index") return "/";
  if (withoutExtension.endsWith("/index")) {
    return `/${withoutExtension.replace(/\/index$/, "")}/`;
  }
  return `/${withoutExtension}/`;
}

walk(pagesRoot);

const routeCandidates = routeFiles.filter((file) => /\.(astro|md|mdx)$/.test(file));
const markdownRoutes = routeCandidates.filter((file) => /\.(md|mdx)$/.test(file));
const dynamicRoutes = routeCandidates.filter((file) => {
  const normalized = relative(pagesRoot, file).split(sep).join("/");
  return /\[[^\]]+\]/.test(file) && !normalized.startsWith("it-services/");
});
const routes = routeCandidates.map(toRoute);
const duplicateRoutes = routes.filter((route, index) => routes.indexOf(route) !== index);
const badDelhiRoute = routes.includes("/india/delhi/delhi/");

if (markdownRoutes.length || dynamicRoutes.length || duplicateRoutes.length || badDelhiRoute) {
  console.error("Architecture validation failed.");
  if (markdownRoutes.length) console.error("Markdown files in src/pages create public routes:", markdownRoutes);
  if (dynamicRoutes.length) console.error("Dynamic route files are not allowed for priority location pages:", dynamicRoutes);
  if (duplicateRoutes.length) console.error("Duplicate route outputs detected:", duplicateRoutes);
  if (badDelhiRoute) console.error("Delhi must remain at /india/delhi/, not /india/delhi/delhi/.");
  process.exit(1);
}

console.log(`Architecture validation passed for ${routes.length} routes.`);
