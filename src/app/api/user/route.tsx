import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
type user = {
    username: string,
    email: string
}
export const POST = async (request: Request) => {
    const param: user = await request.json();
    const {username, email} = param;

    const user = await prisma.address.findFirst({
        where: {
            user: {
                username: username,
                email: email
            },
        }
      });
    return NextResponse.json(user);
}