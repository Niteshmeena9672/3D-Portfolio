// A function to define text animations (y-axis movement and opacity) with delay for delayChildren
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,        // Move the text 50 units up (y-axis) to hide it
      opacity: 0,    // Set the opacity to 0 to hide the text
    },
    show: {
      y: 0,          // Reset the y-axis position to show the text
      opacity: 1,    // Set the opacity to 1 to make the text fully visible
      transition: {
        type: "spring",  // Use a spring animation for smooth movement
        duration: 1.25,  // The animation duration is 1.25 seconds
        delay: delay,    // Apply a delay for the animation to start
      },
    },
  };
};

// A function to define fade-in animations (x-axis, y-axis movement, and opacity)
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,  // Move the element horizontally based on the direction
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,    // Move the element vertically based on the direction
      opacity: 0,                                                      // Set the opacity to 0 to hide the element
    },
    show: {
      x: 0,             // Reset the horizontal position to show the element
      y: 0,             // Reset the vertical position to show the element
      opacity: 1,       // Set the opacity to 1 to make the element fully visible
      transition: {
        type: type,     // Use the specified transition type (e.g., spring, tween, etc.)
        delay: delay,   // Apply a delay for the animation to start
        duration: duration,  // The animation duration in seconds
        ease: "easeOut",     // Use an ease-out easing function for smoother animation
      },
    },
  };
};

// A function to define zoom-in animations (scale and opacity changes)
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,       // Set the scale to 0 to hide the element
      opacity: 0,     // Set the opacity to 0 to hide the element
    },
    show: {
      scale: 1,       // Set the scale to 1 to show the element at its original size
      opacity: 1,     // Set the opacity to 1 to make the element fully visible
      transition: {
        type: "tween", // Use a tween animation for smooth scaling
        delay: delay,  // Apply a delay for the animation to start
        duration: duration,  // The animation duration in seconds
        ease: "easeOut",     // Use an ease-out easing function for smoother animation
      },
    },
  };
};

// A function to define slide-in animations (x-axis and y-axis movement)
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,  // Move the element horizontally based on the direction
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,      // Move the element vertically based on the direction
    },
    show: {
      x: 0,           // Reset the horizontal position to show the element
      y: 0,           // Reset the vertical position to show the element
      transition: {
        type: type,   // Use the specified transition type (e.g., spring, tween, etc.)
        delay: delay, // Apply a delay for the animation to start
        duration: duration,  // The animation duration in seconds
        ease: "easeOut",     // Use an ease-out easing function for smoother animation
      },
    },
  };
};

// A function to define staggered container animations for its children
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,      // Stagger the animations of the container's children
        delayChildren: delayChildren || 0,    // Apply a delay for the children's animations to start
      },
    },
  };
};
