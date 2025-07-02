import { screen, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'
import Button from './button'

describe('Component: Button', () => {
  const handleClick = vi.fn()

  beforeEach(() => {
    handleClick.mockClear()
  })

  it('renders Button with children', () => {
    const expectedTest = `Click me`
    render(
      <Button buttonId="test-id" onClick={handleClick}>
        {expectedTest}
      </Button>
    )

    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(expectedTest)
  })

  it('renders Button with children and handles click with id', async () => {
    const expectedId = 'test-id'
    render(
      <Button buttonId={expectedId} onClick={handleClick}>
        Click me
      </Button>
    )

    const btn = screen.getByRole('button')

    await userEvent.click(btn)
    expect(handleClick).toHaveBeenCalledWith(expectedId)
  })
})
