import Link from "next/link"

export default function Navbar() {
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
					<Link href="/">English</Link>
					<Link href="/fr-ca">French</Link>
				</div>
			</div>
		</nav>
	)
}
