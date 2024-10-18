import { describe, expect, it } from 'vitest'

import ModelViewPage from '@/pages/ModelViewPage'
import { render, screen } from '@testing-library/react'

vi.mock('@/Experience')

describe('ModelViewPage', () => {
  it('displays the button', () => {
    render(<ModelViewPage />)
    const button = screen.getByText('filesUploader.loadFilesButton')

    expect(button).toBeInTheDocument()
  })
})
