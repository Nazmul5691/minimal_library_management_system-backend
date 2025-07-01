import  express  from "express";
import { createBook, deleteSingleBook, getAllBooks, getSingleBook, updateSingleBook,  } from "../controllers/book.controller";

const router = express.Router();

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:bookId", getSingleBook);
router.put("/books/:bookId", updateSingleBook);
router.delete("/books/:bookId", deleteSingleBook);


export default router;
