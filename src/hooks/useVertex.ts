import { Vertex } from '../types/Vertex'

export function useVertex(data: Vertex[]) {
  const positions = new Float32Array(data.flatMap((vertex) => [vertex.x, vertex.y, vertex.z]))
  return positions
}
