import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <div
      className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5  h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1
          className={`${styles.heroHeadText}
        text-white`}
          style={{ fontSize: "2rem", margin: 0, padding: 0 }}
        >
          Hi, I'm <span className="text-[#915eff]">Shagufta</span>
        </h1>
        <p
          className={`${styles.heroSubText}  text-white-100 `}
          style={{ fontSize: "1rem", margin: 8, padding: 0 }}
        >
          I am Software Developer and work on different languages .I have
          developed this 3D web application.
        </p>
      </div>
    </div>
  );
};

export default Hero;
