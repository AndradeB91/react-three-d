import React from 'react'
import PropTypes from 'prop-types'
import { useSphere } from '@react-three/cannon'

function Sphere ({ position, mass, args, ...props }) {
  const [ref, api] = useSphere(() => ({ mass, args, position }))
  return (
    <mesh
      castShadow
      receiveShadow
      onClick={() => {
        api.velocity.set(0, 8, 0)
      }}
      ref={ref}
      position={position}
    >
      <sphereBufferGeometry
        attach="geometry"
        args={args}
        {...props}
      />
      <meshLambertMaterial attach="material" color="#3f88a0" />
    </mesh>
  )
}

Sphere.propTypes = {
  position: PropTypes.arrayOf(Number).isRequired,
  args: PropTypes.number.isRequired,
  mass: PropTypes.number
}

export default React.memo(Sphere)
