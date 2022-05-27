import { ComponentProps } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export interface Props extends ButtonOrLinkProps {
	/**
	 * If the link should preserve the `redirect` parameter, set this to `true.
	 */
	preserveRedirect?: boolean;
}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, preserveRedirect, ...props }: Props) {
	const router = useRouter();
	const isLink = typeof href !== 'undefined';
	const ButtonOrLink = isLink ? 'a' : 'button';

	let content = <ButtonOrLink {...props} />;

	if (isLink) {
		const finalHref =
			preserveRedirect && router.query.redirect
				? `${href!}?redirect=${encodeURIComponent(
						router.query.redirect as string,
				  )}`
				: href!;

		return <Link href={finalHref}>{content}</Link>;
	}

	return content;
}
