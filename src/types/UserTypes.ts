interface Profile {
  name: string;
  bio: string;
  profile_picture: string;
  job: string;
  website: string;
  social_links: [
    {
      platform: string;
      url: string;
    }
  ];
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  profile: Profile;
  isAdmin: boolean;
}
