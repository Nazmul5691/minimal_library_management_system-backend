import express, { Application, Request, Response } from 'express'



const app: Application = express()
const router = express.Router()


app.use(express.json());
app.use(router);


app.get("/", (req:Request, res: Response) =>{
    res.send("Welcome to the Minimal Library Management System")
})

export default app;





