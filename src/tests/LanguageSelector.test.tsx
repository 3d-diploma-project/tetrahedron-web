import { LanguageSelector } from '@/components/LanguageSelector'
import { fireEvent, render, screen } from '@testing-library/react'
import { useTranslation } from 'react-i18next'
import { describe, expect, it, vi } from 'vitest'

const changeLanguageMock = vi.fn()

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn()
}))

describe('LanguageSelector', () => {
  it('displays current language when it exists in the list', () => {
    ;(useTranslation as unknown as ReturnType<typeof vi.fn>).mockImplementationOnce(() => ({
      i18n: {
        changeLanguage: changeLanguageMock,
        language: 'ua'
      }
    }))
    render(<LanguageSelector />)
    const selectTrigger = screen.getByText('ua')
    expect(selectTrigger).toBeInTheDocument()
  })

  it('displays default language when current language is not in the list', () => {
    ;(useTranslation as unknown as ReturnType<typeof vi.fn>).mockImplementationOnce(() => ({
      i18n: {
        changeLanguage: changeLanguageMock,
        language: 'uaaaa'
      }
    }))

    render(<LanguageSelector />)
    const select = screen.getByText('en')
    expect(select).toBeInTheDocument()
  })

  it('changes the language', () => {
    ;(useTranslation as unknown as ReturnType<typeof vi.fn>).mockImplementationOnce(() => ({
      i18n: {
        changeLanguage: changeLanguageMock,
        language: 'en'
      }
    }))

    render(<LanguageSelector />)
    const selectTrigger = screen.getByText('en')
    fireEvent.click(selectTrigger)

    const selectUA = screen.getByText('ua')
    fireEvent.click(selectUA)

    expect(changeLanguageMock).toHaveBeenCalled()
  })
})
