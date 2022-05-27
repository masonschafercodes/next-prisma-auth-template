import { ReactNode } from 'react';

interface Props {
	title?: string;
	action?: ReactNode;
	children: ReactNode;
}

export function Container({ title, action, children }: Props) {
	return (
		<>
			<div className="sm:my-8 w-full sm:max-w-lg mx-auto sm:rounded-xl p-6">
				{(title || action) && (
					<div className="flex items-center justify-between mb-4">
						{title && (
							<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
								{title}
							</h1>
						)}
						{action}
					</div>
				)}
				{children}
			</div>
		</>
	);
}
