import React, { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CubeModel from './CubeModel'
import Cube, { R } from './structure'
import './styles/model.css'

export default function Model() {
  const cube = useRef(new Cube())

  return (
    <>
      <h1 className='title'>3D Model</h1>
      <div className='wrapper'>
        <Canvas camera={{ fov: 75 }}>
          <OrbitControls
            minDistance={2 * R}
            maxDistance={10}
            enablePan={false} />
          <ambientLight />

          <CubeModel cubeRef={cube} />
        </Canvas>
      </div>
      <button onClick={() => console.log(cube.current)}>Log Cube</button>
    </>
  )
}