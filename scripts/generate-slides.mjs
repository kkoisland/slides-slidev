import {
	readFileSync,
	writeFileSync,
	readdirSync,
	statSync,
	existsSync,
} from "node:fs";
import { join, resolve } from "node:path";
import matter from "gray-matter";

const slidesDir = resolve("slides");
const outputPath = resolve("public/slides.json");

const slides = [];

for (const dirName of readdirSync(slidesDir)) {
	const dirPath = join(slidesDir, dirName);
	if (!statSync(dirPath).isDirectory()) continue;

	const slidesPath = join(dirPath, "slides.md");
	try {
		const content = readFileSync(slidesPath, "utf-8");
		const { data } = matter(content);

		const hasThumbnail = existsSync(join(dirPath, "public", "og-image.png"));
		const rawDate = data.date;
		const date =
			rawDate instanceof Date
				? rawDate.toISOString().slice(0, 10)
				: (rawDate ?? "");

		slides.push({
			title: data.title ?? dirName,
			author: data.author ?? "",
			date,
			description: data.description ?? "",
			thumbnail: hasThumbnail ? "og-image.png" : "",
			url: `/slides/${dirName}`,
		});
	} catch {
		console.warn(`Skipping ${dirName}: slides.md not found`);
	}
}

// Sort by date descending (newest first)
slides.sort((a, b) => (a.date < b.date ? 1 : -1));

// Assign dev ports starting from 3030
const slidesWithPort = slides.map((slide, i) => ({ ...slide, port: 3030 + i }));

writeFileSync(outputPath, `${JSON.stringify(slidesWithPort, null, "\t")}\n`);
console.log(`Generated slides.json with ${slidesWithPort.length} slides`);

// Generate dev.sh
const slidevCommands = slidesWithPort
	.map((slide) => {
		const dir = slide.url.replace("/slides/", "");
		return `  "slidev slides/${dir}/slides.md --port ${slide.port} --open false"`;
	})
	.join(" \\\n");

const devSh = `#!/bin/bash
concurrently \\
  "vite" \\
${slidevCommands}
`;

writeFileSync(resolve("scripts/dev.sh"), devSh);
console.log("Generated scripts/dev.sh");

// Generate build-slides.sh
const base = "/slides-slidev/";
const buildCommands = slidesWithPort
	.map((slide) => {
		const dir = slide.url.replace("/slides/", "");
		return `  pnpm exec slidev build slides/${dir}/slides.md --base ${base}slides/${dir}/ --out $ROOT/dist/slides/${dir}`;
	})
	.join("\n");

const buildSh = `#!/bin/bash
set -e
ROOT=$(pwd)
${buildCommands}
`;

writeFileSync(resolve("scripts/build-slides.sh"), buildSh);
console.log("Generated scripts/build-slides.sh");
