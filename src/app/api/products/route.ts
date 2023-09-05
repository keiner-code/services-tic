import { NextResponse } from "next/server";
import {pool} from '@/database/config'
import { Product } from "@/types";

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const products = await connection.query("SELECT * FROM products as pro INNER JOIN images as img WHERE pro.id_image = img.id");
    return NextResponse.json(products[0] as Product[])
  } catch (error) {
    console.error("Error en la consulta de productos:", error);
    return NextResponse.json({ message: "Ha ocurrido un error al obtener los productos." }, { status: 500 });
  }
}