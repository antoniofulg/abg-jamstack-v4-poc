/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en-CA", "fr-CA"],
		defaultLocale: "en-CA",
	},
	redirects: async () => {
		return [
			{
				source: "/akshay",
				destination: "/bathtubs",
				permanent: true,
			},
			{
				source: "/wojciech",
				destination: "/fr-CA/douches",
				permanent: true,
			},
			{
				source: "/lukasz",
				destination: "/",
				permanent: true,
			},
			{
				source: "/antonio",
				destination: "/fr-CA",
				permanent: true,
			},
		]
	},
}

export default nextConfig
