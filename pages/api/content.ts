// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { MOCKED_PAGES } from "../mock/pages"

type Request = {
	language: string
	path: string
}

export type PageContent = {
	page: {
		title: string
		content: string
	}
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<PageContent>
) {
	const { language, path }: Request = JSON.parse(req.body)

	const page = MOCKED_PAGES[language][path]

	res.status(200).json({ page })
}
