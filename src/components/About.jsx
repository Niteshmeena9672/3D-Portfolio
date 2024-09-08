// Importing required modules from React, react-tilt, and framer-motion libraries
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

// Importing styles and constants from other files
import { styles } from "../styles";
import { services } from "../constants";

// Importing the higher-order component (HOC) SectionWrapper
import { SectionWrapper } from "../hoc";

// Importing custom motion utilities: fadeIn and textVariant
import { fadeIn, textVariant } from "../utils/motion";

// ServiceCard component that represents a card for each service item
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Mern Developer'
          className='w-21 h-21 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// About component that represents the introduction and service cards section
const About = () => {
  return (
    <>
      {/* Framer Motion animation for the introduction section */}
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={`${styles.sectionHeadText} align-middle text-center`}>Introduction.</h2>
      </motion.div>

      {/* Framer Motion animation for the introduction text */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        {/* Content for the introduction paragraph */}
        <div className="w-full flex justify-center items-center">
  <p>
    Hi, I'm <strong>Nitesh Meena</strong>, a recent graduate from the <strong>Indian Institute of Technology, Jodhpur</strong>. I have a strong background in <strong>software engineering, full stack development, and machine learning</strong>. I’m skilled in programming languages like <strong>C/C++, Python, and SQL</strong>, and web development tools like <strong>HTML, CSS, JavaScript, MongoDB, Express.js, React.js, Node.js, and Next.js</strong>. I also know machine learning tools like <strong>NumPy, Pandas, TensorFlow, and Scikit-learn</strong>. I have solved more than <strong>500 Data Structure and Algorithm problems</strong> on various platforms.
  </p>
</div>
<br />
<div className="w-full flex justify-center items-center">
  <p>
  Currently, I am working as a <strong>Full Stack Developer at Mindginie</strong>. I have also completed two internships: as an <strong>SDE intern</strong> at ITJOBXS and as a <strong>Full Stack Developer</strong> at Exposys Data Labs.

  </p>
</div>
<br />

<div className="w-full flex justify-center items-center">
  <p>
    I’m ranked in the <strong>top 30 on GFG at IIT Jodhpur</strong> and have certifications in <strong>Full Stack Web Development</strong> and <strong>Data Structures & Algorithms</strong>. 
    
    I’m passionate about <strong>software engineering and full stack development</strong> and am looking for a challenging role where I can help create innovative tech solutions.
  </p>
</div>





      </motion.p>

      {/* Section displaying the service cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Mapping through the services array and rendering ServiceCard for each service */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Exporting the About component wrapped with the SectionWrapper HOC, with a section ID of "about"
export default SectionWrapper(About, "about");
