import { ReactNode, useEffect, useState } from "react"
import Navbar from "./components/navbar"
import { useRouter } from "next/router"
import { Navigation } from "./api/navigation"

type Props = {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	const { locale } = useRouter()
	const [navigation, setNavigation] = useState<Navigation[]>([])

	useEffect(() => {
		const fetchNavigation = async () => {
			const response = await fetch("/api/navigation", {
				method: "POST",
				body: JSON.stringify({ locale }),
			})
			const { navigation } = await response.json()
			setNavigation(navigation)
		}

		fetchNavigation()
	}, [locale])

	return (
		<>
			<header>
				<Navbar navigation={navigation} />
			</header>
			<main className="container mx-auto py-6">{children}</main>
		</>
	)
}
