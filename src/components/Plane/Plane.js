import { usePlane } from '@react-three/cannon'

const GROUP_GROUND = 2 ** 0

function Plane({ args, ...props }) {
    const [ref] = usePlane(() => ({ type: 'Static', collisionFilterGroup: GROUP_GROUND, ...props }))
    return (
      <group ref={ref}>
        <mesh>
          <planeBufferGeometry args={args} />
          <meshBasicMaterial color="#ffb385" />
        </mesh>
        <mesh receiveShadow>
          <planeBufferGeometry args={args} />
          <shadowMaterial color="lightsalmon" />
        </mesh>
      </group>
    )
  }

  export default Plane;