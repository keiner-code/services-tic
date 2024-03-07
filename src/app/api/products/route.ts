import { NextRequest, NextResponse } from "next/server";
import { CreateProduct, Product } from "@/types";
import { QueryResult, createClient } from "@vercel/postgres";

export async function POST(req: NextRequest, res: NextResponse) {
  const client = createClient();
  await client.connect();
  try {
    const data: CreateProduct = await req.json();
    if (data) {
      const result: QueryResult =
        await client.sql`INSERT INTO products (name, maker, amount, price, discount, description, state, image_id) VALUES 
        (${data.name}, ${data.maker}, ${data.amount}, ${data.price}, ${data.discount}, ${data.description}, ${data.state}, ${data.image_id})`;

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
    const { rows } =
      await client.sql`SELECT p.product_id, p.name, p.maker,p.amount, 
                                      p.price,p.discount,p.description,
                                      p.state, p.image_id, i.image1, i.image2,
                                      i.image3, i.image4 FROM products AS p 
                                      INNER JOIN images AS i ON p.image_id = i.image_id`;
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
