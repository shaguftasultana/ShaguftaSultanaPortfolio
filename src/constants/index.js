import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Experience",
  },
  {
    id: "#Projects",
    title: "Projects",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Mern Stack ",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "PSEB INTERNSHIP (SOFTWARE DEVELOPER)",
    company_name: "PIXAKO TECHNOLOGIES (PVT.)LTD, ISLAMABAD, PAKISTAN",

    date: "FEB, 2023 - PRESENT",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Learning and experiencing Full Stack development using technologies MERN STACK, React.js, Next.js.",
    ],
  },
  {
    title: "React INTERNSHIP (SOFTWARE DEVELOPER)",
    company_name:
      "AL-BURAQ INSTITUTE , ISLAMABAD, ORGANIZE BY BITSOL TECHNOLOGIES, ISLAMABAD, PAKISTAN.",

    date: "OCT ,2022 - FEB, 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Learned and experienced in Full Stack development using technology MERN STACK.",
    ],
  },
];

const projects = [
  {
    name: "3D-PORTFOLIO",
    description:
      "The 3D-Portfolio project is a web application that allows users to showcase their 3D designs and models in an interactive and engaging way. Users can view models from different angles, zoomin and out, also supports 360-degree views.",
    tags: [
      {
        name: "VS CODE",
        color: "blue-text-gradient",
      },
      {
        name: "REACT JS",
        color: "pink-text-gradient",
      },
      {
        name: "THREE JS",
        color: "green-text-gradient",
      },
      {
        name: "3D GRAPHICS LIBRARY",
        color: "blue-text-gradient",
      },
      {
        name: "REACT THREE FIBRE",
        color: "pink-text-gradient",
      },
      {
        name: "TAILWIND CSS",
        color: "green-text-gradient",
      },
      {
        name: " FRAMER MOTION",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shaguftasultana/3d_portfolio",
  },
  {
    name: "CRUD OPERATIONS",
    description:
      "The project primarily focuses on providing a seamless user experience for managing products,allowing users to perform basic Create, Read, Update, and Delete operations. One of the standout features of this project is the integration of a Modal of Input Form and Map, which allows users to input location details with ease. The project also includes an interactive mapwith search functionality.After all , i converted the project into typescript",

    tags: [
      {
        name: "VS CODE",
        color: "blue-text-gradient",
      },
      {
        name: "REACT JS",
        color: "green-text-gradient",
      },
      {
        name: "NEXT JS",
        color: "pink-text-gradient",
      },
      {
        name: "HOOKS",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "REACT HOOK FORM",
        color: "pink-text-gradient",
      },
      {
        name: "UP VALIDATION",
        color: "blue-text-gradient",
      },
      {
        name: "MONGODB",
        color: "green-text-gradient",
      },
      {
        name: "RESTAPI",
        color: "pink-text-gradient",
      },
      {
        name: "MAPBOX",
        color: "blue-text-gradient",
      },
      {
        name: "GL JS MAP",
        color: "green-text-gradient",
      },
      {
        name: "NEXT CONNECT",
        color: "pink-text-gradient",
      },
      {
        name: "MULTER",
        color: "blue-text-gradient",
      },
      {
        name: "REACT ROUTER DOM",
        color: "green-text-gradient",
      },
      {
        name: "TYPESCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shaguftasultana/CRUD-OPERATIONS",
  },
  {
    name: "ONLINE DAIRY SYSTEM, (FYP)",
    description:
      "The Online Dairy System is a web-based platform developed using the Laravel framework. The system allows farmers to create and manage their dairy profiles, record milk production, and manage milk delivery to customers. With the Online Dairy System, farmers can easily track their milk production and delivery schedules, as well as view their earnings and generate reports.",
    tags: [
      {
        name: "VS CODE",
        color: "blue-text-gradient",
      },
      {
        name: "LARAVEL",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
  },
];

export { services, technologies, experiences, projects };
