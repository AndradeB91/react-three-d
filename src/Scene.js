import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import Sphere from './components/Sphere'

function App () {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [-120, 200, 50], fov: 45 }}
    >
      <OrbitControls />
      <Stars
        radius={280}
        depth={1}
        saturation={1}
        factor={20}
        fade
      />
      <ambientLight intensity={0.05} />
      <directionalLight
        position={[60, 70, 60]}
        intensity={1}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={500}
        shadow-camera-left={-500}
        shadow-camera-right={500}
        shadow-camera-top={500}
        shadow-camera-bottom={-500}
      />
      <Physics gravity={[0, 0, 0]} >
        <Sphere
          args={[40, 200, 200]}
          mass={0}
          position={[0, 0, 0]}
        />
        <Sphere
          args={[4, 60, 60]}
          mass={120}
          position={[0, 100, 0]}
          color="#ff5555"
        />
      </Physics>
    </Canvas>
  )
}

export default App
