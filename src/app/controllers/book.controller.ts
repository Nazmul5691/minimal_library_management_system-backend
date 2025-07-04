import { NextFunction, Request, Response } from "express"
import { Books } from "../models/book.model";


// create book
export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const book = await Books.create(body);

        res.status(201).json({
            success: true,
            message: 'Book created Successfully',
            data: book
        })
    } catch (error) {
        next(error)
    }
}


// Get all books
export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await Books.find()

        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books
        });
    } catch (error) {
        next(error)
    }
};


// Get a single book
export const getSingleBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId;
        const book = await Books.findById(bookId);

        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: book
        });
    } catch (error) {
        next(error)
    }
}


// update a book
// export const updateSingleBook = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const bookId = req.params.bookId;
//         const updatedBook = req.body;
//         const book = await Books.findByIdAndUpdate(bookId, updatedBook, { new: true });

//         res.status(200).json({
//             success: true,
//             message: "Book updated successfully",
//             data: book
//         })
//     } catch (error) {
//         next(error)
//     }
// }

export const updateSingleBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId;
        const updatedBook = req.body;

        // Check if copies is being updated
        if (typeof updatedBook.copies === "number") {
            updatedBook.available = updatedBook.copies > 0;
        }

        const book = await Books.findByIdAndUpdate(bookId, updatedBook, { new: true });

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book
        });
    } catch (error) {
        next(error);
    }
};




// delete a book
export const deleteSingleBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = req.params.bookId;
        const book = await Books.findByIdAndDelete(bookId);

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: null
        })
    } catch (error) {
        next(error)
    }
}