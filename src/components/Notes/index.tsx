import React from 'react';

import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { EmptyNotification } from '../ui/EmptyNotification';
import { Link } from '../ui/Link';

export default function Notes() {
	const [notes, setNotes] = React.useState<any[]>([]);
	React.useEffect(() => {
		fetch('/api/v1/users/me')
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					return null;
				}
			})
			.then((data) => {
				if (data) setNotes(data?.me?.notes);
			});
	}, []);

	return (
		<Container
			title="Notes"
			action={<Button href="/notes/new">New Note</Button>}
		>
			<div className="space-y-2">
				{notes.length === 0 ? (
					<EmptyNotification />
				) : (
					notes.map((note) => (
						<div className="my-2">
							<Link key={note.id} href={`/notes/${note.id}`}>
								<a className="flex items-center justify-between space-x-2 rounded p-4 bg-gray-500 bg-opacity-20 w-full">
									<div className="truncate">{note.text}</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 flex-shrink-0"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</a>
							</Link>
						</div>
					))
				)}
			</div>
		</Container>
	);
}
