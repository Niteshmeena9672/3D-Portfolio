// Import React library to define and use React components
import React from "react";
import { AiFillEye } from 'react-icons/ai';

// Import the Tilt component from "react-tilt" for adding a parallax tilt effect
import { Tilt } from "react-tilt";

// Import the motion library from "framer-motion" for animations
import { motion } from "framer-motion";

// Import styles and assets
import { styles } from "../styles";

// Import the SectionWrapper higher-order component from "../hoc" file
import { SectionWrapper } from "../hoc";

// Import the list of projects from "../constants" file
import { projects } from "../constants";

// Import custom motion variants for animations from "../utils/motion"
import { fadeIn, textVariant } from "../utils/motion";

// Define a component called ProjectCard to represent each project in a card format
const ProjectCard = ({
  index,
  name,
  description,
  // tags,
  // image,
  // source_code_link,
}) => {
  // Return JSX for a project card with tilt effect and animation
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Project image */}
        {/* <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div> */}

        {/* Project details */}
        <div className="mt-5">
          <h3 className="text-center text-white font-bold text-[26px] justify-center flex item-center">{name}</h3>
          <p className="mt-2 text-secondary text-[15px] text-justify">

            {description}

            
          </p>
        </div>

        {/* Tags for project */}
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};

// Define the Works component to display a section with project cards
const Works = () => {
  return (
    <>
      {/* Animation for section heading */}
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <h2 className={`${styles.sectionHeadText} align-middle text-center`}>My Coursework.</h2>
      </motion.div>

      {/* Introduction paragraph */}
      <div className="text-center w-full flex justify-center items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          Following, presents my academic experiences and coursework, illustrating how I use my skills in real-world scenarios. Each course is summarized, showcasing my ability to address complex challenges and adapt to diverse technologies.
        </motion.p>
      </div>

      {/* Display project cards */}
      <div className="  mt-20 flex flex-wrap gap-7">
        {/* Map through the list of projects and create a ProjectCard component for each project */}
        {projects.map((project, index) => {
  // console.log(`Mapping project ${index}:`, project);
  return <ProjectCard key={`project-${index}`} index={index} {...project} />;
})}

      </div>
    </>
  );
};

// Export the Works component wrapped with the SectionWrapper higher-order component with an empty string as the second parameter
export default SectionWrapper(Works, "works");
