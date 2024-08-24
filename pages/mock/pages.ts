const MOCKED_PAGES: Record<
	string,
	Record<string, { title: string; content: string }>
> = {
	"en-CA": {
		home: {
			title: "Home",
			content: "Welcome to our website!",
		},
		bathtubs: {
			title: "Bathtubs",
			content: "Check out our bathtubs!",
		},
		showers: {
			title: "Showers",
			content: "Check out our showers!",
		},
		doors: {
			title: "Doors",
			content: "Check out our doors!",
		},
	},
	"fr-CA": {
		home: {
			title: "Accueil",
			content: "Bienvenue sur notre site web!",
		},
		bathtubs: {
			title: "Baignoires",
			content: "Découvrez nos baignoires!",
		},
		showers: {
			title: "Douches",
			content: "Découvrez nos douches!",
		},
		doors: {
			title: "Portes",
			content: "Découvrez nos portes!",
		},
	},
}
