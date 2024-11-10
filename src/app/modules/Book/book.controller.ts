import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookService } from "./book.service";
import sendResponse from "../../../shared/sendResponse";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBook();
  
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

const createBookToDB: RequestHandler = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await BookService.creteBook(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Book created successfully",
    data: result,
  });
});

export const BookController = {
  getAllFromDB,
  createBookToDB,
};
