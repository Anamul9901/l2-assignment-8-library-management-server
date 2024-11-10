import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:Request, res: Response)=>{
    res.send({
        massage: "l2-a8 server running..."
    })
})



export default app;
