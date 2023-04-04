import NextAuth from "next-auth"
import Providers from "next-auth/providers";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});