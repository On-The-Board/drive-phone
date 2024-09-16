import NextAuth from "next-auth";
import "next-auth/jwt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials?.username) return null;
        const user = prisma.admin.findFirst({
          where: {
            username: {
              equals: credentials?.username,
            },
            password: {
              equals: credentials?.password, // TO DO: Hash password using SHA-512 + Salt
            },
          },
        });
        if (user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
