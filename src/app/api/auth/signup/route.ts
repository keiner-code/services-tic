import { NextResponse } from "next/server";

export async function POST(request: Request){
  const {email, password} = await request.json();
  console.log(email, password);

  if(!password || password.length < 6)
  return NextResponse.json(
{message: "Password must be at last 6 characters"},{status: 400})
  return NextResponse.json({
    email: email,
    password: password
  })
}