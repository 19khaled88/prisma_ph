import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();
const insertUserService = async (data: User): Promise<User> => {
	const result = await prisma.user.create({
		data,
	});

	return result;
};

const getUserService = async () => {
	const result = await prisma.user.findMany({});
	return result;
};

export const userServices = {
	insertUserService,getUserService
};
