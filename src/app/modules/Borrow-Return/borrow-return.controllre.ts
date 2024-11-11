import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BorrowReturnService } from "./borrow-return.service";
import sendResponse from "../../../shared/sendResponse";

const borrowBookFromDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await BorrowReturnService.createBorrow(req.body);
  
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book borrowed successfully",
    data: {
        borrowId: result.borrowId,
        bookId: result.bookId,
        memberId: result.memberId,
        borrowDate: result.borrowDate,
    },
  });
});

const returnBookToDB: RequestHandler= catchAsync(async(req, res)=>{
    const result = await BorrowReturnService.returnBook(req.body.borrowId);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Book returned successfully",
        data: null
      });
})


export const BorrowReturnController = {
    borrowBookFromDB,
    returnBookToDB
}
