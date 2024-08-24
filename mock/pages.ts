export const MOCKED_PAGES: Record<
	string,
	Record<string, { title: string; content: string }>
> = {
	"en-CA": {
		"/": {
			title: "Home",
			content: "Welcome to our website!",
		},
		"/bathtubs": {
			title: "Bathtubs",
			content: "Check out our bathtubs!",
		},
		"/showers": {
			title: "Showers",
			content: "Check out our showers!",
		},
		"/doors": {
			title: "Doors",
			content: "Check out our doors!",
		},
	},
	"fr-CA": {
		"/": {
			title: "Accueil",
			content: "Bienvenue sur notre site web!",
		},
		"/baignoires": {
			title: "Baignoires",
			content: "Découvrez nos baignoires!",
		},
		"/douches": {
			title: "Douches",
			content: "Découvrez nos douches!",
		},
		"/portes": {
			title: "Portes",
			content: "Découvrez nos portes!",
		},
	},
}
