type ModeratorTypes = {
  name:
    | "Somraj Saha"
    | "Bhupesh Varshney"
    | "Sidharth Gehlot"
    | "Yash Sharan"
    | "Bhupesh Pradhan"
    | "Shreyas Gupta";
  designation:
    | "Community Admin"
    | "GitHub Moderator"
    | "Discord Moderator"
    | "SubReddit Moderator";
  img: string;
  tagline: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

export const moderators: ModeratorTypes[] = [
  {
    name: "Somraj Saha",
    designation: "GitHub Moderator",
    img: "https://avatars.githubusercontent.com/u/31373860?v=4",
    tagline: "Placeholder text to check if TypeScript works.",
    twitter: "Jarmosan",
    linkedin: "jarmos",
    github: "Jarmos-san",
    website: "jarmos.vercel.app",
  },
  {
    name: "Bhupesh Varshney",
    designation: "Community Admin",
    img: "https://avatars.githubusercontent.com/u/34342551?v=4",
    tagline: "World's best community admin!",
    twitter: "bhupeshhimself",
    github: "https://github.com/Bhupesh-V",
  },
  {
    name: "Sidharth Gehlot",
    designation: "Community Admin",
    img: "https://avatars.githubusercontent.com/u/54112684?v=4",
    tagline: "Self-employed entrepreneur with lots & lots of talents!",
    github: "https://github.com/sidharthgehlot",
  },
];
