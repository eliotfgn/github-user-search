import { Octokit, App } from "octokit";
import {IUser} from "./IUser";

const API_TOKEN = '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';
const octokit = new Octokit({auth: API_TOKEN});

async function fetchUser(username: string) {
  return await octokit.request('GET /users/{username}', {
    username: username
  });
}

export async function getUser(username: string) {
  let userInformation : IUser;
  return await fetchUser(username).then((data) => {
    console.log(data.data)
    let private_repos = data.data.total_private_repos ?? 0;
    userInformation = {
      name: data.data.name,
      bio: data.data.bio,
      createdAt: data.data.created_at,
      followers: data.data.followers,
      following: data.data.following,
      repos: data.data.public_repos + private_repos,
      location: data.data.location,
      website: data.data.blog,
      twitter_username: data.data.twitter_username,
      company: data.data.company,
      avatar_url: data.data.avatar_url,
      username: data.data.login
    };
    return userInformation;
  })
}