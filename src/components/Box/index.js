import React from 'react'
import PropTypes from 'prop-types'
import { useBox } from '@react-three/cannon'

function Box ({ position, ...props }) {
  const [ref, api] = useBox(() => ({ mass: 1, position }))
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0)
      }}
      ref={ref}
      position={position}
    >
      <boxBufferGeometry
        attach="geometry"
        {...props}
      />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

Box.propTypes = {
  position: PropTypes.arrayOf(Number).isRequired
}

export default React.memo(Box)
