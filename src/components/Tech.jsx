// Import React library to define and use React components
import React from "react";
import { motion } from "framer-motion";

// Import the custom BallCanvas component from "./canvas" file
import { BallCanvas } from "./canvas";

// Import the SectionWrapper higher-order component from "../hoc" file
import { SectionWrapper } from "../hoc";

// Import the list of technologies from "../constants" file
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// Define a functional component called Tech
const Tech = () => {
  // Return JSX to display a flex container with a row layout, wrapping items, and justifying content in the center with a gap of 10 units
  return (
    <>
   <motion.div variants={textVariant()}>
      
        <h2 className={`${styles.sectionHeadText} align-middle text-center mb-14`}>Skillset.</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* Map through the list of technologies and create a BallCanvas component for each technology */}
      {technologies.map((technology) => (
        // Each BallCanvas component is wrapped inside a div with a width and height of 28 units and a unique key based on the technology name
        <div className='w-28 h-28' key={technology.name}>
          {/* Pass the technology's icon as a prop to the BallCanvas component */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
      </>
  );
};

// Export the Tech component wrapped with the SectionWrapper higher-order component with an empty string as the second parameter
export default SectionWrapper(Tech, "");
