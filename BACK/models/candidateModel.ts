import {Candidate} from "../types/Candidate";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

//Find all
export const findAll = (callback: Function) => {
    let queryString = `SELECT * FROM P09728_1_5.candidatesA00368502  order by id;`;
    db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        console.log(result);
        const candidates: Candidate[] = [];
        const rows = (<RowDataPacket>result);

        for (let i = 0; i < rows.length; i++) {
            const candidate: Candidate = {
                id: rows[i].id,
                president: rows[i].president,
                vice_president: rows[i].vicepresident,
                political_party: rows[i].political_party,
                photo: rows[i].photo,
            };
            console.log(candidate);
            candidates.push(candidate);
        }
        callback(null, candidates);
    });
        



}


//Register vote
export const registerVote = (id: number, callback: Function) => {
    let queryString = `UPDATE P09728_1_5.resultsA00368502 SET votes = votes + 1 WHERE id_candidate = ${id};`;
    db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const data={"status":"success"};
        callback(null, data);
    }
    )

}





