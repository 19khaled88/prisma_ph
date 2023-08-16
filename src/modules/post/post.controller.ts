import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { postServices } from "./post.services";


const insertPostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postServices.insertPostService(req.body);
    res.send({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    res.send(error);
  }
};

const getPostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await postServices.getPostService();
    res.send({
      success: true,
      message: "Retrieved all posts successfully",
      data: posts,
    });
  } catch (error) {
    res.send(error);
  }
};

const singlePostController=async(req:Request,res:Response,next:NextFunction)=>{
  const id = parseInt(req.params.id)
  try {
    const result = await postServices.singlePostService(id)
    res.send({
      success:true,
      message:'Single post retrieved successfully',
      data:result 
    })
  } catch (error) {
    res.send({
      success:false,
      error
    })
  }
}

// const profileUpdateOrInsertController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const profile = await userServices.insertOrUpdateProfileSerivce(req.body);
//     res.send({
//       success: true,
//       message: "updated user profile",
//       data: profile,
//     });
//   } catch (error) {
//     res.send({ error });
//   }
// };

const updatePostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id}= req.params
    const options = {id:parseInt(id), ...req.body}
    
    const result = await postServices.updatePostService(options);
    res.send({
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
};

const deletePostController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
	const {id}= req.params
    const result = await postServices.deletePostService(id);
    res.send({
      success: true,
      message: "Post deleted successfully",
      data: result,
    });
  } catch (error) {
    res.send({ success:false,error });
  }
};
export const postController = {
  insertPostController,
  getPostController,
  singlePostController,
  
  updatePostController,
  deletePostController
};
