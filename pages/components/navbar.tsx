import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar() {
	const { asPath } = useRouter()

	return (
		<nav className="py-6 border-y border-gray-700">
			<div className="mx-auto container flex justify-between">
				<div className="flex gap-2">
					<Link href="/">Home</Link>
					<Link href="/bathtubs">Bathtubs</Link>
					<Link href="/showers">Showers</Link>
					<Link href="/doors">Doors</Link>
				</div>
				<div className="flex gap-2">
					<Link href={asPath} locale="en-CA">
						English
					</Link>
					<Link href={asPath} locale="fr-CA">
						French
					</Link>
				</div>
			</div>
		</nav>
	)
}
