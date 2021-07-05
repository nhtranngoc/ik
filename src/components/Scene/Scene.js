import React, { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Debug, Physics } from '@react-three/cannon';
import { PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva';

import Plane from 'components/Plane';
import ConstraintPart from 'components/ConstraintPart';

const Legs = React.forwardRef(
  ({ bodyDepth = 0, isWalking = false, ...props }, bodyRef) => {
    const coxaRef = useRef();
    // const femurRef = useRef();
    // const tibiaRef = useRef();
    const partDepth = 0.3; // Leg thickness
    const bodyWidth = 1; // Robot body length
    const bodyHeight = 10;
    // const legLength = 6;

    const { enableMotor } = useControls({
      enableMotor: false,
    });

    return (
      <group {...props}>
        {/* Body */}
        <ConstraintPart
          ref={bodyRef}
          mass={1}
          args={[
            bodyHeight,
            bodyWidth,
            bodyDepth ? bodyDepth + partDepth * 3 : 0,
          ]}
          position={[0, 0, bodyDepth]}
          transparent={!bodyDepth}
          opacity={Number(!!bodyDepth)}
          enableControls
        >
          {/* Coxa */}
          <ConstraintPart
            ref={coxaRef}
            args={[1, 1, 1]}
            position={[bodyWidth / 2, -1.5 / 2, bodyDepth]}
            parentPivot={[0, 0.5, 0.5]}
            rotation={[0, 0, Math.PI / 2]}
            pivot={[0, 0.5, -0.5]}
            color="#85b3ff"
            enableMotor={enableMotor}
          >
            {/* Femur */}
          </ConstraintPart>
        </ConstraintPart>
      </group>
    );
  },
);

function Scene() {
  const cameraRef = useRef();
  const legRef = useRef();
  //   const robotRef = useRef();

  useFrame(() => {
    cameraRef.current.lookAt(legRef.current.position);
    // cameraRef.current.lookAt(robotRef.current.position);
  });

  return (
    <Suspense fallback={null}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[-40, 10, 20]} />

      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[20, 30, 10]}
        angle={Math.PI / 5}
        penumbra={1}
        intensity={1}
        distance={180}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <color attach="background" args={['#f6d186']} />

      <Physics iterations={80} gravity={[0, -40, 0]}>
        <Debug color="black" scale={1.1}>
          {/* <Robot ref={robotRef} /> */}
          <Legs ref={legRef} bodyDepth={10} />

          <Plane
            args={[120, 120]}
            position={[-20, -5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </Debug>
      </Physics>
    </Suspense>
  );
}

export default Scene;
