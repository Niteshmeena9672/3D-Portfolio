// Import necessary modules and components
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// Define the main App component
const App = () => {
  return (
    // Wrap the entire application with BrowserRouter for handling routing
    <BrowserRouter>
      {/* The main container with a background */}
      <div className='relative z-0 bg-primary'>
        {/* Background image for the hero section */}
        <div
          className='hero-bg-pattern bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: "url('./src/bg.png')" // Set the background image
          }}
        >
          {/* The navigation bar */}
          <Navbar />
          
          {/* The hero section */}
          <Hero />
        </div>
        
        {/* About section */}
        <About />
        
        {/* Experience section */}
        <Experience />
        
        {/* Works section */}
        <Works />
        
        {/* Tech section */}
        <Tech />
        
        {/* Feedbacks section (commented out) */}
        {/* <Feedbacks /> */}
        
        {/* Contact section */}
        <div className='relative z-0'>
          <Contact />
          
          {/* A component for displaying stars on canvas */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
