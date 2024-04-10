// import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
// const client = new PrismaClient();//not a good practice
// Instead do this
import client from "@/db";
export async function GET() {
  return await Response.json({
    email: "harkirat@gmail.com",
    name: "harkirat",
  });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  console.log(body);
  return Response.json({ message: "You are loggged in" });
}
