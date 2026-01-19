import { app } from "./octokit";

export async function getInstallationOctokit(installationId: number) {
    if(!installationId){
        console.log("installation id not found")
        throw new Error("installation not found")
    }
  const octokitInstance = await app.getInstallationOctokit(
    installationId
  );
  return octokitInstance;
}
