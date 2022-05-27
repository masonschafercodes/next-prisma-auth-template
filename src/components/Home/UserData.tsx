import { Button } from '../ui/Button';
import { signOut } from 'next-auth/react';

export function UserData({ user }: { user: any }) {
	return (
		<>
			<h3 className="text-center font-bold text-xl">Welcome, {user.name}!</h3>
			<div className="grid grid-cols-2 gap-2 text-center mt-2">
				<Button href="/notes">View Your Notes</Button>

				<Button variant="secondary" onClick={() => signOut()}>
					Logout
				</Button>
			</div>
		</>
	);
}
