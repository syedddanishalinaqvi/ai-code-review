import auth, {authOptions} from "@/lib/auth";
import prisma from "@/lib/prismaClient";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if(!session?.user?.email){
    return new Response("unauthorized",{status:401});
  }

  const user = await prisma.user.findUnique({
    where: {
      email:session?.user.email
    },
    include:{
        installation:{
            include:{
                repositories:true
            }
        }
    }
  });
  return new Response(JSON.stringify(user?.installation?.repositories??[]));
}