import React, { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { PerspectiveCamera } from '@react-three/drei';

import Plane from 'components/Plane';
import BoxShape from 'components/BoxShape';

function Scene() {
  const cameraRef = useRef();
  const boxRef = useRef();
  //   const robotRef = useRef();

  useFrame(() => {
    cameraRef.current.lookAt(boxRef.current.position);
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
        {/* <Robot ref={robotRef} /> */}
        <BoxShape ref={boxRef} />

        <Plane
          args={[120, 120]}
          position={[-20, -5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </Physics>
    </Suspense>
  );
}

export default Scene;
