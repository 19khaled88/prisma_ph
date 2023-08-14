import express, { NextFunction, Request, Response } from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create", userController.insertUserController);
router.get('/users',userController.getUserController)
export default router
