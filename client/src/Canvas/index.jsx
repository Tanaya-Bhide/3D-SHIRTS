import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import CamRig from './CamRig';
import Shirt from './Shirt';
import Backdrop from './Backdrop';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, errorInfo) => {
    console.error(error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <div>Something went wrong.</div>;
  }

  return children;
};

const CanvasModel = () => {
  return (
    <ErrorBoundary>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
         
        <CamRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CamRig>
      </Canvas>
    </ErrorBoundary>
  );
};

export default CanvasModel;
