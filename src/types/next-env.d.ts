import NextAuth from 'next-auth';
import { DefaultSession } from "next-auth";

declare module 'next-auth' {
  interface Session {
    account: {
      id?: string;
      role?: string;
    } & DefaultSession['user'];
  }
}