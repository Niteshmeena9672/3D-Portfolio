// Importing various assets from the '../../assests' file
import {
  
  problem_solver,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  matlab,
  c,
  cpp,
  python,
  mysql,
  thinker_logo,
  team_work,
  programmer,
 
} from '../../assests';
import meesho_logo from '../../assests/meesho_logo.ico';
import active_learning_logo from '../../assests/active_learning_logo.jpg';
import ambulance from '../../assests/ambulance.png';
import threads_icon from '../../assests/threads_icon.png';
import exposys_icon from '../../assests/exposys_icon.png';
import itjobxs_icon from '../../assests/itjobxs.png';
import appointment_logo from '../../assests/appointment.png';
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
    id : "https://drive.google.com/file/d/1pvU6HaLDPNsUGCTngGJq2k-d7Cyv94Kg/view?usp=drive_link",
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
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "mongodb",
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
    title: "Exposys Data Labs",
    project_sub_title: "Internship Project",
    icon: exposys_icon,
    iconBg: "#383E56",
    date: "Oct 2023 - Nov 2023",
    // github_link:"https://github.com/Niteshmeena9672/Threads",
    points: [
      "Developed one video conferencing website called 'MeetMingle' using HTML, CSS, and JavaScript. Leveraged Agora SDK to provide a seamless and high-quality real-time voice and video communication experience for participants.",
      "Designed an intuitive interface forthe application, ensuring a user-friendly experience.",
      "Users can create dedicated meeting rooms and share unique room names with others, allowing easy access to meetings.",
      "Enhanced collaboration by supporting more than 5 userssimultaneously, enabling screen sharing, and providing a platform for participants to engage in real-time chats during meetings.",
     
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind-CSS.js",
        color: "blue-text-gradient",
      },
      {
        name: "Agora-Sdk",
        color: "orange-text-gradient",
      },
      
    ],
    
  },
  {
    title: "Software Development Intern",
    project_sub_title: "Internship Project",
    icon: itjobxs_icon,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
        "Worked on designing and developing a fully responsive landing page for the ITJOBXS website using HTML, Vanilla CSS, and Bootstrap.",
        "Enhanced website security by integrating reCAPTCHA, resulting in a 40% decrease in spam and malicious activities.",
        "Achieved a 30% boost in authentic user engagement by effectively implementing user verification, identification, and removal of bots."
    ],
    tags: [
        {
            "name": "HTML",
            "color": "blue-text-gradient"
        },
        {
            "name": "Vanilla CSS",
            "color": "green-text-gradient"
        },
        {
            "name": "Bootstrap",
            "color": "pink-text-gradient"
        },
        {
            "name": "PHP",
            "color": "blue-text-gradient"
        },
        {
            "name": "MySQL",
            "color": "orange-text-gradient"
        }
    ]
},
  {
    title: "Threads App",
    project_sub_title: "Full-stack MERN Apps",
    icon: threads_icon,
    iconBg: "#383E56",
    date: "Sep 2023 - Oct 2023",
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
    icon: active_learning_logo,
    iconBg: "#f5f5f5",
    date: "Aug 2023 - Sep 2023",
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
    title: "Dr. Appointment ",
    project_sub_title: "Mern Stack ",
    icon: appointment_logo,
    iconBg: "#f5f5f5",
    date: "Aug 2023 - Sep 2023",
    github_link:"https://github.com/Niteshmeena9672/Dr.-Appointment",
    points: [
      "Developed an interactive Dr. Appointment website to address hospital queue management challenges.",
      "Designed and deployed a user-friendly registration and authentication system allowing users to manage profiles, apply for doctor roles,schedule appointments, check availability, and receive notifications increasing user satisfaction by 20%.",
      "Administrators can accept or reject any user’s request to become a doctor, remove any user or doctor from the site, and view all users and applications reducing the false registers by 50%.",
     
     
    ],
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Redux,",
        color: "blue-text-gradient",
      },
      
    ],
    
  },
  
  
  {
    title: "MEESHO WEBSITE CLONE",
    project_sub_title: "Responsive E-Commerce Clone",
    date: "Feb 2023 - March 2023",
    iconBg: "#f5f5f5",
    github_link:"https://github.com/Niteshmeena9672/Meesho-clone.git",
    icon: meesho_logo, // You can replace 'meesho_logo' with the actual logo or icon for your project.
    points: [
      "Developed a responsive clone of the Meesho website.",
      "Implemented a comprehensive navigation system, allowing users to easily explore various product categories.",
      "Designed and integrated a responsive header with essential elements such as a logo, search functionality, download app buttons, and user profile and cart icons.",
    
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient"
      },
      {
        name: "CSS",
        color: "green-text-gradient"
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient"
      },
    
      {
        name: "Git",
        color: "orange-text-gradient"
      }
    ]
  },
  {
    title: "AUTOMATIC AMBULANCE SIGNALLING SYSTEM",
    project_sub_title: "Preventing Delay in Medical Assistance",
    date: "May 2020 - April 2021",
    iconBg: "#383E56",
    icon: ambulance,
    github_link:"https://github.com/Niteshmeena9672/AUTOMATIC-AMBULANCE-SIGNALLING-SYSTEM.git",
    points: [
      "Addressed the issue of delayed medical assistance by developing a prototype signaling system.",
      "The system is designed to send an SOS signal to a predefined emergency number in the event of a car crash.",
      "The project aimed to reduce the daily mortality rate of approximately 24,012 people due to delays in receiving medical help."
    ],
    tags: [
      {
        name: "Vs-Code",
        color: "blue-text-gradient"
      },
      {
        name: "C++",
        color: "green-text-gradient"
      },
      {
        name: "Arduino",
        color: "pink-text-gradient"
      },
      {
        name: "GPS Module",
        color: "blue-text-gradient"
      },
      
    ]
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
