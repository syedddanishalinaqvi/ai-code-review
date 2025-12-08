import Repository from "@/smallComponents/repository";
import { useEffect, useState } from "react";

type repo={
    id:number;
    name:string
}

interface RepositoriesProps {
  repos: repo[];
}

export default function Repositories({ repos }: RepositoriesProps) {
  return (
    <div className="flex flex-col text-black p-2">
        <div className="text-2xl font-bold pb-4 ">
            Repositories
        </div>
        <div>
            {repos.map((repo) => (
        <Repository key={repo.id}name={repo.name}/>
      ))}
        </div>
    </div>
  );
}
