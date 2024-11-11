import express from 'express'
import { BorrowReturnController } from './borrow-return.controllre';

const router = express.Router();

router.post('/borrow', BorrowReturnController.borrowBookFromDB)

router.post('/return', BorrowReturnController.returnBookToDB);

export const BorrowReturnRoutes = router;