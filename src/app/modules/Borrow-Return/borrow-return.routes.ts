import express from 'express'
import { BorrowReturnController } from './borrow-return.controllre';

const router = express.Router();

router.post('/borrow', BorrowReturnController.borrowBookFromDB)

export const BorrowReturnRoutes = router;