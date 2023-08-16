import { Post, PrismaClient, Profile, User } from "@prisma/client";
const prisma = new PrismaClient();

const insertPostService = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
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

const getPostService = async () => {
  const result = await prisma.post.findMany({
    // select: {
    //   email: true,
    //   user: true,
    // },
	include:{
		user:true,
    category:true
	},
  orderBy:{
    createdAt:'desc'
  }
  });
  return result;
};

const singlePostService =async(id:number)=>{
	const result = await prisma.post.findUnique({
		where:{
			id:id
		},
		include:{
			user:true,
      category:true 
		}
	})
	return result
}

const updatePostService = async (body:any) => {
  const { id, ...rest } = body;
  
  const result = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      ...rest,
    },
  });

  return result;
};

const deletePostService = async (id: any) => {
  const result = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  return result;
};

export const postServices = {
  insertPostService,
  getPostService,
  singlePostService,
  updatePostService,
  deletePostService,
};
