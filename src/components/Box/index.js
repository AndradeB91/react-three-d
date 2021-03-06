import React from 'react'
import PropTypes from 'prop-types'
import { useBox } from '@react-three/cannon'

function Box ({ position, mass, args, ...props }) {
  const [ref, api] = useBox(() => ({ mass, args, position }))
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
      <boxBufferGeometry
        attach="geometry"
        args={args}
        {...props}
      />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

Box.propTypes = {
  position: PropTypes.arrayOf(Number).isRequired,
  args: PropTypes.arrayOf(Number).isRequired,
  mass: PropTypes.number
}

export default React.memo(Box)
