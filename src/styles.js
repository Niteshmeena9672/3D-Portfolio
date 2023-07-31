// Define an object containing various styles used throughout the application
const styles = {
  // Padding values for different screen sizes
  paddingX: "sm:px-16 px-6",      // Horizontal padding on small screens is 16px, on other screens, it's 6px.
  paddingY: "sm:py-16 py-6",      // Vertical padding on small screens is 16px, on other screens, it's 6px.
  padding: "sm:px-16 px-6 sm:py-16 py-10", // Combined horizontal and vertical padding on different screens.

  // Styles for the hero section's heading text
  heroHeadText: "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  // Styles for the hero section's subheading text
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  // Styles for the section heading text used in other parts of the application
  sectionHeadText: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  // Styles for the section subheading text used in other parts of the application
  sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

// Export the styles object to be used in other parts of the application
export { styles };
