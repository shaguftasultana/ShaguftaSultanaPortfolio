import {
  mobile,
  backend,
  creator,
  web,
  portfolio,
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
  refugee,
  sfp,
  ap,
  rwc,
  rd,
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
    title: "SOFTWARE ENGIINEER",
    icon: web,
  },
  {
    title: "MERN STACK DEVELOPER",
    icon: mobile,
  },
  {
    title: "REACTJS DEVELOPER",
    icon: backend,
  },
  {
    title: "NEXTJS DEVELOPER",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
  },
  {
    name: "CSS 3",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React JS",
  },
  {
    name: "Redux Toolkit",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Node JS",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Three JS",
  },
];

const experiences = [
  {
    title: "REMOTE FULL-TIME JOB (MERN STACK DEVELOPER)",
    company_name: "REFUGEE CODERS",

    date: "JUNE, 2023 - JULY, 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Learned and experienced full time job in remote settings in Full Stack development using technology MERN STACK.",
    ],
  },
  {
    title: "PSEB INTERNSHIP (MERN STACK DEVELOPER)",
    company_name: "PIXAKO TECHNOLOGIES (PVT.)LTD, ISLAMABAD, PAKISTAN",

    date: "FEB, 2023 - MAY, 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Learned and experienced Full Stack development using technologies MERN STACK, React.js, Next.js.",
    ],
  },
  {
    title: "BOOTCAMP AND INTERNSHIP(MERN STACK DEVELOPER)",
    company_name:
      "AL-BURAQ INSTITUTE , ISLAMABAD, ORGANIZE BY BITSOL TECHNOLOGIES, ISLAMABAD, PAKISTAN.",

    date: "OCT ,2022 - FEB, 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Learned and experienced in Full Stack development using technology MERN STACK.",
    ],
  },
];

const projects = [
  {
    name: "REFUGEE CODERS",
    description:
      "The Refugee Coders website is a React.js-based web application that serves as a platform for empowering refugees and displaced individuals by providing them with access to coding education and opportunities in the tech industry. Built using the Tailwind CSS and Tailus UI framework.",
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
        name: "TAILWIND CSS",
        color: "green-text-gradient",
      },
    ],
    image: refugee,
    source_code_link: "https://www.refucode.com/",
  },
  {
    name: "3D-PORTFOLIO",
    description:
      " The 3D-Portfolio project is a web application that allows users to showcase their 3D designs and models in an interactive and engaging way. Users can view models from different angles, zoom in and out, also supports 360-degree views.",
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
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },

      {
        name: "VERCEL",
        color: "green-text-gradient",
      },

      {
        name: "EMAIL JS",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://shagufta-sultana-portfolio.vercel.app/",
  },
  {
    name: "CRUD OPERATIONS",
    description:
      "The project primarily focuses on providing a seamless user experience for managing products,allowing users to perform basic Create, Read, Update, and Delete operations. One of the standout features of this project is the integration of a Modal of Input Form and Map. The project also includes an interactive map with search functionality.",

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
        name: "YUP VALIDATION",
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
        name: "MULTER",
        color: "pink-text-gradient",
      },
      {
        name: "REACT ROUTER DOM",
        color: "green-text-gradient",
      },
      {
        name: "TYPESCRIPT",
        color: "blue-text-gradient",
      },
      {
        name: "GRAPHQL",
        color: "pink-text-gradient",
      },

      {
        name: "NODE JS",
        color: "green-text-gradient",
      },
      {
        name: "APOLLO-SERVER",
        color: "blue-text-gradient",
      },
      {
        name: "NEXT-CONNECT",
        color: "pink-text-gradient",
      },
      {
        name: "AXIOS",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shaguftasultana/CRUD-OPERATIONS",
  },
  {
    name: "SCHOOL FACILITY",
    description:
      "I've created an awesome project during my job of client based projects  on GitHub using Next.js, HTML, and Tailwind CSS. It's a static frontend project, which means it's super fast and responsive",
    tags: [
      {
        name: "VS CODE",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "REACT JS",
        color: "pink-text-gradient",
      },

      {
        name: "NEXT JS",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWIND CSS",
        color: "green-text-gradient",
      },
    ],
    image: sfp,
    source_code_link: "https://sfp-murex.vercel.app/",
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
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://redux-i18next.vercel.app/",
  },
  {
    name: "BUILDING BLOCKS HISTORY",
    description:
      "For the MERN Stack position assessment, The application features a (SVG) map, Upon clicking an information box, a form is displayed, allowing the user to update the data . After submitting the form, the data is updated, and the changes are reflected when hovering over the corresponding room or building. To deploy the application, I used Vercel.",
    tags: [
      {
        name: "VS CODE",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "REACT JS",
        color: "pink-text-gradient",
      },

      {
        name: "NEXT JS",
        color: "blue-text-gradient",
      },
      {
        name: "FOR-EACH",
        color: "green-text-gradient",
      },
      {
        name: "JSX",
        color: "pink-text-gradient",
      },
      {
        name: "FORM",
        color: "green-text-gradient",
      },
      {
        name: "TAILWIND CSS",
        color: "pink-text-gradient",
      },

      {
        name: "USESTATE",
        color: "blue-text-gradient",
      },
      {
        name: "USEREDUCER",
        color: "green-text-gradient",
      },
      {
        name: "ONHOVER",
        color: "blue-text-gradient",
      },
      {
        name: "VERCEL",
        color: "pink-text-gradient",
      },
    ],
    image: ap,
    source_code_link: "https://assessment-plancv.vercel.app/",
  },
  {
    name: "RETAINING WALL CALCULATOR",
    description:
      "Retaining-Wall-Calculator is an exciting client-based small project hosted on GitHub that aims to simplify the process of designing and calculating retaining walls. ",
    tags: [
      {
        name: "VS CODE",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "REACT JS",
        color: "pink-text-gradient",
      },

      {
        name: "NEXT JS",
        color: "blue-text-gradient",
      },
      {
        name: "THREE JS",
        color: "green-text-gradient",
      },
      {
        name: "JSX",
        color: "pink-text-gradient",
      },

      {
        name: "TAILWIND CSS",
        color: "blue-text-gradient",
      },

      {
        name: "VERCEL",
        color: "green-text-gradient",
      },
    ],
    image: rwc,
    source_code_link: "https://retaining-wall-calculator.vercel.app/",
  },
  {
    name: "REDUX-I18NEXT",
    description:
      "In my pursuit of knowledge, I embarked on a learning task that focused on building a multilingual web application. For this purpose, I harnessed the power of i18next for translation in both English and Arabic, and I employed Redux and Redux Toolkit (RTK) for efficient state management.",
    tags: [
      {
        name: "VS CODE",
        color: "pink-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "REACT JS",
        color: "blue-text-gradient",
      },

      {
        name: "NEXT JS",
        color: "pink-text-gradient",
      },
      {
        name: "REDUX",
        color: "green-text-gradient",
      },
      {
        name: "JSX",
        color: "blue-text-gradient",
      },

      {
        name: "TAILWIND CSS",
        color: "pink-text-gradient",
      },

      {
        name: "VERCEL",
        color: "green-text-gradient",
      },
      {
        name: "REDUX TOOLKIT",
        color: "blue-text-gradient",
      },
      {
        name: "TYPESCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "I18NEXT",
        color: "pink-text-gradient",
      },
    ],
    image: rd,
    source_code_link: "https://redux-i18next.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
