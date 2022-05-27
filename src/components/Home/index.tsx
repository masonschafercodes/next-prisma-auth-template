import Head from 'next/head';
import { Container } from '../ui/Container';
import React from 'react';

import { Link } from '../ui/Link';
import { UserData } from './UserData';
import { LoggedOut } from './LoggedOut';
import { useSession } from 'next-auth/react';

export function Home() {
	const { data: session } = useSession();
	React.useEffect(() => {
		fetch('/api/v1/users/me');
	}, []);

	return (
		<div>
			<Head>
				<title>Home Page</title>
				<meta name="description" content="Template Home Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container title="NextJS Project Scaffold">
				<div>
					<div className="mt-8 prose-lg">
						Welcome to this project scaffold by{' '}
						<Link
							href="https://github.com/masonschafercodes"
							rel="noopener"
							target="_blank"
						>
							masonschafercodes
						</Link>
						. This project contains a very minimal note taking application, with
						user authentication.
					</div>
					<div className="mt-2">
						{session ? <UserData user={session.user} /> : <LoggedOut />}
					</div>
				</div>
			</Container>
		</div>
	);
}
