import { app } from "./octokit";

export async function getInstallationOctokit(installationId: number) {
    if(!installationId){
        console.log("installation id not found")
        throw new Error("installation not found")
    }
  const installationAccessToken = await app.getInstallationOctokit(
    installationId
  );
  console.log({octpkitInstance:installationAccessToken})
  return installationAccessToken;
}
