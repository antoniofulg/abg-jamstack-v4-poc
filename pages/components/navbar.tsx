import Link from "next/link"
import { useRouter } from "next/router"
import { twMerge } from "tailwind-merge"
import { Navigation } from "../api/navigation"

type Props = {
	navigation: Navigation[]
}

export default function Navbar({ navigation }: Props) {
	const { asPath, locale } = useRouter()

	return (
		<nav className="py-6 border-y border-gray-700">
			<div className="mx-auto container flex justify-between">
				<div className="flex gap-6">
					{navigation.map(({ title, path }) => (
						<Link
							key={path}
							className={twMerge(asPath !== path && "text-gray-500", "text-xl")}
							href={path}
						>
							{title}
						</Link>
					))}
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
