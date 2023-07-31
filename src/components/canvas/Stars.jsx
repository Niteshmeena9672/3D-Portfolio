// Importing required modules from React and react-three/fiber
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Importing required modules from react-three/drei
import { Points, PointMaterial, Preload } from "@react-three/drei";

// Importing the 'random' library for generating random points within a sphere
import * as random from "maath/random/dist/maath-random.esm";

// Stars component that represents a 3D scene with points (stars) in space
const Stars = (props) => {
  // Creating a reference for the Points object to apply rotation
  const ref = useRef();

  // Generating random 3D points (stars) within a sphere using 'random.inSphere'
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Using the 'useFrame' hook to update the rotation of the scene on each frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Rendering the points (stars) in the 3D scene */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* Applying PointMaterial to style the points */}
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// StarsCanvas component that represents a canvas with the Stars component
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/* Rendering the 3D scene within a Canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          {/* Rendering the Stars component to display the stars in space */}
          <Stars />
        </Suspense>

        {/* Preloading all assets for better performance */}
        <Preload all />
      </Canvas>
    </div>
  );
};

// Exporting the StarsCanvas component as the default export
export default StarsCanvas;
