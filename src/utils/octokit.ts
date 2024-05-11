import { Octokit } from 'octokit';
const { GITHUB_ACCESS_TOKEN }  = process.env;

const octokit = new Octokit({
  auth: GITHUB_ACCESS_TOKEN,
});

export default octokit;
