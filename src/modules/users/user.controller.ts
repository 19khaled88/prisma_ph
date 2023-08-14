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

const getUserController =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const users = await userServices.getUserService()
        res.send({
            success:true,
            message:'Find all users',
            data:users
        })
    } catch (error) {
        res.send(error)
    }
}

export const userController = {
	insertUserController,getUserController
};
