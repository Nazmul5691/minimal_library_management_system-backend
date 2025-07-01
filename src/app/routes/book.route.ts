import  express  from "express";
import { books, createBook,  } from "../controllers/book.controller";

const router = express.Router();

router.post("/createBook", createBook);
router.get("/books", books);


export default router;
