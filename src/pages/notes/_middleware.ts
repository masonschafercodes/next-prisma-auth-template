import { withAuth } from 'next-auth/middleware';

export default withAuth({
	callbacks: {
		authorized: ({ token }) => token?.userRole === 'admin',
	},
});
