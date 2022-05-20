import express, { Request, Response } from "express";
import * as resultsModel from "../models/resultsModel";

const resultsRouter = express.Router();

//Find all
resultsRouter.get("/", async (req: Request, res: Response) => {
    resultsModel.getVotes((err: Error, data: any) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": data });
    }
    )
});


//Get total votes
resultsRouter.get("/total", async (req: Request, res: Response) => {
    resultsModel.getTotalVotes((err: Error, data: any) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": data });
    }
    )
});





export { resultsRouter };