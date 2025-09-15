import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;

            name: string;
            email: string;
            emailVerified?: boolean | null;

            image?: string;
            role: "user" | "admin";

            createdAt: Date;
            updatedAt: Date | null;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt";
