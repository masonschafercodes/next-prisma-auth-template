import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '~/utils/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const session = await getSession({ req });

	if (!session) return res.status(401).end();
	if (!req.body.noteId)
		return res.status(400).json({ error: 'Missing noteId', note: null });

	await prisma.note.delete({
		where: {
			id: req.body.noteId,
		},
	});

	res.status(204).end();
}
