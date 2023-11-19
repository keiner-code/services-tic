import { NextRequest, NextResponse } from "next/server";
import { pool } from "../../../../database/config";
import { ProductDetail } from "../../../../types";
import { products } from "@/database/products_db";

interface Params {
  params: {
    id: string;
  };
}
export async function GET(request: NextRequest, { params }: Params) {
  try {
    /* const connection = await pool.getConnection();
    const product = await connection.query(`SELECT * FROM products as pro INNER JOIN images as img INNER JOIN characteristic as chara WHERE pro.id_image = img.id AND chara.id_product = pro.id AND pro.id = ${params.id}`); */

    return NextResponse.json(
      products.find((value) => value.id == parseInt(params.id, 10))
    );
  } catch (error) {
    NextResponse.json({ message: error }, { status: 500 });
  }
}
