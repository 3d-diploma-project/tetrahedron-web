import Navbar from '@/components/Navbar'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  })

  it('renders logo', () => {
    const logo = screen.getByText(/tetrahedron/i)
    expect(logo).toBeInTheDocument()
  })

  it('renders 6 menu items', () => {
    const menuItems = screen.getAllByText(/navbar.menuTitles/i)
    expect(menuItems.length).toEqual(6)
  })

  it('renders LanguageSelector', () => {
    const languageSelector = screen.getByRole('combobox')
    expect(languageSelector).toBeInTheDocument()
  })
})
