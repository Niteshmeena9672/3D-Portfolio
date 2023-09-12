// Importing the motion library from framer-motion for animations
import { motion } from "framer-motion";
import Type from "./Type";
// Importing styles from a separate file and the ComputersCanvas component
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// Hero component that represents the hero section of the webpage
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Container for the hero content */}
      <div
        className={`absolute inset-0 top-[250px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left side of the hero content */}
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Small circle */}
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          {/* Gradient line */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Right side of the hero content */}
        <div>
          {/* Main heading */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Nitesh Meena</span>
          </h1>
          {/* Subheading */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm final Year Student at IIT Jodhpur <br className='sm:block hidden' />
          <div className="font-bold text-4xl py-3">Skills :</div>
    <div className="pl-12 py-1">

       <span style={{ color: "#915EFF" }}><Type /></span>
    </div>
          </p>
        </div>
      </div>

      {/* Computer canvas for computer illustration */}
      {/* <ComputersCanvas /> */}

      {/* Animated circle at the bottom of the hero section */}
  
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* Circular element moving up and down  */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              // Circle moving up and down animation settings
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> 
      
      
    </section>
  );
};

// Exporting the Hero component to be used in the layout of the webpage
export default Hero;
