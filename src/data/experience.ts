export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2024.8 - Present",
    title: "Research Scientist",
    company: "Sakana AI",
    // description:
    //  "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    // advisor: "Peter Wang",
    // companyUrl: "https://deepmind.com",
  },
  {
    date: "2021.11 - 2025.1",
    title: "Visiting Researcher",
    company: "RIKEN AIP",
    // description:
    //  "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com",
  },
  {
    date: "2018.10 - 2025.1",
    title: "Assistant Professor",
    company: "Tohoku University",
    // description:
    //  "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com",
  },
  {
    date: "2017.10 - 2021.9",
    title: "Researcher",
    company: "RIKEN AIP",
    // description:
    //  "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com",
  },
  {
    date: "2015.4 - 2017.9",
    title: "Research Fellow (DC1) of the Japan Society for the Promotion of Science",
    // company: "RIKEN AIP",
    // description:
    //  "Worked on improving robustness of large language models to distribution shifts",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com",
  },
];
