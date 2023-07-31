// Importing required modules from react-three/fiber and react-three/drei libraries
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// Importing a custom component CanvasLoader from "../Loader"
import CanvasLoader from "../Loader";

// Ball component that represents a floating ball with a decal texture
const Ball = (props) => {
  // Loading the texture to be used as a decal
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Applying the decal to the ball */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component that represents a canvas with the Ball component and OrbitControls
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Showing a loading fallback using CanvasLoader while loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Enabling OrbitControls for the 3D scene */}
        <OrbitControls enableZoom={false} />
        {/* Rendering the Ball component with the provided icon texture */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preloading all assets for better performance */}
      <Preload all />
    </Canvas>
  );
};

// Exporting the BallCanvas component as the default export
export default BallCanvas;
