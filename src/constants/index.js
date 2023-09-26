// Importing various assets from the '../components/assests' file
import {
  mobile,
  backend,
  creator,
  web,
  problem_solver,
  javascript,
  typescript,
  html,
  css,
  mern_logo,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // new icons ToDO remove old one

  carrent,
  jobit,
  tripguide,
  threejs,
  matlab,
  c,
  cpp,
  python,
  mysql,
  thinker_logo,
  communicator_logo,
  team_work,
  programmer,
} from '../components/assests';
import threads_icon from '../components/assests/threads_icon.png';
// Navigation links for the portfolio website
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id : "https://drive.google.com/file/d/1nFI8dj8HPThAQIrTWtOb5onJGKwP4voQ/view",
    title : "Resume"
  }
];

// Array of services provided by the person/portfolio owner
const services = [
  {
    title: "Quick Learner",
    icon: programmer,
  },
  {
    title: "Team Collaboration",
    icon: team_work,
  },
  {
    title: "Critical Thinker",
    icon: thinker_logo,
  },
  {
    title: "Problem Solver",
    icon: problem_solver,
  },
];

// Array of technologies the person/portfolio owner is proficient in
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "matlab",
    icon: matlab,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// Array of work experiences at different companies
const experiences = [
  {
    title: "Threads App",
    project_sub_title: "Full-stack MERN Apps",
    icon: threads_icon,
    iconBg: "#383E56",
    date: "July 2023 - Aug 2023",
    github_link:"https://github.com/Niteshmeena9672/Threads",
    points: [
      "Developed a social media app called Thread using the MERN stack. Users can share their threads, create communities, invite others, and join existing communities.",
      "Implemented features such as proficient data management with MongoDB, crafting an engaging user interface with Tailwind-css, implementing robust user authentication, and real-time event handling.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
     
    ],
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "orange-text-gradient",
      },
      {
        "name": "Node.js",
        color: "pink-text-gradient",
      }
    ],
    
  },
  {
    title: "Active Learning for SVM Model Enhancement ",
    project_sub_title: "Active Learning ",
    icon: threads_icon,
    iconBg: "#383E56",
    date: "July 2023 - Aug 2023",
    github_link:"https://github.com/Niteshmeena9672/Active-Learning",
    points: [
      "Implemented an active learning technique in Python to improve the performance of a Support Vector Machine(SVM) classifier.",
      "Utilized data processing techniques to extract and visualize data, focusing on a 2D graph for clarity.",
      "Demonstrated iterative active learning, selecting and labeling the most ambiguous data points in each iteration to update the SVM model.",
      "Created visual documentation, including plots and GIF animations, to illustrate the convergence of the SVM decision boundary with more labeled data points."
     
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "orange-text-gradient",
      },
      
    ],
    
  },
  {
    title: "Threads App",
    project_sub_title: "Full-stack MERN Apps",
    icon: threads_icon,
    iconBg: "#383E56",
    date: "July 2023 - Aug 2023",
    github_link:"https://github.com/Niteshmeena9672/Threads",
    points: [
      "Developed a social media app called Thread using the MERN stack. Users can share their threads, create communities, invite others, and join existing communities.",
      "Implemented features such as proficient data management with MongoDB, crafting an engaging user interface with Tailwind-css, implementing robust user authentication, and real-time event handling.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
     
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "orange-text-gradient",
      },
      
    ],
    
  },
  {
    title: "Threads App",
    project_sub_title: "Full-stack MERN Apps",
    icon: threads_icon,
    iconBg: "#383E56",
    date: "July 2023 - Aug 2023",
    github_link:"https://github.com/Niteshmeena9672/Threads",
    points: [
      "Developed a social media app called Thread using the MERN stack. Users can share their threads, create communities, invite others, and join existing communities.",
      "Implemented features such as proficient data management with MongoDB, crafting an engaging user interface with Tailwind-css, implementing robust user authentication, and real-time event handling.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
     
    ],
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "orange-text-gradient",
      },
      {
        "name": "Node.js",
        color: "pink-text-gradient",
      }
    ],
    
  },
  
];

// Array of testimonials from clients or colleagues
// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// Array of projects with their details and tags
const projects = [
  {
    name: "Data Structures and Algorithms",
    description:
      "Completed a comprehensive Data Structures and Algorithms (DSA) curriculum as part of my academic program. Gained proficiency in essential DSA concepts, problem-solving, and algorithm design.",
    // tags: [
    //   {
    //     name: "react",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "mongodb",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "tailwind",
    //     color: "pink-text-gradient",
    //   },
    // ],
    // image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Introduction to Machine Learning",
    description:
      " Completed an extensive Introduction to Machine Learning program as part of my academic curriculum. Acquired strong foundation in machine learning fundamentals, including data analysis, model building, and predictive analytics."},
      {
    name: "Introduction to Programming",
    description:
      "Successfully completed an introductory programming course, focusing on the Python programming language. Attained fundamental skills in coding, problem-solving, and software development using Python."},

  {
    name: "Database Management System (DBMS) ",
    description:
      "Self-learned the fundamentals of Database Management Systems (DBMS), including database design, querying, and maintenance, demonstrating a solid grasp of the subject through self-directed learning and hands-on practice.",
   
  },
  {
    name: "Introduction to MATLAB",
    description:
      " Successfully completed an introductory course in MATLAB, gaining valuable hands-on experience in scientific and engineering programming. Developed proficiency in using MATLAB for data analysis, numerical computation, and algorithm development.",
   
  },
  {
    name: "Web Development Course",
    description:
      "Completed an online web development course, excelling in MERN stack (MongoDB, Express.js, React, Node.js) along with HTML, CSS, JavaScript, and responsive web design principles. Demonstrated expertise by deploying full-stack web applications.",
   
  },
  
];

// Exporting the arrays for use in other modules
export { services, technologies, experiences,/* testimonials,*/ projects };
