import { button, useControls } from 'leva'
import { useState } from 'react'

type PositionType = [number, number, number]

export function useDebugUI() {
  const [position, setPosition] = useState<PositionType>([3, 3, 3])

  useControls({
    clickMe: button(() => {
      setPosition([3, 3, 3])
    })
  })

  return { position }
}
