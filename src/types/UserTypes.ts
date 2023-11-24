export interface ProfileTypes {
  name: string;
  bio: string;
  profile_picture?: string;
  job: string;
  website: string;
  social_links?: [
    {
      platform: string;
      url: string;
    }
  ];
}

export interface UserTypes {
  _id: string;
  username: string;
  email: string;
  profile: ProfileTypes;
  isAdmin: boolean;
}
