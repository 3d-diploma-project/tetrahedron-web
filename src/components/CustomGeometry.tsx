import { useAppSelector } from '@/hooks/use-redux'
import { Center, Wireframe } from '@react-three/drei'
import { FC } from 'react'
import { useFace } from '../hooks/useIndice'
import { useVertex } from '../hooks/useVertex'

const CustomGeometry: FC = () => {
  const vertices = useAppSelector((store) => store.model.vertices)
  const faces = useAppSelector((store) => store.model.faces)

  const position = useVertex(vertices)
  const index = useFace(faces)

  return (
    <Center>
      <mesh>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={position} itemSize={3} count={position.length / 3} />
          <bufferAttribute attach="index" array={index} itemSize={1} count={index.length} />
        </bufferGeometry>

        <meshBasicMaterial />

        <Wireframe thickness={0.01} stroke={'black'} />
        {/* <Helper type={VertexNormalsHelper} args={[1, 0xff0000]} /> */}
      </mesh>
    </Center>
  )
}

export default CustomGeometry
