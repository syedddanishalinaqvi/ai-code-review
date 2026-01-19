
import { callLancedb } from "../lib/embeddings/storeembeddings.ts";
// import { app } from "../lib/github/octokit.js"; // your App instance
// import AIResponse from "../lib/openAi.js";
async function testListFiles() {
  const table = await callLancedb();
  const n = await table.countRows();
  console.log("rows:", n);
  // try {
  //   // Replace with your installation ID
  //   const installationId = 99732658;

  //   // Create an Octokit instance for this installation
  //   const octokit = await app.getInstallationOctokit(installationId );

  //   // Replace with your repository info
  //   const owner = 'syedddanishalinaqvi';
  //   const repo = 'testing-aicodereviews';
  //   const pull_number = 12;

  //   const response = await octokit.rest.pulls.listFiles({
  //     owner,
  //     repo,
  //     pull_number,
  //   });

  //   console.log('Files in this PR:');
  //   console.log(response.data[0].patch)
  //   const patch=response.data[0].patch
  //   const AIresponse=await AIResponse(patch);
  //   console.log(AIresponse);

  // } catch (error) {
  //   console.error('Error fetching PR files:', error);
  // }
}

testListFiles();
