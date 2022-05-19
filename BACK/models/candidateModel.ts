import {Candidate} from "../types/Candidate";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

//Find all
export const findAll = (callback: Function) => {
    let queryString = `SELECT * FROM parcial2.candidates order by id;`;
    db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
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





