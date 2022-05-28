import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Link } from '../ui/Link';

type NewNoteInput = {
	text: string;
};

export function NewNote() {
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewNoteInput>();
	const onSubmit: SubmitHandler<NewNoteInput> = (data) => {
		setIsSubmitting(true);

		fetch('/api/v1/notes/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 201) {
					router.push('/notes');
				}
			})
			.catch((err) => console.error(err))
			.finally(() => setIsSubmitting(false));
	};
	return (
		<Container title="New Note" action={<Link href="/notes">Go Back</Link>}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					<div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
						Note Text
					</div>
					<textarea
						className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 w-full rounded-md px-4 py-2 border focus:border-brand-600 focus:ring-brand-500 disabled:opacity-60 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20"
						{...register('text', { required: true, maxLength: 240 })}
					/>

					{errors.text && (
						<div className="text-sm text-red-500 font-bold">
							{errors.text.message}
						</div>
					)}
				</label>
				<div className="mt-2">
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting && (
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						)}
						Submit
					</Button>
				</div>
			</form>
		</Container>
	);
}
