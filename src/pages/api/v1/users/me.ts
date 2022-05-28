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
		include: {
			notes: true,
		},
	});

	if (user) {
		res.status(200).json({
			me: user,
		});
	} else {
		const newUser = await prisma.user.create({
			data: {
				email: session?.user?.email!,
				name: session?.user?.name!,
			},
		});

		res.status(201).end();
	}
}
