import Link from "next/link"
import { useRouter } from "next/router"
import { twMerge } from "tailwind-merge"

export default function Navbar() {
	const { asPath, locale } = useRouter()

	return (
		<nav className="py-6 border-y border-gray-700">
			<div className="mx-auto container flex justify-between">
				<div className="flex gap-6">
					<Link
						className={twMerge(asPath !== "/" && "text-gray-500", "text-xl")}
						href="/"
					>
						Home
					</Link>
					<Link
						className={twMerge(
							asPath !== "/bathtubs" && "text-gray-500",
							"text-xl"
						)}
						href="/bathtubs"
					>
						Bathtubs
					</Link>
					<Link
						className={twMerge(
							asPath !== "/showers" && "text-gray-500",
							"text-xl"
						)}
						href="/showers"
					>
						Showers
					</Link>
					<Link
						className={twMerge(
							asPath !== "/doors" && "text-gray-500",
							"text-xl"
						)}
						href="/doors"
					>
						Doors
					</Link>
				</div>
				<div className="flex gap-6">
					<Link
						className={twMerge(
							locale !== "en-CA" && "text-gray-500",
							"text-xl"
						)}
						href={asPath}
						locale="en-CA"
					>
						English
					</Link>
					<Link
						className={twMerge(
							locale !== "fr-CA" && "text-gray-500",
							"text-xl"
						)}
						href={asPath}
						locale="fr-CA"
					>
						French
					</Link>
				</div>
			</div>
		</nav>
	)
}
