import mongoose, { Document, Model, Schema } from "mongoose";
import { IBooks } from "../interfaces/book.interface";


export interface IBookDocument extends IBooks, Document { };

export interface IBookModel extends Model<IBookDocument> {
    borrowBook(bookId: string, quantity: number): Promise<IBookDocument>
}


const booksSchema = new Schema<IBookDocument, IBookModel>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        genre: {
            type: String,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        copies: {
            type: Number,
            required: true,
            // min: [1, 'Copies must be a positive number, and minimum one'],
        },
        available: {
            type: Boolean,
            default: true,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)


// booksSchema.statics.borrowBook = async function (bookId: string, quantity: number): Promise<IBookDocument> {
//     const book = await this.findById(bookId);

//     if (!book) {
//         throw new Error("Book not found");
//     }

//     if (!book.available || book.copies < quantity) {
//         throw new Error("Not enough copies available");
//     }

//     book.copies -= quantity;

//     if (book.copies === 0) {
//         book.available = false;
//     }

//     await book.save();

//     return book;
// }

booksSchema.statics.borrowBook = async function (bookId: string, quantity: number): Promise<IBookDocument> {
    const book = await this.findById(bookId);

    if (!book) {
        throw new Error("Book not found");
    }

    
    if (!book.available || book.copies < quantity) {
        throw new Error(`Cannot borrow more than available copies. Available copies: ${book.copies}`);
    }

    
    book.copies -= quantity;
    
    if (book.copies === 0) {
        book.available = false;
    }

    console.log('book save', book);
    
    await book.save();


    console.log('82no');

    return book;
};







export const Books = mongoose.model<IBookDocument, IBookModel>("Books", booksSchema);