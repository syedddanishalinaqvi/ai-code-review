"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"

export default function Login() {
    const handleGithubLogin = () => {
        signIn("github",{callbackUrl:'/dashboard'})
        
    }
    return (
        <div className="flex justify-center items-center h-screen" >
            <div className="flex flex-col text-center"><div><h1 className="text-4xl pb-5">Sign In</h1></div>
                <div className="group border rounded-xl text-l p-2 flex hover:bg-white hover:text-black"><Image
                className="pr-1 group-hover:hidden" 
                          src="/github.svg"
                          alt="github.svg"
                          width={30}
                          height={30}
                        />
                        <Image
                className="pr-1 hidden group-hover:flex" 
                          src="/github-black.svg"
                          alt="github.svg"
                          width={30}
                          height={30}
                        />
                    <button onClick={handleGithubLogin}>Continue with Github</button></div></div>

        </div>
    )
}