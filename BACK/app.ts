import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";

//Routes
import {candidateRouter} from "./routes/candidateRouter";

const app = express();
dotenv.config();


//cors
app.use(cors());


app.use(bodyParser.json());


//Routes
app.use("/api/candidates", candidateRouter);


app.listen(process.env.PORT, () => {
console.log("Node server started running");
});