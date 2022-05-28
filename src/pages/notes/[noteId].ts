import { GetServerSideProps } from 'next';
import { ViewNote } from '~/components/Notes/ViewNote';

export const getServerSideProps: GetServerSideProps<
	{},
	{
		noteId: string;
	}
> = async (ctx) => {
	const noteId = ctx.query.noteId;
	return {
		props: {
			noteId,
		},
	};
};

export default ViewNote;
