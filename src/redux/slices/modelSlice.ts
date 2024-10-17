import { Face } from '@/types/Face'
import { Vertex } from '@/types/Vertex'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ModelState {
  faces: Face[]
  vertices: Vertex[]
  isEmpty: boolean
  facesFileName: string
  verticesFileName: string
}

const initialState: ModelState = {
  faces: [],
  vertices: [],
  isEmpty: true,
  facesFileName: '',
  verticesFileName: ''
}

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setFaces: (state, action: PayloadAction<{ faces: Face[]; fileName: string }>) => {
      const { faces, fileName } = action.payload
      state.faces = faces
      state.facesFileName = fileName
      state.isEmpty = state.vertices.length === 0 || faces.length === 0
    },
    setVertices: (state, action: PayloadAction<{ vertices: Vertex[]; fileName: string }>) => {
      const { vertices, fileName } = action.payload
      state.vertices = vertices
      state.verticesFileName = fileName
      state.isEmpty = state.faces.length === 0 || vertices.length === 0
    },
    resetModel: () => initialState
  }
})

export const { setFaces, setVertices, resetModel } = modelSlice.actions

export default modelSlice.reducer
