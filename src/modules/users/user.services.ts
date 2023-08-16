import { PrismaClient, Profile, User } from "@prisma/client";
const prisma = new PrismaClient();

const insertUserService = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

const insertOrUpdateProfileSerivce = async (
  data: Profile
): Promise<Profile> => {
  const isExit = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExit) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }
  const result = await prisma.profile.create({
    data,
  });
  return result;
};

const getUserService = async () => {
  const result = await prisma.user.findMany({
    // select: {
    //   email: true,
    //   user: true,
    // },
	include:{
		profile:true,
		posts:true
	}
  });
  return result;
};

const singleUserService =async(id:number)=>{
	const result = await prisma.user.findUnique({
		where:{
			id:id
		},
		include:{
			profile:true 
		}
	})
	return result
}

const updateUserService = async (body:any) => {
  const { id, ...rest } = body;
  
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      ...rest,
    },
  });

  return result;
};

const deleteUserService = async (id: any) => {
  const result = await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });

  return result;
};

export const userServices = {
  insertUserService,
  getUserService,
  singleUserService,
  insertOrUpdateProfileSerivce,
  updateUserService,
  deleteUserService,
};
