import { Navigation } from "@/pages/api/navigation"

export const MOCKED_NAVIGATION: Record<string, Navigation[]> = {
	"en-CA": [
		{
			title: "Home",
			path: "/",
			localePath: {
				"fr-CA": "/",
			},
		},
		{
			title: "Bathtubs",
			path: "/bathtubs",
			localePath: {
				"fr-CA": "/baignoires",
			},
		},
		{
			title: "Showers",
			path: "/showers",
			localePath: {
				"fr-CA": "/douches",
			},
		},
		{
			title: "Doors",
			path: "/doors",
			localePath: {
				"fr-CA": "/portes",
			},
		},
	],
	"fr-CA": [
		{
			title: "Accueil",
			path: "/",
			localePath: {
				"en-CA": "/",
			},
		},
		{
			title: "Baignoires",
			path: "/baignoires",
			localePath: {
				"en-CA": "/bathtubs",
			},
		},
		{
			title: "Douches",
			path: "/douches",
			localePath: {
				"en-CA": "/showers",
			},
		},
		{
			title: "Portes",
			path: "/portes",
			localePath: {
				"en-CA": "/doors",
			},
		},
	],
}
