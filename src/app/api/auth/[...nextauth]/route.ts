import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient()

export const authoption:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            name:"google",
            clientId: process.env.clientId as string,
            clientSecret: process.env.clientSecret as string
        }),
        CredentialsProvider({
            name:"credentials",
            credentials: {
                email: {label: "Username", type: "text", placeholder: "Peter"},
                password : {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })

                if (!user) {return null;} 

                const hashPassword = await bcrypt.compare(credentials.password, user.password)
                if (!hashPassword) { return null; }
                return user;
            },
        }),
    ],
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development",
    
};

const handler = NextAuth(authoption);

export {handler as GET, handler as POST}