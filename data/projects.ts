export type ProjectType = {
  title: string;
  description: string;
  github: string;
  tags: string[];
};

export const projects: ProjectType[] = [
  {
    title: "Title 1",
    description: "Description 1",
    github: "https://github.com/user/repo1",
    tags: ["tag1", "tag2"],
  },
  {
    title: "Title 2",
    description: "Description 2",
    github: "https://github.com/user/repo2",
    tags: ["tag3", "tag4"],
  },
];
