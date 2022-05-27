import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
	theme: {
		colorScheme: 'light',
	},
	callbacks: {
		async jwt({ token }) {
			token.userRole = 'admin';
			return token;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
});
