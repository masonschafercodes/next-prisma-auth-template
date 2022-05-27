import type { AppProps } from 'next/app';
import { NProgress } from '~/components/NProgress';
import { SessionProvider } from 'next-auth/react';
import '../styles.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			<SessionProvider session={session}>
				<NProgress />
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}

export default MyApp;
