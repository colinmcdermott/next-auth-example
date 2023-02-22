// Path: pages\api\auth\[...nextauth].ts

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        if (!user.isFirstLogin) {
          // This is the first time the user logs in
          token.user.isFirstLogin = true;
          token.userRole = "admin";
        }
      }
      return token;
    },
    async redirect({ url, baseUrl, user }) {
      if (user.isFirstLogin) {
        return Promise.resolve("/plans");
      }
      return Promise.resolve(url);
    },
  },
};

export default NextAuth(authOptions);