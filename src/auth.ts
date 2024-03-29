import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authOptions,
  callbacks: {
    async signIn({ profile }) {
      if (profile) {
        const prisma = new PrismaClient();
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: profile.email || "",
            },
          });
          if (!user) {
            if (profile.at_hash && profile.email && profile.name) {
              await prisma.user.create({
                data: {
                  id: profile.at_hash + "",
                  email: profile.email,
                  name: profile.name,
                  image:
                    profile.picture + "" ||
                    `https://ui-avatars.com/api/?name=${profile.name}`,
                },
              });
              return true;
            } else {
              return false;
            }
          }
          return true;
        } catch (e) {
          return false;
        }
      }
      return true;
    },
  },
});
