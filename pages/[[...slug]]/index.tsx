import {
	GetServerSideProps,
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next"
import { PageContent } from "../api/content"

export default function Slug({
	page: { title, content },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<main className="flex flex-col gap-4">
			<h1 className="text-5xl">{title}</h1>
			<p className="text-xl">{content}</p>
		</main>
	)
}

export const getServerSideProps = (async ({
	locale,
	resolvedUrl,
}: GetServerSidePropsContext) => {
	const currentDomain =
		process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
	const fullUrl = `${currentDomain}/api/content`

	try {
		const res = await fetch(new URL(fullUrl), {
			method: "POST",
			body: JSON.stringify({ locale, path: resolvedUrl }),
		})
		const props: PageContent = await res.json()

		return { props }
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch data")
	}
}) satisfies GetServerSideProps<PageContent>
