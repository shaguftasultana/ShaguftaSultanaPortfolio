import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants/index.js";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px]  rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white  text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a highly skilled MERN stack developer with one year of experience,
        specializing in React and Next.js. My proficiency extends to HTML5,
        CSS3, ES6 JavaScript, and a wide range of cutting-edge technologies and
        libraries, including Material-UI (MUI), Axios, Redux, Redux Toolkit,
        i18next, MongoDB, Mapbox GL, TypeScript, GraphQL, Apollo Client, and
        more. I've successfully tackled projects involving REST APIs, state
        management, and responsive design using Tailwind CSS and React Three
        Fiber for 3D graphics. My deployment experience includes Netlify and
        Vercel, and I've worked with WordPress for content management.
        Proficient in collaboration and project management tools like Jira,
        Slack, and Trello, I excel at turning design concepts into functional
        applications using Figma and delivering high-quality solutions. I'm
        passionate about continuous learning and am eager to explore and master
        new technologies to further enhance my skill set and contribute to
        innovative projects in the world of web development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
