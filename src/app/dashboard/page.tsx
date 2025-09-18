'use client'
import Loading from "@/components/Loading";
import LogoutButton from "@/components/LogoutButton";
import {useSession } from "next-auth/react";
import Image from "next/image";

export default function Dashboard(){
    const {data:session,status}=useSession()

    if(status==="loading") return <Loading/>
    if(!session){
        return {
            redirect:{
                destination:"/login"
            }
        }
    }
    else{
        console.log(session)
    }
    return(
      <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Code Reviewer</h1>
        {session? (
          <div className="flex items-center space-x-3">
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition text-black"
            >
              <Image
                src={session.user?.image || ""}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
                width={20}
                height={20}
              />
              <span className="text-white underline">
                {session.user?.name || "GitHub"}
              </span>
            </a>
            <div>
            <LogoutButton/>
            </div>
          </div>
        ):<Loading/>}
      </header>

      {/* Placeholder content */}
      <section className="bg-white text-black shadow rounded p-4">
        <p>No PRs reviewed yet. Connect a repo to start.</p>
      </section>
    </div>
    )
}