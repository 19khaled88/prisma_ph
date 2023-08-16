import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";

const insertUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userServices.insertUserService(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userServices.getUserService();
    res.send({
      success: true,
      message: "Retrieved all users successfully",
      data: users,
    });
  } catch (error) {
    res.send(error);
  }
};

const singleUserController=async(req:Request,res:Response,next:NextFunction)=>{
  const id = parseInt(req.params.id)
  try {
    const result = await userServices.singleUserService(id)
    res.send({
      success:true,
      message:'Single user retrieved successfully',
      data:result 
    })
  } catch (error) {
    res.send({
      success:false,
      error
    })
  }
}

const profileUpdateOrInsertController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profile = await userServices.insertOrUpdateProfileSerivce(req.body);
    res.send({
      success: true,
      message: "updated user profile",
      data: profile,
    });
  } catch (error) {
    res.send({ error });
  }
};

const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id}= req.params
    const options = {id:parseInt(id), ...req.body}
    
    const result = await userServices.updateUserService(options);
    res.send({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
};

const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
	const {id}= req.params
    const result = await userServices.deleteUserService(id);
    res.send({
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.send({ success:false,error });
  }
};
export const userController = {
  insertUserController,
  getUserController,
  singleUserController,
  profileUpdateOrInsertController,
  updateUserController,
  deleteUserController
};
