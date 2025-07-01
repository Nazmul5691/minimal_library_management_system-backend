import mongoose, { Schema } from "mongoose";
import { IBooks } from "../interfaces/book.interface";


const booksSchema = new Schema<IBooks>(
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
            min: [0, 'Copies must be a positive number'],
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


export const Books = mongoose.model<IBooks>("Books", booksSchema)