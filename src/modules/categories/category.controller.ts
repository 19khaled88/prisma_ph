import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { categoryServices } from "./category.service";

const insertCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await categoryServices.insertCategoryService(req.body);
    res.send({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    res.send(error);
  }
};

const getCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await categoryServices.getCategoryService();
    res.send({
      success: true,
      message: "Retrieved all categories successfully",
      data: categories,
    });
  } catch (error) {
    res.send(error);
  }
};

const singleCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    const category = await categoryServices.singleCategoryService(id);
    res.send({
      success: true,
      message: "Single category retrieved successfully",
      data: category,
    });
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
};

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

const updateCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const options = { id: parseInt(id), ...req.body };
    const category = await categoryServices.updateCategoryService(options);
    res.send({
      success: true,
      message: "category updated successfully",
      data: category,
    });
  } catch (error) {
    res.send({
      success: false,
      error,
    });
  }
};

const deleteCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const category = await categoryServices.deleteCategoryService(id);
    res.send({
      success: true,
      message: "Category deleted successfully",
      data: category,
    });
  } catch (error) {
    res.send({ success: false, error });
  }
};
export const categoryController = {
  insertCategoryController,
  getCategoryController,
  singleCategoryController,

  updateCategoryController,
  deleteCategoryController,
};
