import { Face } from '../types/Face'

export function useFace(data: Face[]) {
  const faces = new Uint16Array(
    data.flatMap((face) => [
      face.vertex1 - 1,
      face.vertex2 - 1,
      face.vertex3 - 1,

      face.vertex1 - 1,
      face.vertex2 - 1,
      face.vertex4 - 1,

      face.vertex2 - 1,
      face.vertex3 - 1,
      face.vertex4 - 1,

      face.vertex3 - 1,
      face.vertex1 - 1,
      face.vertex4 - 1
    ])
  )

  return faces
}
