import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import type { Slide } from "./types";

function App() {
	const [slides, setSlides] = useState<Slide[]>([]);
	const [showThumbnails, setShowThumbnails] = useState(true);
	const [isDark, setIsDark] = useState(() => {
		const stored = localStorage.getItem("dark-mode");
		if (stored !== null) return stored === "true";
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	});

	useEffect(() => {
		fetch(`${import.meta.env.BASE_URL}slides.json`)
			.then((res) => res.json())
			.then(setSlides);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
		localStorage.setItem("dark-mode", String(isDark));
	}, [isDark]);

	return (
		<div className="max-w-2xl mx-auto px-4 py-8">
			<header className="flex justify-between items-center mb-8">
				<h1 className="text-xl font-medium text-[var(--text-h)]">Slides</h1>
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => setShowThumbnails((v) => !v)}
						className="text-sm px-3 py-1 text-[var(--text)] hover:text-[var(--text-h)]"
					>
						{showThumbnails ? "Hide thumbnails" : "Show thumbnails"}
					</button>
					<button
						type="button"
						onClick={() => setIsDark((v) => !v)}
						className="text-sm px-3 py-1 text-[var(--text)] hover:text-[var(--text-h)]"
					>
						{isDark ? <Moon size={24} /> : <Sun size={24} />}
					</button>
				</div>
			</header>
			<ul className="divide-y divide-[var(--border)]">
				{slides.map((slide) => {
					const dirName = slide.url.split("/slides/")[1];
					const href = import.meta.env.DEV
						? `http://localhost:${slide.port}`
						: `${import.meta.env.BASE_URL}slides/${dirName}/`;
					return (
						<li key={slide.url}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex gap-4 py-4 hover:opacity-70"
							>
								{showThumbnails &&
									(slide.thumbnail ? (
										<div
											className="w-32 h-20 rounded flex-shrink-0 bg-[var(--bg)] border border-[var(--border)]"
											style={{
												backgroundImage: `url(${import.meta.env.BASE_URL}${slide.thumbnail})`,
												backgroundSize: "contain",
												backgroundRepeat: "no-repeat",
												backgroundPosition: "center",
											}}
										/>
									) : (
										<div className="w-32 h-20 bg-[var(--border)] rounded flex-shrink-0" />
									))}
								<div className="flex flex-col justify-center gap-1">
									<p className="text-base font-medium text-[var(--text-h)]">
										{slide.title}
									</p>
									<p className="text-sm text-[var(--text)]">
										{slide.author} · {slide.date}
									</p>
									{slide.description && (
										<p className="text-sm text-[var(--text)]">
											{slide.description}
										</p>
									)}
								</div>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
