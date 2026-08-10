import { cpSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const rootDist = resolve("..", "dist");
const localDist = resolve("dist");

if (!existsSync(rootDist)) {
  throw new Error("Expected ../dist to exist after Astro build.");
}

if (existsSync(localDist)) {
  rmSync(localDist, { recursive: true, force: true });
}

cpSync(rootDist, localDist, { recursive: true });
