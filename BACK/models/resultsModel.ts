import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";


//Get votes
export const getVotes = (callback: Function) => {
    let queryString = `SELECT P09728_1_5.candidatesA00368502.president, P09728_1_5.resultsA00368502.votes FROM P09728_1_5.candidatesA00368502 INNER JOIN P09728_1_5.resultsA00368502 ON P09728_1_5.candidatesA00368502.id = P09728_1_5.resultsA00368502.id_candidate;`;
    db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
    
        callback(null, result);
    }
    )

 
}


//Get total votes
export const getTotalVotes = (callback: Function) => {
    let queryString = `SELECT SUM(votes) FROM P09728_1_5.resultsA00368502;`;
    db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }

        callback(null, result);
    }
    )

 
}





