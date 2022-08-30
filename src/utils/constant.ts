// INFO: Types of Social Media (SM) profiles each moderation can have.
type SmTypes = {
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

// INFO: Strict "types" for better management of displaying the moderation team information.
type ModeratorTypes = {
  name:
    | "Somraj Saha"
    | "Bhupesh Varshney"
    | "Sidharth Gehlot"
    | "Yash Sharan"
    | "Bhupesh Pradhan"
    | "Namanpreth Shergill"
    | "Placeholder John"
    | "Shreyas Gupta";
  role:
    | "Community Admin"
    | "GitHub Moderator"
    | "Discord Moderator"
    | "SubReddit Moderator";
  img: string;
  tagline: string;
  socials?: SmTypes;
};

export const moderators: ModeratorTypes[] = [
  {
    name: "Sidharth Gehlot",
    role: "Community Admin",
    img: "https://avatars.githubusercontent.com/u/54112684?v=4",
    tagline: "Self-employed entrepreneur with lots & lots of talents!",
    socials: {
      github: "sidharthgehlot",
    },
  },
  {
    name: "Bhupesh Varshney",
    role: "Community Admin",
    img: "https://avatars.githubusercontent.com/u/34342551?v=4",
    tagline: "World's best community admin!",
    socials: {
      twitter: "bhupeshhimself",
      github: "Bhupesh-V",
    },
  },
  {
    name: "Somraj Saha",
    role: "GitHub Moderator",
    img: "https://avatars.githubusercontent.com/u/31373860?v=4",
    tagline: "Placeholder text to check if TypeScript works.",
    socials: {
      twitter: "Jarmosan",
      linkedin: "jarmos",
      github: "Jarmos-san",
      website: "jarmos.vercel.app",
    },
  },
  {
    name: "Placeholder John",
    role: "Discord Moderator",
    img: "https://picsum.photos/200/300?random=1",
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui. Donec imperdiet velit.",
  },
  {
    name: "Placeholder John",
    role: "Discord Moderator",
    img: "https://picsum.photos/200/300?random=2",
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui. Donec imperdiet velit.",
  },
  {
    name: "Placeholder John",
    role: "Discord Moderator",
    img: "https://picsum.photos/200/300?random=3",
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui. Donec imperdiet velit.",
  },
];
