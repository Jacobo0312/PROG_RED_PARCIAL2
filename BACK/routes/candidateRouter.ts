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



//Register vote
candidateRouter.put("/:id/vote", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    candidateModel.registerVote(id, (err: Error, data: any) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": data });
        console.log(data);
    }
    )
});





export { candidateRouter };