import React, { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CubeModel from './CubeModel'
import Cube, { R } from './structure'
import './styles/model.css'

const fileName = 'cube.json'
const type = 'application/json'
const encoding = 'utf-8'

function downloadFile(object) {
  const a = document.createElement('a')
  const content = encodeURIComponent(JSON.stringify(object, null, 2))

  a.href = `data:${type};charset=${encoding},${content}`
  a.download = fileName
  a.click()
}

function readFileContent(file, callback) {
  console.log(file)
  if (!file.name.endsWith('.json') || file.type !== type)
    return
  // add json validation

  const reader = new FileReader()
  reader.onload = e => callback(JSON.parse(e.target.result))
  reader.onerror = e => console.log(e.target.error)

  reader.readAsText(file, encoding)
}

export default function Model() {
  const cube = useRef(new Cube())
  const fileInput = useRef()

  return (
    <div className='content'>
      <h1 className='title'>3D Model</h1>

      <p className='start'>
        Click on a center piece to rotate a face clockwise. Press <code>Shift</code> to change direction to counterclockwise.
      </p>

      <div className='model-wrapper'>
        <Canvas camera={{ fov: 75 }}>
          <OrbitControls
            minDistance={2 * R}
            maxDistance={10}
            enablePan={false} />
          <ambientLight />

          <CubeModel cubeRef={cube} />
        </Canvas>
      </div>

      <div className='buttons'>
        <button onClick={() => downloadFile(cube.current)}>Export to Json</button>
        <button onClick={() => {
          alert('Coming Soon...')
          // fileInput.current.click()
        }}>Import cube Json</button>

        <input ref={fileInput} type={'file'} hidden onChange={e => {
          const files = e.target.files
          if (!files.length)
            return
          readFileContent(files[0], console.log) // reading first file
        }} />
      </div>
    </div >
  )
}