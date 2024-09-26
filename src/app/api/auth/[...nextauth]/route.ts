import NextAuth from "next-auth";
import "next-auth/jwt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createHash } from "crypto";
import { prisma } from "@/lib/prisma";

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const password = createHash('sha256').update(credentials.password).digest('hex');
        const user = await prisma.user.findFirst({
          where: {
            password: password,
            email: credentials.email
          }
        });
        const userFinal = user ? {
          ...user,
          id: user?.id.toString()
        } : null;
        return userFinal;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
