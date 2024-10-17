import { configureStore } from '@reduxjs/toolkit'
import model from './slices/modelSlice'

export const store = configureStore({
  reducer: { model }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
