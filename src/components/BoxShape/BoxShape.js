import React from 'react';

const BoxShape = React.forwardRef(
  (
    {
      children,
      transparent = false,
      opacity = 1,
      color = 'white',
      args = [1, 1, 1],
      ...props
    },
    ref,
  ) => {
    return (
      <mesh receiveShadow castShadow ref={ref} {...props}>
        <boxBufferGeometry args={args} />
        <meshStandardMaterial
          color={color}
          transparent={transparent}
          opacity={opacity}
        />

        {children}
      </mesh>
    );
  },
);

export default BoxShape;
