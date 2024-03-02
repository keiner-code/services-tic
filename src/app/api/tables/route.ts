import { VercelClient, createClient } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const client = createClient();
  await client.connect();
  try {
    //await dropTables(client);
    await createTableUser(client);
    await createTableImages(client);
    await createTableProducts(client);

    return NextResponse.json({ message: "created" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await client.end();
  }
}
async function createTableUser(client: VercelClient) {
  await client.sql`CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        name VARCHAR (100) NOT NULL,
        identification INTEGER NOT NULL,
        image VARCHAR (300) NOT NULL,
        rol VARCHAR (100) NOT NULL,
        email VARCHAR (255) UNIQUE NOT NULL,
        password VARCHAR (255) NOT NULL,
        state BOOLEAN NOT NULL)`;
}
async function createTableImages(client: VercelClient) {
  await client.sql`CREATE TABLE IF NOT EXISTS  images (
        image_id SERIAL PRIMARY KEY,
        image1 VARCHAR(300) NOT NULL,
        image2 VARCHAR(300) NOT NULL,
        image3 VARCHAR(300) NOT NULL,
        image4 VARCHAR(300) NOT NULL)`;
}
async function createTableProducts(client: VercelClient) {
  await client.sql`CREATE TABLE IF NOT EXISTS products (
        product_id SERIAL PRIMARY KEY,
        name VARCHAR (100) NOT NULL,
        maker VARCHAR (100) NOT NULL,
        amount INTEGER NOT NULL,
        price INTEGER NOT NULL,
        discount INTEGER NOT NULL,
        description VARCHAR (300) NOT NULL,
        state BOOLEAN NOT NULL,
        image_id INT UNIQUE,
        CONSTRAINT fk_image_id FOREIGN KEY (image_id) 
        REFERENCES images(image_id))`;
}
async function dropTables(client: VercelClient) {
  await client.sql`DROP TABLE IF EXISTS users;
            DROP TABLE IF EXISTS products;
            DROP TABLE IF EXISTS images`;
}
