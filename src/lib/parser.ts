import { Face } from '../types/Face'
import { Vertex } from '../types/Vertex'

export function parseVertices(input: string): Vertex[] {
  return input
    .split('\n')
    .map((line) => line.trim().split(' '))
    .filter((params) => params.length === 4)
    .map(([index, x, y, z]) => ({
      index: Number(index),
      x: Number(x),
      y: Number(y),
      z: Number(z)
    }))
}

export function parseFaces(input: string): Face[] {
  return input
    .split('\n')
    .map((line) => line.trim().split(' '))
    .filter((params) => params.length === 5)
    .map(([index, vertex1, vertex2, vertex3, vertex4]) => ({
      index: Number(index),
      vertex1: Number(vertex1),
      vertex2: Number(vertex2),
      vertex3: Number(vertex3),
      vertex4: Number(vertex4)
    }))
}
