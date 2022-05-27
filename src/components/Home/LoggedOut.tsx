import { signIn } from 'next-auth/react';
import { Button } from '../ui/Button';

export function LoggedOut() {
	return (
		<div className="mt-4 grid grid-cols-1 gap-4">
			<Button onClick={() => signIn()} variant="secondary">
				Login
			</Button>
		</div>
	);
}
