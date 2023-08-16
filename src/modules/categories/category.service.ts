import { Category, PrismaClient, Profile, User } from "@prisma/client";
const prisma = new PrismaClient();

const insertCategoryService = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });

  return result;
};

// const insertOrUpdateProfileSerivce = async (
//   data: Profile
// ): Promise<Profile> => {
//   const isExit = await prisma.profile.findUnique({
//     where: {
//       userId: data.userId,
//     },
//   });

//   if (isExit) {
//     const result = await prisma.profile.update({
//       where: {
//         userId: data.userId,
//       },
//       data: {
//         bio: data.bio,
//       },
//     });
//     return result;
//   }
//   const result = await prisma.profile.create({
//     data,
//   });
//   return result;
// };

const getCategoryService = async () => {
  const result = await prisma.category.findMany({
	include:{
		
		posts:true
	}
  });
  return result;
};

const singleCategoryService =async(id:number)=>{
	const result = await prisma.category.findUnique({
		where:{
			id:id
		},
		include:{
			posts:true 
		}
	})
	return result
}

const updateCategoryService = async (data: Category) => {
  const { id, ...rest } = data;
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      ...rest,
    },
  });

  return result;
};

const deleteCategoryService = async (id: any) => {
  const result = await prisma.category.delete({
    where: {
      id: id,
    },
  });

  return result;
};

export const categoryServices = {
  insertCategoryService,
  getCategoryService,
  singleCategoryService,
  
  updateCategoryService,
  deleteCategoryService,
};
