export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Masanori Suganuma",
  title: "Research Scientist",
  institution: "Sakana AI",
  // Note that links work in the description
  description:
    "I'm a research scientist working at Sakana AI in Tokyo. My research focuses on developing good vision and language models.",
  email: "msuganuma[at]sakana.ai",
  imageUrl: "/images/suganuma.jpg",
  //imageUrl:
  //  "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.co.jp/citations?user=NpWGfwgAAAAJ&hl=ja&oi=ao",
  githubUsername: "sg-nm",
  linkedinUsername: "masanori-suganuma-267928171",
  twitterUsername: "wkpeco",
  blogUrl: "https://",
  cvUrl: "/images/suganuma_cv.pdf",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
