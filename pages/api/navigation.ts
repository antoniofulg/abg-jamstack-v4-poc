// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MOCKED_NAVIGATION } from "@/mock/navigation"
import type { NextApiRequest, NextApiResponse } from "next"

type Request = {
	locale: string
	path: string
}

export type Navigation = {
	title: string
	path: string
}

type NavigationResponse = {
	navigation: Navigation[]
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<NavigationResponse>
) {
	const { locale }: Request = JSON.parse(req.body)

	const navigation = MOCKED_NAVIGATION[locale]

	res.status(200).json({ navigation })
}
