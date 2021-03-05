import React from 'react'
import { useThree, useFrame } from 'react-three-fiber'

function Camera (props) {
  const ref = React.useRef()
  const { setDefaultCamera } = useThree()
  React.useEffect(() => setDefaultCamera(ref.current), [])
  useFrame(() => ref.current.updateMatrixWorld())
  return <perspectiveCamera ref={ref} {...props} />
}

export default React.memo(Camera)
