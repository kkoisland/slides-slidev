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

writeFileSync(outputPath, `${JSON.stringify(slides, null, "\t")}\n`);
console.log(`Generated slides.json with ${slides.length} slides`);
