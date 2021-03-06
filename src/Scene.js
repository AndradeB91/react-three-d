import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Stars, OrbitControls, softShadows } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import Ground from './components/Ground'
import Box from './components/Box'
import Sphere from './components/Sphere'

const RADIUS = 100

softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 1
})

function App () {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-20, 7, 15], fov: 45 }}
    >
      <fog attach="fog" args={['white', 10, 200]} />
      <OrbitControls />
      <Stars
        radius={RADIUS}
        depth={50}
        saturation={0.5}
        factor={6}
        fade
      />
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[10, 15, 10]}
        intensity={0.5}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={50}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
      <Physics>
        <Ground length={2 * RADIUS} />
        <Box
          args={[3, 3, 3]}
          mass={2}
          position={[0, 10, 0]}
        />
        <Sphere
          args={2}
          mass={40}
          position={[0, 20, 0]}
        />
      </Physics>
    </Canvas>
  )
}

export default App
