export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2015—2017",
    institution: "Yokohama National University",
    degree: "Ph.D. in Engineering (finished in 2.5 years)",
    //advisor: "Prof. Sarah Johnson",
  },
  {
    year: "2013—2015",
    institution: "Yokohama National University",
    degree: "M.S. in Engineering",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2010—2013",
    institution: "Yokohama National University",
    degree: "dropout for grade-skipping",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
