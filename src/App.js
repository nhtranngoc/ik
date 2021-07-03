import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Scene from 'components/Scene';

export default function App() {
  return (
    <>
      <Canvas shadows gl={{ alpha: false }}>
        <OrbitControls />
        <Scene />
      </Canvas>

      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 50,
          color: 'white',
          fontSize: '1.2em',
        }}
      >
        <pre>* click to reduce speed</pre>
      </div>
    </>
  );
}
