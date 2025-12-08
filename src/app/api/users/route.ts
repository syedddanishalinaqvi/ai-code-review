import prisma from "@/lib/prismaClient"
import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";
// import { NextApiRequest, NextApiResponse } from "next"


// export async function POST(req:Request){
//     try{
//     const body = await req.json();
//     const {name,email,avatarUrl}=body;

//     if(!name||!email){
//         return new Response(JSON.stringify({error:"Either email or name is not there"}),{
//             status:400
//         })
//     }

//     const user=await prisma.user.create({
//         data:{name,email,avatarUrl},
//     })

//     return new Response(JSON.stringify(user),{
//         status:201,
//         headers:{'Content-Type':'application/json'}
//     })
// }
//     catch(err){
//         console.error(err);
//         return new Response(JSON.stringify({error:"Failed to create user"}),{
//             status:500
//         })
//     }
// }

export async function GET(req:Request,res:Response){
    try{
        const cookie=await cookies()
        const userID=cookie.get('userID')
        const getUser=await prisma.user.findFirst({where:{id:userID?.value}})
        console.log(getUser)
        return new Response(JSON.stringify(getUser))
    }
    catch{
    return new Response(JSON.stringify({name:'Danish'}))
    }
}
// export const getUserHandler=async(req:NextApiRequest,res:NextApiResponse)=>{
//     const {id}=req.body;
//     const user=await prisma.user.findUnique(id)
//     return res.status(201).json(user)
// }

