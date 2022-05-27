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

	const note = await prisma.note.findUnique({
		where: {
			id: req.body.noteId,
		},
	});

	if (note) {
		res.status(200).json({
			note: note,
			error: null,
		});
	} else {
		res.status(404).json({
			note: null,
			error: 'Note not found',
		});
	}
}