import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.get("/", BookController.getAllFromDB);

router.post('/', BookController.createBookToDB);

export const BookRoutes = router;
