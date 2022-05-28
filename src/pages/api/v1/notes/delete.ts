import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '~/utils/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (!req.body.noteId)
		return res.status(400).json({ error: 'Missing noteId', note: null });

	await prisma.note.delete({
		where: {
			id: req.body.noteId,
		},
	});

	res.status(204).end();
}
