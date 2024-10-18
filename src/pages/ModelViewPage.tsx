import Experience from '@/components/Experience'
import FilesUploader from '@/components/FilesUploader'
import { useAppSelector } from '@/hooks/use-redux'

const ModelViewPage = () => {
  const isEmpty = useAppSelector((store) => store.model.isEmpty)

  if (isEmpty) return <FilesUploader defaultOpen={isEmpty} />
  return <Experience />
}

export default ModelViewPage
