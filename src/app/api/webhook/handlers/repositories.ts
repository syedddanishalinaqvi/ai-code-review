import prisma from "@/lib/prismaClient";

interface Installation {
  id: number;
  installationId:number,
}
interface Repository {
  id: number;
  name: string;
  full_name: string;
}
// interface Payload {
//   action: string;
//   installation: Installation;
//   repositories: Repository[];
//   sender: object;
// }
export async function addRepositories({repos,installation}:{repos:Repository[],installation:Installation}){
    if (Array.isArray(repos)) {
        const allRepos=await Promise.all(
          repos.map((repo: Repository) => {
            return prisma.repository.upsert({
              where: { repoId: repo.id },
              update: {
                name: repo.name,
                fullName: repo.full_name,
                installationId: installation.installationId,
              },
              create: {
                repoId:repo.id,
                name: repo.name,
                fullName:repo.full_name,
                installationId:installation.installationId
              },
            });
          })
        );
        return allRepos;
      }
}
