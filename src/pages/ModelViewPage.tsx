import FilesUploader from '@/components/FilesUploader'
import InstrumentsSidebar from '@/components/InstrumentsSidebar'
import Scene from '@/components/Scene'
import Toolbar from '@/components/Toolbar'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'
import { setFaces, setReady, setVertices } from '@/redux/slices/modelSlice'
import { Face } from '@/types/Face'
import { Vertex } from '@/types/Vertex'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { GrPowerReset } from 'react-icons/gr'
import { IoMove } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { PiCopySimpleLight, PiCursorFill, PiResize } from 'react-icons/pi'

export type cameraType = [number, number, number]

const ModelViewPage = () => {
  const { isReady, facesFileName, verticesFileName, faces, vertices } = useAppSelector((store) => store.model)
  const [filesUploaderOpen, setFilesUploaderOpen] = useState(!isReady)
  const [cameraPosition] = useState<cameraType>([3, 3, 3])
  const dispatch = useAppDispatch()

  const onFacesLoad = (faces: Face[], fileName: string) => {
    dispatch(setFaces({ faces, fileName }))
  }

  const onVerticesLoad = (vertices: Vertex[], fileName: string) => {
    dispatch(setVertices({ vertices, fileName }))
  }

  const closeModal = () => {
    dispatch(setReady(faces.length > 0 && vertices.length > 0))
    setFilesUploaderOpen(false)
  }

  const buttonsData = [
    { tooltip: 'select', icon: <PiCursorFill /> },
    { tooltip: 'move', icon: <IoMove /> },
    { tooltip: 'rotate', icon: <GrPowerReset /> },
    { tooltip: 'scale', icon: <PiResize /> },
    { tooltip: 'copy', icon: <PiCopySimpleLight /> },
    { tooltip: 'delete', icon: <MdDelete /> }
  ]

  const cameraProps = {
    fov: 45,
    near: 0.001,
    far: 10000,
    position: cameraPosition
  }
  return (
    <>
      <div className="relative flex items-center justify-between">
        <InstrumentsSidebar buttonsData={buttonsData} />
        {isReady && (
          <div data-testid="experience" className="h-full w-full">
            <Canvas>
              <PerspectiveCamera {...cameraProps} makeDefault />
              <Scene />
            </Canvas>
          </div>
        )}
        <Toolbar />
      </div>

      {filesUploaderOpen && (
        <FilesUploader
          verticesFileName={verticesFileName}
          facesFileName={facesFileName}
          disableCreateModelButton={isReady}
          closeModal={closeModal}
          onFacesLoad={onFacesLoad}
          onVerticesLoad={onVerticesLoad}
          onCreateModelClick={closeModal}
        />
      )}
    </>
  )
}

export default ModelViewPage
