import { Octokit } from "octokit";

async function fetchFileContent({
  octokit,
  owner,
  repo,
  path,
}: {
  octokit: Octokit;
  owner: string;
  repo: string;
  path: string;
}) {
  const response = await octokit.rest.repos.getContent({
    owner,
    repo,
    path,
  });

  if (!("content" in response.data)) return null;

  return Buffer.from(response.data.content, "base64").toString("utf-8");
}

export default async function fetchRepoFiles({
  octokit,
  owner,
  repo,
}: {
  octokit: Octokit;
  owner: string;
  repo: string;
}) {
  const tree = await octokit.rest.git.getTree({
    owner,
    repo,
    tree_sha: "HEAD",
    recursive: "true",
  });

  console.log(tree)

  const NotAllowedExtensions = [".png", ".ico", ".txt", ".svg", ".md", "lock.json"];
  const files = tree.data.tree.filter((item) => {
    if (item.type !== "blob") return false;
    if (NotAllowedExtensions.some((ext) => item.path.endsWith(ext))) {
      return false;
    }
    return item;
  });

  const result = [];

  for (const file of files) {
    const content = await fetchFileContent({
      octokit,
      owner,
      repo,
      path: file.path,
    });

    if (!content) continue;

    result.push({
      path: file.path,
      content,
      language: file.path.split(".").pop(),
      commitSha:tree.data.sha,
    });
  }
  console.log("results length", result.length);
  return result;
}
