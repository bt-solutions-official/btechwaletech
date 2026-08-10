import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const rootDist = resolve(scriptDirectory, "..", "dist");
const localDist = resolve(scriptDirectory, "dist");

if (!existsSync(rootDist)) {
  throw new Error("Expected ../dist to exist after Astro build.");
}

if (existsSync(localDist)) {
  rmSync(localDist, { recursive: true, force: true });
}

cpSync(rootDist, localDist, { recursive: true });
