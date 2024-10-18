import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import DragAndDrop from '@/components/DragAndDrop'
import OutsideClickHandler from '@/components/OutsideClickHandler'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux'
import { parseFaces, parseVertices } from '@/lib/parser'
import { setFaces, setVertices } from '@/redux/slices/modelSlice'

interface FilesUploaderProps {
  defaultOpen?: boolean
}

const FilesUploader = ({ defaultOpen = false }: FilesUploaderProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(defaultOpen)
  const dispatch = useAppDispatch()
  const { isEmpty, facesFileName, verticesFileName } = useAppSelector((store) => store.model)

  const verticesHint = verticesFileName === '' ? t('filesUploader.hint') : verticesFileName
  const facesHint = facesFileName === '' ? t('filesUploader.hint') : facesFileName

  const onLoadFilesClick = () => {
    setOpen(true)
  }

  const outsideClickHandler = () => {
    setOpen(false)
  }

  const onFacesLoad = async (files: File[]) => {
    const file = files[0]
    const input = await file.text()
    const faces = parseFaces(input)
    console.log(faces)

    dispatch(
      setFaces({
        faces,
        fileName: file.name
      })
    )
  }

  const onVerticesLoad = async (files: File[]) => {
    const file = files[0]
    const input = await file.text()
    const vertices = parseVertices(input)
    console.log(vertices)

    dispatch(
      setVertices({
        vertices,
        fileName: file.name
      })
    )
  }

  const onCreateModelClick = () => {
    setOpen(false)
  }

  if (!open) return <Button onClick={onLoadFilesClick}>{t('filesUploader.loadFilesButton')}</Button>

  return (
    <div
      data-testid="wrapper"
      className="absolute left-0 top-0 flex size-96 h-dvh w-dvw items-center justify-center bg-black/50 p-5 md:p-10"
    >
      <OutsideClickHandler callback={outsideClickHandler}>
        <div className="grid aspect-video max-w-7xl grid-rows-[1fr,auto] gap-5 rounded-3xl bg-white p-5 md:gap-10 md:p-10">
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
            <DragAndDrop
              hint={verticesHint}
              onFilesLoad={onVerticesLoad}
              title={t('filesUploader.verticesFile')}
              className="w-full max-w-80 p-5 md:aspect-square"
            />
            <DragAndDrop
              hint={facesHint}
              onFilesLoad={onFacesLoad}
              title={t('filesUploader.facesFile')}
              className="w-full max-w-80 p-5 md:aspect-square"
            />
          </div>
          <div className="flex items-center justify-end">
            <Button disabled={isEmpty} onClick={onCreateModelClick}>
              {t('filesUploader.createModelButton')}
            </Button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default FilesUploader
