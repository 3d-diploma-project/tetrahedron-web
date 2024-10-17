import { describe, expect, it, vi } from 'vitest'

import FilesUploader from '@/components/FilesUploader'
import { fireEvent, render, screen } from '@testing-library/react'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: vi.fn()
    }
  })
}))

const mockTextFile = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' })

beforeEach(() => vi.resetAllMocks())

describe('FilesUploader', () => {
  it('should open modal when button is clicked', () => {
    render(<FilesUploader defaultOpen={false} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    const wrapper = screen.getByTestId('wrapper')

    expect(button).not.toBeInTheDocument()
    expect(wrapper).toBeInTheDocument()
  })

  it('should close modal when clicked outside', () => {
    render(
      <div>
        <FilesUploader defaultOpen />
        <div>outsideContent</div>
      </div>
    )
    const outsideContent = screen.getByText('outsideContent')
    const wrapper = screen.getByTestId('wrapper')

    fireEvent.mouseDown(outsideContent)

    const button = screen.getByText('filesUploader.loadFilesButton')

    expect(button).toBeInTheDocument()
    expect(wrapper).not.toBeInTheDocument()
  })

  it('should call vertices callback when loading vertices file', () => {
    render(<FilesUploader defaultOpen />)
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const verticesDnd = screen.getByText('filesUploader.verticesFile')

    fireEvent.drop(verticesDnd, {
      dataTransfer: {
        files: [mockTextFile]
      }
    })

    expect(consoleLogSpy).toHaveBeenCalledWith('hello.txt')
  })

  it('should call faces callback when loading faces file', () => {
    render(<FilesUploader defaultOpen />)
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const facesDnd = screen.getByText('filesUploader.facesFile')

    fireEvent.drop(facesDnd, {
      dataTransfer: {
        files: [mockTextFile]
      }
    })

    expect(consoleLogSpy).toHaveBeenCalledWith('hello.txt')
  })

  it('should call faces callback when loading faces file', () => {
    render(<FilesUploader defaultOpen />)
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const button = screen.getByText('filesUploader.createModelButton')

    fireEvent.click(button)

    expect(consoleLogSpy).toHaveBeenCalledWith('onCreateModelClick')
  })
})
