import {User} from "../../../../types/index";
import { createClient, sql } from "@vercel/postgres";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest, { params }: Params) {
  const client = createClient();
  await client.connect();
  try {
    const { userId } = params;
    const { rowCount } = await sql`DELETE FROM users WHERE user_id = ${userId}`;
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
    const { userId } = params;
    const { rows } =
      await client.sql`SELECT * FROM users WHERE user_id = ${userId}`;
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
    const { userId } = params;
    const data = JSON.parse(
      (await request.body?.getReader().read())?.value?.toString() as string
    ) as User;
    await client.sql`UPDATE users SET name = ${data.name},
                        identification = ${data.identification},
                        image = ${data.image},
                        rol = ${data.rol},
                        email = ${data.email},
                        password = ${data.password},
                        state = ${data.state}
                        WHERE user_id = ${userId}`;

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Interno en el servidor: " + error },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
