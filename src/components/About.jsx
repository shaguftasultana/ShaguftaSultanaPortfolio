import React from 'react'
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
        As an intern software developer in a software company, I am currently
        learning and gaining hands-on experience in the MERN stack (MongoDB,
        Express.js, React, and Node.js) and Next.js. My primary goal is to
        contribute to the company's projects while expanding my knowledge and
        skills in software development. Additionally, I have been working to
        improve my coding skills by practicing regularly and taking online
        courses to deepen my understanding of the MERN stack. I am also
        committed to learning software development best practices and
        incorporating them into my work. Overall, I am excited to continue
        learning and contributing to the software company as software developer,
        while also expanding my skills and knowledge to become a valuable asset
        to any future employer.
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