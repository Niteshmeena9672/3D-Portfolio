// // Importing required modules from react-three/fiber and react-three/drei libraries
// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// // Importing a custom component CanvasLoader from "../Loader"
// import CanvasLoader from "../Loader";

// // Computers component that represents a 3D model of a desktop computer
// const Computers = ({ isMobile }) => {
//   // Loading the 3D model of the computer using the useGLTF hook
//   const computer = useGLTF("./public/desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       {/* Adding lights to the scene */}
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       {/* Rendering the 3D model of the computer */}
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -4.25, -2.2] : [0, -4.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// // ComputersCanvas component that represents a canvas with the Computers component and OrbitControls
// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size using a media query
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable based on the media query
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         {/* Enabling OrbitControls for the 3D scene */}
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         {/* Rendering the Computers component with the isMobile prop */}
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       {/* Preloading all assets for better performance */}
//       <Preload all />
//     </Canvas>
//   );
// };

// // Exporting the ComputersCanvas component as the default export
// export default ComputersCanvas;
