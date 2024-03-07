import {Product } from "../../../../types/index";
import { createClient, sql } from "@vercel/postgres";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest, { params }: Params) {
  const client = createClient();
  await client.connect();
  try {
    const { productId } = params;
    const { rowCount } = await sql`DELETE FROM products WHERE product_id = ${productId}`;
    return NextResponse.json(rowCount, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error interno en el servidor: " + error,
    });
  } finally {
    await client.end();
  }
}
export async function GET(request: NextRequest, { params }: Params) {
  const client = createClient();
  await client.connect();

  try {
    const { productId } = params;
    const { rows } =
      await client.sql`SELECT * FROM products WHERE product_id = ${productId}`;
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error interno en el servidor" + error },
      { status: 200 }
    );
  } finally {
    await client.end();
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  const client = createClient();
  await client.connect();

  try {
    const { productId } = params;
    const body: Product = await request.json();
    if(body){
      await client.sql`UPDATE products SET name = ${body.name},
      maker = ${body.maker},
      amount = ${body.amount},
      price = ${body.price},
      discount = ${body.discount},
      description = ${body.description},
      state = ${body.state},
      image_id = ${body.image_id}
                          WHERE product_id = ${productId}`;
    }
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error Interno en el servidor: " + error },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
