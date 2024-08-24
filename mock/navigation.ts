import { Navigation } from "@/pages/api/navigation"

export const MOCKED_NAVIGATION: Record<string, Navigation[]> = {
	"en-CA": [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "Bathtubs",
			path: "/bathtubs",
		},
		{
			title: "Showers",
			path: "/showers",
		},
		{
			title: "Doors",
			path: "/doors",
		},
	],
	"fr-CA": [
		{
			title: "Accueil",
			path: "/",
		},
		{
			title: "Baignoires",
			path: "/bathtubs",
		},
		{
			title: "Douches",
			path: "/showers",
		},
		{
			title: "Portes",
			path: "/doors",
		},
	],
}
