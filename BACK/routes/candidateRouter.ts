import express, { Request, Response } from "express";
import * as candidateModel from "../models/candidateModel";

const candidateRouter = express.Router();

//Find all
candidateRouter.get("/", async (req: Request, res: Response) => {
    candidateModel.findAll((err: Error, candidates: any) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": candidates });
    }
    )
});




export { candidateRouter };