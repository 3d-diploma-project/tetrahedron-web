import Scene from '@/components/Scene'
import { Canvas } from '@react-three/fiber'

const Experience = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 10000,
        position: [3, 3, 3]
      }}
    >
      <Scene />
    </Canvas>
  )
}

export default Experience
