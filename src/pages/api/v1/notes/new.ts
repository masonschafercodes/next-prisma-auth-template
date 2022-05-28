import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '~/utils/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const session = await getSession({ req });

	const user = await prisma.user.findUnique({
		where: {
			email: session?.user?.email!,
		},
	});

	if (user) {
		await prisma.note.create({
			data: {
				text: req.body.text,
				userId: user.id,
			},
		});

		return res.status(201).end();
	} else {
		return res.status(401).end();
	}
}
