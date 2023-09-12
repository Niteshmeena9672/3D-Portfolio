// Import React library to define and use React components
import React from "react";
import { AiFillEye } from 'react-icons/ai';

// Import the Tilt component from "react-tilt" for adding a parallax tilt effect
import { Tilt } from "react-tilt";

// Import the motion library from "framer-motion" for animations
import { motion } from "framer-motion";

// Import styles and assets
import { styles } from "../styles";
import github from "./assests/github.png";

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
  tags,
  image,
  source_code_link,
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
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Project details */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] justify-center flex item-center">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}

            <div className="py-2 card-img_hover mr-0 pr-0 end-0 flex justify-between items-center">
              {/* Preview Icon and Label */}
              <div className="flex flex-col items-center">
                <div
                  onClick={() => window.open(preview_link, "_blank")}
                  className="black-gradient w-auto h-auto rounded-full flex justify-center items-center cursor-pointer"
                >
                  <AiFillEye className="w-10 h-10" />

                </div>
                <h3 className="flex justify-center py-0 mt-2 text-l font-bold">
                  Preview
                </h3>
              </div>

              {/* GitHub Icon and Label */}
              <div className="flex flex-col items-center">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-auto h-auto rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img src={github} alt="source code" className="w-10 h-10" />
                </div>
                <h3 className="flex justify-center py-0 mt-2 text-l font-bold">
                  GitHub
                </h3>
              </div>
            </div>
          </p>
        </div>

        {/* Tags for project */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
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
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Introduction paragraph */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Display project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {/* Map through the list of projects and create a ProjectCard component for each project */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Export the Works component wrapped with the SectionWrapper higher-order component with an empty string as the second parameter
export default SectionWrapper(Works, "");
