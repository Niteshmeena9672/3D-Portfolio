// Importing required modules from react-three/fiber and react-three/drei libraries
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Importing a custom component CanvasLoader from "../Loader"
import CanvasLoader from "../Loader";

// Earth component that represents a 3D model of the Earth (planet)
const Earth = () => {
  // Loading the 3D model of the Earth using the useGLTF hook
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // Rendering the 3D model of the Earth (planet)
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// EarthCanvas component that represents a canvas with the Earth component and OrbitControls
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Adding a loading fallback using CanvasLoader while loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Enabling OrbitControls for the 3D scene with auto-rotation */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Rendering the Earth component to display the 3D model of the Earth */}
        <Earth />

        {/* Preloading all assets for better performance */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Exporting the EarthCanvas component as the default export
export default EarthCanvas;
