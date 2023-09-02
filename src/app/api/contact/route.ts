import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { Contact } from "@/types";
import { pool } from "@/database/config";
import { ResultSetHeader } from 'mysql2/promise';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const readableStream = req.body;
      const textDecoder = new TextDecoder();

      let datos = "";

      const processStream = async () => {
        const reader = readableStream.getReader();

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          datos += textDecoder.decode(value);
        }
        return datos;
      };
      const result = await processStream();
      const data: Contact = JSON.parse(result);

      const connection = await pool.getConnection();
      const [rows] = await connection.query(
        "INSERT INTO contacts (name,identification,phone,email,description) VALUES (?,?,?,?,?)",
        [
          data.name,
          data.identification,
          data.phone,
          data.email,
          data.description,
        ]
      );
        console.log(rows);
        
      //return NextResponse.json({rows[0] as ResultSetHeader});
      return NextResponse.json(rows[0]);
    } catch (error) {
      return NextResponse.json({
        message: error,
      });
    }
  }
}
