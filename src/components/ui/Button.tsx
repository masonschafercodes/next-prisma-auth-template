import clsx from 'clsx';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

export interface Props extends ButtonOrLinkProps {
	variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({ variant = 'primary', ...props }: Props) {
	return (
		<ButtonOrLink
			className={clsx(
				'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
				{
					'bg-gray-500 text-white': variant === 'primary',
					'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500':
						variant === 'secondary',
					'bg-red-500 text-white focus:ring-red-500': variant === 'danger',
				},
			)}
			{...props}
		/>
	);
}
