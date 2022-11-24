export interface IUser {
  name: string | null;
  bio: string | null;
  createdAt: any | null;
  repos: number | null;
  followers: number | null;
  following: number | null;
  location: string | null;
  twitter_username?: string | null;
  website: string | null;
  company: string | null;
  avatar_url: string | null;
  username: string | null;
}