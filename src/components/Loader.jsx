import { Html, useProgress } from "@react-three/drei";

// A custom component for displaying a loader while the canvas animations are loading.
const CanvasLoader = () => {
  // Get the loading progress using the useProgress hook provided by @react-three/drei.
  const { progress } = useProgress();

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* A visual representation of the loader */}
      <span className='canvas-loader'></span>
      {/* Display the loading progress as a percentage */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
