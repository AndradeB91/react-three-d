import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import Camera from './components/Camera'
import Ground from './components/Ground'
import Box from './components/Box'

const RADIUS = 100

function App () {
  return (
    <Canvas>
      <Camera position={[10, 5, 10]} />
      <OrbitControls />
      <Stars
        radius={RADIUS}
        depth={50}
        saturation={0.5}
        factor={6}
        fade
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Ground length={2 * RADIUS}/>
        <Box position={[0, 5, 0]}/>
      </Physics>
    </Canvas>
  )
}

export default App
