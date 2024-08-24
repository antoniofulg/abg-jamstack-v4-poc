import {
	GetServerSideProps,
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next"
import { PageContent } from "../api/content"
import { MOCKED_PAGES } from "../mock/pages"

export default function Slug({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <main>{JSON.stringify(data)}</main>
}

export const getServerSideProps = (async ({
	req,
}: GetServerSidePropsContext) => {
	const currentDomain =
		process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
	const fullUrl = `${currentDomain}/api/content`

	console.log(fullUrl)

	try {
		const res = await fetch(new URL(fullUrl), {
			method: "POST",
			body: JSON.stringify({ language: "en-CA", path: "home" }),
		})
		const data: PageContent = await res.json()
		// const data = await fetchData()

		return { props: { data } }
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch data")
	}
}) satisfies GetServerSideProps<{ data: PageContent }>

const fetchData = async (): Promise<PageContent> => {
	// Simulating a delay with Promise.resolve (replace with real fetch logic)
	return Promise.resolve({ page: MOCKED_PAGES["en-CA"]["home"] })
}
