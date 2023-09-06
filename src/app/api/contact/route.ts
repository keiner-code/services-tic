import { NextRequest, NextResponse } from "next/server";
import { Contact } from "../../../types";
import { pool } from "../../../database/config";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const readableStream = req.body;
      const textDecoder = new TextDecoder();

      let datos = "";

      if(readableStream){

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
      return NextResponse.json(rows);

    }else{
      return NextResponse.json({
        message: "Error Al Cargar Los Datos"
      })
    }

    } catch (error) {
      return NextResponse.json({
        message: error,
      });
    }
  }
}
