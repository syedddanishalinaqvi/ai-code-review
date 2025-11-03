import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "./prismaClient"
import type { JWT } from "next-auth/jwt";
import type { Account } from "next-auth";
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

  ],
  callbacks:{
    async signIn({user}:{user:import('next-auth').User}){
      if(!user.email) return false;
      await prisma.user.upsert({
        where:{email:user.email},
        update:{
          avatarUrl:user.image
        },
        create:{
          email:user.email,
          name:user.name??"",
          avatarUrl:user.image??""
        }
      })
      return true
    }
    // async jwt({token, account}:{token:JWT;account?:Account|null}){
    //   if(account){
    //     token.accessToken=account.access_token
    //   }
    //   return token
    // },
  }

};

export default NextAuth(authOptions);
