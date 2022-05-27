import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Link } from '../ui/Link';

export function ViewNote({ noteId }: { noteId: any }) {
	const [note, setNote] = React.useState<string>('');
	const [error, setError] = React.useState<string>('');

	const router = useRouter();

	React.useEffect(() => {
		fetch('/api/v1/notes/note', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				noteId: noteId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					setError(data.error);
				} else {
					setNote(data.note.text);
				}
			});
	}, []);

	async function deleteNote() {
		const res = await fetch('/api/v1/notes/delete', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				noteId: noteId,
			}),
		});
		if (res.status === 400) {
			const data = await res.json();
			setError(data.error);
		} else {
			router.push('/notes');
		}
	}
	return (
		<Container title="Note" action={!error ? <Button onClick={deleteNote}>Delete Note</Button> : <Link href='/notes'>Go Back</Link>}>
			{note && <div className="prose-xl">{note}</div>}
			{error && <div className="text-red-500 p-2 bg-red-200 border border-red-400 rounded font-semibold">{error}</div>}
		</Container>
	);
}
