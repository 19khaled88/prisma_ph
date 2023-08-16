import express, { NextFunction, Request, Response } from "express";
import { categoryController } from "./category.controller";


const router = express.Router();

router.post("/create-category", categoryController.insertCategoryController);

router.put('/update/:id',categoryController.updateCategoryController)
router.delete('/delete/:id',categoryController.deleteCategoryController)
router.get('/all',categoryController.getCategoryController)
router.get('/single/:id',categoryController.singleCategoryController)
export default router
