import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.get("/", BookController.getAllFromDB);

router.post("/", BookController.createBookToDB);

router.get("/:bookId", BookController.getSingleBookFromDB);

router.put('/:bookId', BookController.updateBookFromDB);

export const BookRoutes = router;
