// import { Octokit } from "octokit";

// export async function fetchFileContent(
//   {octokit,
//   owner,
//   repo,
//   path}:{octokit:Octokit, owner:string, repo:string,path:string}
// ) {
//   const response = await octokit.rest.repos.getContent({
//     owner,
//     repo,
//     path,
//   });

//   if (!("content" in response.data)) return null;

//   return Buffer
//     .from(response.data.content, "base64")
//     .toString("utf-8");
// }

// export async function fetchRepoFiles({
//   octokit,
//   owner,
//   repo,
// }:{octokit:Octokit, owner:string, repo:string}) {
//   const tree = await octokit.rest.git.getTree({
//     owner,
//     repo,
//     tree_sha: "HEAD",
//     recursive: "true",
//   });
//   const result = [];

//   for (const file of tree.data.tree) {
//     const content = await fetchFileContent({
//       octokit,
//       owner,
//       repo,
//       file.path
//   });

//     if (!content) continue;

//     result.push({
//       path: file.path,
//       content,
//       language: file.path.split(".").pop(),
//     });
//   }

//   return result;
// }