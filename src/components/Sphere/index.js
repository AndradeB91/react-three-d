import React from 'react'
import PropTypes from 'prop-types'
import { useSphere } from '@react-three/cannon'
import { Vector3 } from 'three'
import { useFrame } from 'react-three-fiber'

function Sphere ({ position, mass, args, color, ...props }) {
  const [radius] = args
  const [ref, api] = useSphere(() => ({ mass, args: radius, position }))

  useFrame(() => {
    const [force] = getReverseGravityForce()
    force.multiplyScalar(-30)
    api.applyForce(force.toArray(), [0, 0, 0])
  })

  const getReverseGravityForce = () => {
    const force = new Vector3()
    const gravityCenterVector = new Vector3(0, 0, 0)
    force.subVectors(ref.current.position, gravityCenterVector)
    const distance = ref.current.position.distanceTo(
      gravityCenterVector
    )
    return [force, distance]
  }

  const onSphereClick = () => {
    const tweak = (Math.random() * 50) - 25
    const positiveTweak = Math.random() * 25
    const [force] = getReverseGravityForce()
    const forceNumbers =
      force.normalize()
        .toArray()
        .map((axis, index) =>
          index !== 1 ? axis + tweak : axis + positiveTweak
        )
    api.velocity.set(...forceNumbers)
  }

  return (
    <mesh
      castShadow
      receiveShadow
      onClick={onSphereClick}
      ref={ref}
      position={position}
    >
      <sphereBufferGeometry
        attach="geometry"
        args={args}
        {...props}
      />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  )
}

Sphere.propTypes = {
  position: PropTypes.arrayOf(Number).isRequired,
  args: PropTypes.arrayOf(Number).isRequired,
  mass: PropTypes.number,
  color: PropTypes.string
}

export default Sphere
