import OutsideClickHandler from '@/components/OutsideClickHandler'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

const callbackMock = vi.fn()

describe('OutsideClickHandler', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should display child elements', () => {
    render(
      <OutsideClickHandler callback={callbackMock}>
        <div>childContent</div>
      </OutsideClickHandler>
    )

    const child = screen.getByText('childContent')
    expect(child).toBeInTheDocument()
  })

  it('should call callback when clicked outside', () => {
    render(
      <div>
        <OutsideClickHandler callback={callbackMock}>
          <div>childContent</div>
        </OutsideClickHandler>
        <div>outsideContent</div>
      </div>
    )

    const outsideContent = screen.getByText('outsideContent')
    fireEvent.mouseDown(outsideContent)

    expect(callbackMock).toHaveBeenCalled()
  })

  it('should not call callback when clicked inside', () => {
    const { getByText } = render(
      <OutsideClickHandler callback={callbackMock}>
        <div>childContent</div>
      </OutsideClickHandler>
    )
    const childContent = getByText('childContent')
    fireEvent.mouseDown(childContent)

    expect(callbackMock).not.toHaveBeenCalled()
  })
})
