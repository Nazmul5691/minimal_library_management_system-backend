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
export const books = async (req: Request, res: Response, next: NextFunction) => {
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

