import prisma from "@/lib/prisma/prismaClient";
import { addRepositories } from "./repositories";
import { getInstallationOctokit } from "@/lib/github/octokitInstance";
import fetchRepoFiles from "@/lib/github/fetchRepo";

interface Installation {
  id: number;
  installationId:number,
  account: Account;
}
interface Account {
  id: number;
  login: string;
  type: string;
}
interface Repository {
  id: number;
  name: string;
  full_name: string;
}
interface Payload {
  action: string;
  installation: Installation;
  repositories: Repository[];
  sender: object;
}

export async function installationCreated(payload: Payload) {
  const githubId = payload.installation.account.id;
  const repos = payload.repositories;

  if (!githubId) {
    console.log("user id not found in payload");
    // return new Response(
    //   JSON.stringify({ message: "user id not found in payload" }),
    //   { status: 400 }
    // );
    throw new Error("user id not found in payload");
  }

  const user = await prisma.user.findUnique({
    where: { githubId: githubId.toString() },
  });

  if (!user) {
    console.log("User not found with this id");
    // return new Response(
    //   JSON.stringify({ message: "User not found with this id" }),
    //   {
    //     status: 400,
    //   }
    // );
    throw new Error("User not found with this id");
  }

  const installation = await prisma.installation.upsert({
    where: { userId: user.id },
    update: {
      accountLogin: payload.installation.account.login,
      accountType: payload.installation.account.type,
      userId: user.id,
    },
    create: {
      installationId: payload.installation.id,
      accountLogin: payload.installation.account.login,
      accountType: payload.installation.account.type,
      userId: user.id,
    },
  });
  
  const repositories=await addRepositories({repos,installation});
  const octokitInstance=await getInstallationOctokit(payload.installation.id);
  const owner=payload.installation.account.login;
  const repo=payload.repositories[0].name;
  const getContent=await fetchRepoFiles({octokit:octokitInstance,owner,repo})
  console.log({"installation":installation,"Repos":repositories,"repoTree":getContent});
  return new Response(
    JSON.stringify({ data: installation }),
    {
      status: 200,
    }
  );
}

export async function installationDeleted(payload: Payload) {
  const githubId = payload.installation.account.id;

  if (!githubId) {
    console.log("user id not found in payload");
    return new Response(
      JSON.stringify({ message: "user id not found in payload" }),
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { githubId: githubId.toString() },
  });

  if (!user) {
    console.log("User not found with this id");
    return new Response(
      JSON.stringify({ message: "User not found with this id" }),
      {
        status: 400,
      }
    );
  }

  const DeletedInstallation = await prisma.installation.delete({
    where: { userId: user.id },
  });
  console.log(DeletedInstallation);
  return new Response(JSON.stringify({ data: DeletedInstallation }), {
    status: 200,
  });
}
