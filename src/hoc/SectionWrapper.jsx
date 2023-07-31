// Import the necessary components from the framer-motion library
import { motion } from "framer-motion";

// Import the "styles" object from the "../styles" file
import { styles } from "../styles";

// Import the "staggerContainer" function from the "../utils/motion" file
import { staggerContainer } from "../utils/motion";

// Define a Higher Order Component (HOC) function "StarWrapper" that takes "Component" and "idName" as arguments
const StarWrapper = (Component, idName) =>
  // Return an anonymous functional component (the actual HOC)
  function HOC() {
    return (
      // Use the motion.section element to wrap the passed "Component"
      <motion.section
        // Apply "staggerContainer" animation variants to the section
        variants={staggerContainer()}
        // Set initial state to "hidden" for staggered animation
        initial='hidden'
        // Apply animation variant "show" when the section is in view
        whileInView='show'
        // Define the viewport options for triggering the animation
        viewport={{ once: true, amount: 0.25 }}
        // Apply styles from the "styles.padding" object and other classes
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Create a span with class "hash-span" to serve as an anchor point with the given "idName" */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* Render the passed "Component" */}
        <Component />
      </motion.section>
    );
  };

// Export the "StarWrapper" Higher Order Component (HOC)
export default StarWrapper;
