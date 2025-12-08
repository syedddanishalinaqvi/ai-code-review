"use client";
import Loading from "@/components/Loading";
import LogoutButton from "@/components/LogoutButton";
import Repositories from "@/components/Repositories";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type repo={
    id:number;
    name:string
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [repos, setRepos] = useState<repo[]>([]);
  useEffect(() => {
      fetch("/api/repositories")
        .then((response) => response.json())
        .then((data:repo[]) => setRepos(data));
    }, []);
  if (status === "loading") return <Loading />;
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  } else {
    console.log(session);
  }
  return (
    <div className="p-6 h-max bg-white">
      <header className="flex justify-between rounded-xl bg-blue-600 p-5 items-center mb-6">
        <h1 className="text-2xl text-black font-bold">AI Code Reviewer</h1>
        {session ? (
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
              <LogoutButton />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </header>
      {repos.length>0?<Repositories repos={repos}/>
      :
        <section className=" flex justify-center bg-white text-black shadow rounded p-4">
          <div className="text-center">
            <div>
              <p>No PRs reviewed yet. Install App to see your repos.</p>
            </div>
            <div>
              <button
                className=" px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                onClick={() =>
                  window.open(
                    "https://github.com/apps/ai-code-reviews",
                    "_blank"
                  )
                }
              >
                Install APP{" "}
              </button>
            </div>
          </div>
        </section>
      }
    </div>
  );
}
