import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
//   callbacks:{
//     async session({session,user}:{session:Session,user:User}){
//         return session
//     }
//   }

};

export default NextAuth(authOptions);
