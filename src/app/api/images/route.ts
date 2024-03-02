import { createClient, QueryResult } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { CreateImagen } from "../../../types";

export async function POST(req: NextRequest, res: NextResponse) {
  const client = createClient();
  await client.connect();
  try {
    if (req.body) {
      const data = (
        await req.body?.getReader().read()
      ).value?.toString() as string;
      const { image1, image2, image3, image4 }: CreateImagen = JSON.parse(data);
      const result: QueryResult =
        await client.sql`INSERT INTO images (image1,image2,image3,image4)
        VALUES (${image1}, ${image2}, ${image3}, ${image4})`;

      return NextResponse.json({ row: result.rowCount }, { status: 200 });
    }
  } catch (error) {
    //si sale error hacer un console log en el catch para poder verlo
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
