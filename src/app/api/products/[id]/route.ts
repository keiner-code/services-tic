import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import {pool} from '../../../../database/config';
import {Product} from '../../../../types';

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: NextApiRequest, {params}: Params) {
  try {
    const connection = await pool.getConnection();
    const product = await connection.query(`SELECT * FROM products as pro INNER JOIN images as img WHERE pro.id_image = img.id AND pro.id = ${params.id}`)
    
    return NextResponse.json(product[0][0] as Product)
  } catch (error) {
    NextResponse.json(
      {message: error},
      {status: 500}
      )
  }
}