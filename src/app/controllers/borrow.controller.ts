import { NextFunction, Request, Response } from "express";
import { Books } from "../models/book.model";
import { Borrow } from "../models/borrow.model";


// borrow a book
export const createBorrow = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { book, quantity, dueDate } = req.body;
        

        const borrow = await Borrow.create({ book, quantity, dueDate });
        console.log(borrow);
        const updatedBookAvailability = await Books.borrowBook(book, quantity);
        console.log('update book',updatedBookAvailability);

        res.status(201).json({
            success: true,
            message: 'Book borrowed successfully',
            data: borrow
        })

    } catch (error) {
        next(error)
    }
}






// books borrow summary
export const getBorrow = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const summary = await Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" }
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookInfo"
                }
            },
            {
                $unwind: "$bookInfo"
            },
            {
                $project: {
                    book: {
                        title: "$bookInfo.title",
                        isbn: "$bookInfo.isbn"
                    },
                    totalQuantity: 1
                }
            }
        ])

        res.status(200).json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: summary
        });

    } catch (error) {
        next(error)
    }
}