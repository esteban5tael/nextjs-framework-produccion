import NextAuth, { type NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import z from "zod";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";
export const authConfig = {
    pages: {
        signIn: "/auth/login",
        newUser: "/auth/new-account",
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                console.clear();
                const parsedCredentials = z
                    .object({
                        email: z.string().email(),
                        password: z.string().min(8),
                    })
                    .safeParse(credentials);

                if (!parsedCredentials.success) {
                    return null;
                }

                // const {email,password} = parsedCredentials.data;
                const email =
                    parsedCredentials.data.email.toLocaleLowerCase();
                const password = parsedCredentials.data.password;

                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user) {
                    return null;
                }

                if (!bcrypt.compareSync(password, user.password)) {
                    return null;
                }

                const { password: _, ...userWithoutPassword } = user;

                console.log("---------------------------------------------------")
                console.log("User authenticated:", userWithoutPassword);
                console.log("---------------------------------------------------")
                return userWithoutPassword;
            },
        }),
    ],
} satisfies NextAuthConfig;

export const { signIn, signOut, auth } = NextAuth(authConfig);
