import GithubProvider from "next-auth/providers/github";
import {prisma}  from "../prisma/prismaClient";
import NextAuth, { Account, User} from "next-auth"


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account}: { user:User,account:Account|null}) {
      if (!user ||!account) return false;
      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          avatarUrl: user.image,
          githubId:account.providerAccountId,
        },
        create: {
          email: user.email,
          name: user.name ?? "",
          avatarUrl: user.image ?? "",
          githubId:account.providerAccountId,
        },
      });
      return true;
    },
  },
};

export default NextAuth(authOptions);
