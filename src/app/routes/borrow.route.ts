import express from 'express'
import { createBorrow, getBorrow } from '../controllers/borrow.controller';

const router = express.Router();


router.post("/borrow", createBorrow);
router.get("/borrow", getBorrow);


export default router;