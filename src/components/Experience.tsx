import Scene from '@/components/Scene'
import { useDebugUI } from '@/hooks/useDebugUI'
import { Canvas } from '@react-three/fiber'

const Experience = () => {
  const { position } = useDebugUI()
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 10000,
        position
      }}
    >
      <Scene />
    </Canvas>
  )
}

export default Experience
