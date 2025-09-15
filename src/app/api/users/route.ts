import {prisma} from "@/lib/prismaClient"
import { NextApiRequest, NextApiResponse } from "next"


export const addUserHandler=async (req:NextApiRequest,res:NextApiResponse)=>{
    const {name,email,avatarUrl}=req.body;

    const user=await prisma.user.create({
        data:{name,email,avatarUrl},
    })
    return res.status(201).json(user)
}

export const getUserHandler=async(req:NextApiRequest,res:NextApiResponse)=>{
    const {id}=req.body;
    const user=await prisma.user.findOne(id) 
}
