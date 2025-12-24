import { App } from "octokit";

export const app = new App({
  appId: process.env.GITHUB_APP_ID!,
  privateKey: process.env.GITHUB_RSA_KEY!.replace(/\\n/g, '\n'),
  webhooks:{
    secret:process.env.GITHUB_WEBHOOK_SECRET!
  }
});

