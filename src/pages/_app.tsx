import type { AppProps } from 'next/app';
import { NProgress } from '~/components/NProgress';
import { SessionProvider } from 'next-auth/react';
import '../styles.css';
import Script from 'next/script';

export const ENABLE_GOOGLE_ANALYTICS =
	process.env.ENABLE_GOOGLE_ANALYTICS === 'true';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			{ENABLE_GOOGLE_ANALYTICS ?? (
				<>
					<Script
						strategy="lazyOnload"
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					<Script id="google-analytics" strategy="lazyOnload">
						{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
					</Script>
				</>
			)}
			<SessionProvider session={session}>
				<NProgress />
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}

export default MyApp;
