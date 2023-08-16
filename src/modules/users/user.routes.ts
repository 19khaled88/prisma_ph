import express, { NextFunction, Request, Response } from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertUserController);
router.post('/create-profile',userController.profileUpdateOrInsertController)
router.put('/update/:id',userController.updateUserController)
router.delete('/delete/:id',userController.deleteUserController)
router.get('/all',userController.getUserController)
router.get('/single/:id',userController.singleUserController)
export default router
