import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";

//Routes
import {candidateRouter} from "./routes/candidateRouter";
import {resultsRouter}  from "./routes/resultsRouter";

const app = express();
dotenv.config();


//cors
app.use(cors());


app.use(bodyParser.json());


//Routes
app.use("/api/candidates", candidateRouter);
app.use("/api/results", resultsRouter);


const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Node server started running");
});