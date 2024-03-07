import { createClient, QueryResult } from "@vercel/postgres";
import { User } from "../../../types";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
  const client = createClient();
  await client.connect();
  try {
    if (req.body) {
      const data = (
        await req.body?.getReader().read()
      ).value?.toString() as string;
      const { email, identification, image, name, password, rol, state }: User =
        JSON.parse(data);

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
        
      const result: QueryResult =
        await client.sql`INSERT INTO users (name,identification,image,rol,email,password,state)
        VALUES (${name}, ${identification}, ${image}, ${rol}, ${email}, ${hash}, ${state})`;

      return NextResponse.json({ row: result.rowCount }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      {
        message: "Error Al Registrar Los Datos",
        error,
      },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
export async function GET(request: NextRequest, response) {
  const client = createClient();
  await client.connect();
  try {
    const { rows } = await client.sql`SELECT * FROM users`;
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "error interno: ", error },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
