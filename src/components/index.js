// Importing canvas components for animations
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';

// Importing all the components used in the layout of the webpage
import Hero from "./Hero"; // The hero section of the webpage
import Navbar from "./Navbar"; // The navigation bar component
import About from "./About"; // The about section of the webpage
import Tech from "./Tech"; // The technology section of the webpage
import Experience from "./Experience"; // The work experience section of the webpage
import Works from "./Works"; // The works/projects section of the webpage

import Contact from "./Contact"; // The contact section of the webpage
import CanvasLoader from "./Loader"; // The loader component for canvas animations

// Exporting all the components to be used in the layout of the webpage
export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,

  Contact,
  CanvasLoader,
  EarthCanvas, // Canvas component for Earth animation
  BallCanvas, // Canvas component for Ball animation
  ComputersCanvas, // Canvas component for Computers animation
  StarsCanvas // Canvas component for Stars animation
};
