// Importing required modules from React and external libraries
import React from "react";
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
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        {/* Experience title */}
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {/* Experience company name */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* List of points describing the experience */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
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
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Vertical timeline displaying work experiences */}
      <div className='mt-20 flex flex-col'>
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
