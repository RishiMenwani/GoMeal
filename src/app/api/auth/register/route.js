import { connectToDatabase } from "@/helpers/serverConnect";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    const user = await prisma.user.create({
      data: { email, name, hashedPassword },
    });
    console.log("__user", user);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 501 });
  } finally {
    await prisma.$disconnect();
  }
};
