import Link from "next/link"
import { ReactNode } from "react"
import Navbar from "./components/navbar"

type Props = {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="container mx-auto py-6">{children}</main>
		</>
	)
}
