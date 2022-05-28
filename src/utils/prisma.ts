import { PrismaClient } from '@prisma/client';

// Creates a single instance of the prisma client
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
declare global {
	var __globalPrisma__: PrismaClient;
}

export let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient({
		log: ['error', 'warn'],
	});
} else {
	if (!global.__globalPrisma__) {
		global.__globalPrisma__ = new PrismaClient({
			// This logging is better for production
			// log: ['error', 'warn'],

			// This is good for local development, but not for production
			log: ['query', 'error', 'warn'],
		});
	}

	prisma = global.__globalPrisma__;
}
