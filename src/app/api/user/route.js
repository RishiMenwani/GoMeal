import { connectToDatabase } from "@/helpers/serverConnect";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export const GET = async () => {
  try {
    await connectToDatabase();
    const users = await prisma.user.findMany();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect;
  }
};
