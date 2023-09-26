// Importing required modules from React and external libraries
import React from "react";
import github from "./assests/github.png";
import { AiFillEye } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

// Importing styles from a separate file and experiences data from constants
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";

// Importing the higher-order component (HOC) SectionWrapper
import { SectionWrapper } from "../hoc";

// Importing the custom motion utility for animations
import { textVariant } from "../utils/motion";

// ExperienceCard component that represents an individual work experience
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      // Styling for the content area of the timeline element
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      // Styling for the arrow in the timeline element
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // Date of the experience
      date={experience.date}
      // Styling for the icon in the timeline element
      iconStyle={{ background: experience.iconBg }}
      // Icon for the timeline element
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        {/* Experience title */}
        <h3 className="text-white text-[24px] font-bold text-center">
          {experience.title}
        </h3>
        <div
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {/* Experience company name */}
          {/* <h3 className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}>{experience.project_sub_title}</h3> */}
          {/* {experience.company_name} */}

          {/* Main container for preview and github icon */}
          
          {/* <div className="py-2 card-img_hover mr-10 ml-10 end-0 flex justify-between items-center">
         
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

     
            <div className="flex flex-col items-center">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-auto h-auto rounded-full flex justify-center items-center cursor-pointer"
              >
                <a href={experience.github_link} target="#">
                  <img src={github} alt="source code" className="w-10 h-10" />
                </a>
              </div>
              <h3 className="flex justify-center py-0 mt-2 text-l font-bold">
                GitHub
              </h3>
            </div>
          </div> */}
          {/* To Do when preview part completed remove this one and update above one */}
          <div className="flex flex-col items-center">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-auto h-auto rounded-full flex justify-center items-center cursor-pointer"
              >
                <a href={experience.github_link} target="#">
                  <img src={github} alt="source code" className="w-10 h-10" />
                </a>
              </div>
              <h3 className="flex justify-center py-0 mt-2 text-l font-bold">
                GitHub
              </h3>
            </div>
        </div>
      </div>

      {/* List of points describing the experience */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      {/* Tags for project */}
      {/* <h1 className="text-white text-[24px] font-bold text-center">Technologies</h1> */}
      <div className="mt-1 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

// Experience component that represents the work experience section
const Experience = () => {
  return (
    <>
      {/* Heading with motion animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      {/* Vertical timeline displaying work experiences */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {/* Mapping over experiences data and rendering ExperienceCard for each experience */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Exporting the Experience component wrapped with the SectionWrapper HOC, with a section ID of "work"
export default SectionWrapper(Experience, "experience");
