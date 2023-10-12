import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
type user = {
  username: string;
  email: string;
  password: string;
  fullname: string;
  gender: string;
};

export async function POST(request: Request) {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const body: user = await request.json();
  const { fullname, username, email, password, gender } = body;
  if (!username || !email || !password || typeof username != "string") {
    return NextResponse.json(
      {
        message: "Dataform invalid",
        response: false,
      },
      { status: 401 }
    );
  }
  if (password.length < 6) {
    return NextResponse.json(
      {
        message: "Password length must be at least 6 characters",
        response: false,
      },
      {
        status: 401,
      }
    );
  }
  if (!expression.test(email)) {
    return NextResponse.json(
      {
        message: "Email not valid",
        response: false,
      },
      {
        status: 401,
      }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    const NewUser = await prisma.user.create({
      data: {
        username: username,
        name: fullname,
        email: email,
        password: await bcrypt.hash(password, 10),
        gender: gender,
      },
    });
    return NextResponse.json(
      { message: "ok", user: NewUser, response: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "This email already exits!", response: false },
      { status: 200 }
    );
  }
}
