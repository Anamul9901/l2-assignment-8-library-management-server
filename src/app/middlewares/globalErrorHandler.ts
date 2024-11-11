import { NextFunction, Request, Response } from "express";
import { STATUS_CODES } from "http";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    console.log('err-', err)
    res.status(500).json({
        success: false,
        status: 500,
        message: err.message || "Something went wrong",
    })
};

export default globalErrorHandler;
