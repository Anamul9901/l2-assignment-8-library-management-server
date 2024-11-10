import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookService } from "./book.service";
import sendResponse from "../../../shared/sendResponse";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBook();
  console.log("asdfasdfsdf");
  //   return result;
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
