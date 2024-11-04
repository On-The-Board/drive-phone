import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Nom", type: "text", placeholder: "jsmith@gmail.com" },
                password: { label: "Mot de passe", type: "password" }
            },
            async authorize(credentials) {     
                if(!credentials?.email || !credentials?.password){
                    return null
                }
               
                const existingUser = await prisma.user.findUnique({
                    where: {email: credentials?.email}
                })
                if(!existingUser) {
                    return null;
                }

                const passordMatch = await compare(credentials.password, existingUser.password);

                if(!passordMatch){
                    return null;
                }

                return {
                    id: `${existingUser.id}`,
                    email: existingUser.email,

                }
            },
        })
    ],
    pages: {
        signIn: "/account/login",
    },
    callbacks: {
        session: async ({ session, token }) => {
          if (session?.user) {
            session.account.id = token.sub!;
          }
          return session;
        },
        jwt: async ({ user, token }) => {
          if (user) {
            token.uid = user.id;
          }
          return token;
        },
      },
}