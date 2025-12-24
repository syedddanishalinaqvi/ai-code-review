import { getInstallationOctokit} from "@/lib/github/octokitInstance";

export async function pullRequest({
  installationId,
  owner,
  repo,
  pullNumber,
}: {
  installationId: number;
  owner: string;
  repo: string;
  pullNumber: number;
}) {
  if (!installationId) {
    console.log("Installation id not found");
    throw new Error("Installation id not found");
  }

  const octokit = await getInstallationOctokit(installationId);

  console.log({ octpkit: octokit });
  try {
    const response = await octokit.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: pullNumber,
    });
    console.log({ response: response });
    return response.data;
  } catch (error) {
    console.log({ error: error });
  }
}
