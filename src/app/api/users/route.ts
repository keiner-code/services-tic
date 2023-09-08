import { User } from "@/types";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {pool} from '@/database/config'

export async function POST(req: NextRequest, res: NextResponse) {
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
      const user: User = JSON.parse(result);

      const connection = await pool.getConnection();
      const [rows] = await connection.query(
        "INSERT INTO users (name,identification,image,rol,email,password,state) VALUES (?,?,?,?,?,?,?)",
        [
          user.name,
          user.identification,
          user.image,
          user.rol,
          user.email,
          user.password,
          user.state,
        ]
      );
      
      return NextResponse.json(rows);
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error Al Registrar Los Datos"
    })
  }
  
}