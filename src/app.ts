import express, { Application, ErrorRequestHandler, Request, Response } from 'express'
import bookRoutes from './app/routes/book.route'
import borrowRoutes from './app/routes/borrow.route'
import { errorHandler } from './app/middlewares/errorHandler'
import cors from "cors"

const app: Application = express()
const router = express.Router()


app.use(express.json());
// app.use(router);

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://minimal-library-management-system-f.vercel.app"
    ]
}));



app.use("/", bookRoutes);
app.use("/", borrowRoutes);


app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Minimal Library Management System")
})


app.use(errorHandler as unknown as ErrorRequestHandler)

export default app;





