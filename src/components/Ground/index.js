import React from 'react'
import { usePlane } from '@react-three/cannon'
import PropTypes from 'prop-types'

function Ground ({ length }) {
  usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }))

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <circleBufferGeometry attach="geometry" args={[length, length]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

Ground.propTypes = {
  length: PropTypes.string.isRequired
}

export default React.memo(Ground)
