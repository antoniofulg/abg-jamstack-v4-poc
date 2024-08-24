// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Request = {
	language: string
	path: string
}

type Response = {
	page: {
		title: string
		content: string
	}
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Response>
) {
	const { language, path }: Request = req.body

	const page = MOCKED_PAGES[language][path]

	res.status(200).json({ page })
}
