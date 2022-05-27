import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
	console.log('DB Seed Code here!');
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
