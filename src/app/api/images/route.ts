import { createClient, QueryResult } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { CreateImagen } from "../../../types";

export async function POST(request: NextRequest, res: NextResponse) {
  const client = createClient();
  await client.connect();
  try {
    const data: CreateImagen = await request.json();
    if (data) {
      const result: QueryResult =
        await client.sql`INSERT INTO images (image1,image2,image3,image4)
        VALUES (${data.image1}, ${data.image2}, ${data.image3}, ${data.image4})`;

      return NextResponse.json({ row: result.rowCount }, { status: 200 });
    }
  } catch (error) {
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
    const { rows } = await client.sql`SELECT * FROM images`;
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
