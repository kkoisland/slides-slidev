import { cpSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const name = process.argv[2];
if (!name) {
	console.error("Usage: pnpm new-slide <slide-name>");
	process.exit(1);
}

const templateDir = resolve("slides/_template");
const destDir = resolve(`slides/${name}`);
const today = new Date().toISOString().slice(0, 10);

cpSync(templateDir, destDir, { recursive: true });

// Replace placeholders in slides.md
import { readFileSync, writeFileSync } from "node:fs";
const slidesPath = resolve(`slides/${name}/slides.md`);
const content = readFileSync(slidesPath, "utf-8")
	.replaceAll("PROJECT_NAME", name)
	.replaceAll("SLIDE_DATE", today);

writeFileSync(slidesPath, content);

mkdirSync(resolve(`slides/${name}/public`), { recursive: true });

console.log(`Created slides/${name}/`);
console.log("Edit slides.md and add images to public/");
