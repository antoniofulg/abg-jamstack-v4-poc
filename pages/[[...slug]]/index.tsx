import { useRouter } from "next/router"

export default function Slug() {
	const router = useRouter()

	return <main>{JSON.stringify(router.query)}</main>
}
