import { App } from "octokit";

const app = new App({
  appId: process.env.GITHUB_APP_ID!,
  privateKey: process.env.GITHUB_PRIVATE_KEY!,
});

const octokit = await app.getInstallationOctokit(90961910);
export const { data: repos } = await octokit.rest.apps.listReposAccessibleToInstallation();

