'use server';
import octokit from '@/utils/octokit';

export default async function getRepo({
  owner,
  repo,
  isPublic,
}: {
  owner: string;
  repo: string;
  isPublic: boolean;
}) {
  try {
    if (isPublic) {
      const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
        owner,
        repo,
      });
      // console.log(data);
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
