import {CreateImagen} from "../../../../types";
import { createClient, sql } from "@vercel/postgres";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest, { params }: Params) {
  const client = createClient();
  await client.connect();
  try {
    const { imageId } = params;
    const { rowCount } = await sql`DELETE FROM images WHERE image_id = ${imageId}`;
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
    const { imageId } = params;
    const { rows } =
      await client.sql`SELECT * FROM images WHERE image_id = ${imageId}`;
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
    const { imageId } = params;
    const data = JSON.parse(
      (await request.body?.getReader().read())?.value?.toString() as string
    ) as CreateImagen;
    await client.sql`UPDATE images SET image1 = ${data.image1},
                        image2 = ${data.image2},
                        image3 = ${data.image3},
                        image4 = ${data.image4}
                        WHERE image_id = ${imageId}`;

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { message: "Error Interno en el servidor: " + error },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
