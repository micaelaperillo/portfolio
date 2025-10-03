export type ProjectType = {
  title: string;
  description: string;
  github?: string;
  tags: string[];
  link?: string;
};

export const projects: ProjectType[] = [
  {
    title: "Autoencoder and Variational Autoencoder",
    description: "Implementation of Autoencoder and Variational Autoencoder from scratch.",
    github: "https://github.com/micaelaperillo/autoencoders",
    tags: ["Python", "Artificial Intelligence"],
  },
  {
    title: "TalentSync",
    description: "Developed a full-stack web application for managing company resources across HR, managers, and employees. Built using Java 21, Spring, and PostgreSQL, following the MVC architecture. Employed agile methodologies with iterative development through sprints. Implemented unit testing and followed clean code practices for maintainability and scalability.",
    tags: ["Java", "HTML", "CSS", "Web Application", "Postgres", "SQL"]
  },
  {
    title: "Hopfield Network, Oja Network and Kohonen Network",
    description: "Implementation of Hopfield Network, Oja Network and Kohonen Network from scratch.",
    github: "https://github.com/micaelaperillo/variousNetworks",
    tags: ["Python", "Artificial Intelligence"],
  },
  {
    title: "Picapalabra",
    description: "Implementation of the Pasapalabra game. Over 2M views on the first week organically.",
    github: "https://github.com/micaelaperillo/pasapalabra",
    tags: ["Next.js", "Tailwind", "Games", "Vercel", "Web Application"],
    link: "https://picapalabra.vercel.app/",
  },
  {
    title: "Simple and Multilayer Perceptron",
    description: "Implementation of Simple and Multilayer Perceptron from scratch.",
    github: "https://github.com/micaelaperillo/perceptron",
    tags: ["Python", "Artificial Intelligence"],
  },
  {
    title: "Event Driven Molecular Dynamics",
    description: "Implementation and analysis of a two-dimensional molecular system where particles move inside a circular container and collide elastically with each other, with the container walls, and optionally with a fixed obstacle in the center.",
    github: "https://github.com/micaelaperillo/eventDrivenMolecularDynamics",
    tags: ["Java", "Python", "Matplotlib", "PyGame", "Simulation"],
  },
  {
    title: "Ground Station for the Cansat Competition",
    description: "Application developed using PyQt developed for the Cansat Competitions. Allows user to read data from the sensors in the Cansat and send command to it.",
    tags: ["Python", "PyQt"]
  },
  {
    title: "Tunevault",
    description: "Forum to exchange ideas about music using the Spotify API",
    github: "https://github.com/micaelaperillo/Tunevault",
    tags: ["Python", "HTML", "CSS", "JavaScript", "Django", "SQL"]
  },
  {
    title: "Portfolio",
    description: "My personal portfolio",
    github: "https://github.com/micaelaperillo/portfolio",
    tags: ["Next.js", "Tailwind", "Vercel", "Web Application"],
  },
  {
    title: "Operating System",
    description: "Developed an OS kernel implementing features such as memory management, process scheduling, inter-process communication (IPC), and synchronization mechanisms, utilizing system calls for user-kernel interaction.",
    github: "https://github.com/micaelaperillo/operatingSystem",
    tags: ["C"]
  },
  {
    title: "Image Compression with Triangles using Genetic Algorithms",
    description: "Implementation of an image compression technique based on genetic algorithms, where an image is approximated by a set of colored triangles.",
    github: "https://github.com/micaelaperillo/geneticAlgorithm",
    tags: ["Python", "Genetic Algorithms", "Artificial Intelligence"],
  },
  {
    title: "Voting Model",
    description: "Implementation and analysis of the Metropolis Montecarlo voting model",
    github: "https://github.com/micaelaperillo/voting_model",
    tags: ["Python", "Java", "Matplotlib", "PyGame", "Simulation"]
  },
  {
    title: "Invest Generation",
    description: "Built a gamified educational platform for learning about investments in a personalized way.",
    tags: ["Python", "Next.js", "Tailwind", "Web Application", "RAG", "Supabase", "SQL"]
  },
  {
    title: "Databases Web App",
    description: "Web application with an API and UI to manage clients, products, and bills using MongoDB and Redis for caching. Includes queries, views, and CRUD operations.",
    github: "https://github.com/micaelaperillo/databasesWebApp",
    tags: ["Python", "Streamlit", "MongoDB", "Redis", "Web Application", "FastAPI", "SQL", "NoSQL"]
  },
  {
    title: "Searching Algorithms",
    description: "Implementation and analysis of search methods applied to the Sokoban game, including BFS, DFS, Greedy, and A*. The project allows testing different heuristics, generating performance statistics, and visualizing solutions on custom maps.",
    github: "https://github.com/micaelaperillo/searchingAlgorithms",
    tags: ["Python", "Artificial Intelligence", "Search Algorithms", "Games"]
  },
  {
    title: "CAL 9000",
    description: "Designed and implemented a programming language and compiler for creating two-dimensional cellular automata, featuring user-defined rules and properties in a Python-like syntax, and outputting visual simulations via PyGame. Includes a syntax highlighter for the new language.",
    github: "https://github.com/micaelaperillo/CAL_9000",
    tags: ["Python", "PyGame", "C", "Compiler"]
  }

];
