import express, { NextFunction, Request, Response } from "express";
import { postController } from "./post.controller";


const router = express.Router();

router.post("/create-post", postController.insertPostController);

router.put('/update/:id',postController.updatePostController)
router.delete('/delete/:id',postController.deletePostController)
router.get('/all',postController.getPostController)
router.get('/single/:id',postController.singlePostController)
export default router
