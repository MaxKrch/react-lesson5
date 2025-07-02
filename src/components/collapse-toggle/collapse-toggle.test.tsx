import { screen, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'
import CollapseToggle from './collapse-toggle'
import { COLLAPSE_TOGGLE_LABELS } from '../consts'

describe('Component: CollapseToggle', () => {
  const buttonId = `card-id`
  const defaultLabel = COLLAPSE_TOGGLE_LABELS
  const customLabel: typeof COLLAPSE_TOGGLE_LABELS = {
    expandedLabel: `Hide`,
    collapsedLabel: `Show`,
  }
  const toggleFn = vi.fn()

  beforeEach(() => {
    toggleFn.mockClear()
  })

  it('renders CollapseToggle with correct label, when label passed and isCollapsed is true', () => {
    render(
      <CollapseToggle
        buttonId={buttonId}
        onClick={toggleFn}
        isCollapsed={true}
        collapseToggle={customLabel}
      />
    )

    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(customLabel.collapsedLabel)
  })

  it('renders CollapseToggle with correct label, when label passed and isCollapsed is false', () => {
    render(
      <CollapseToggle
        buttonId={buttonId}
        onClick={toggleFn}
        isCollapsed={false}
        collapseToggle={customLabel}
      />
    )

    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(customLabel.expandedLabel)
  })

  it('renders CollapseToggle with correct label, whwn label not passed', () => {
    render(
      <CollapseToggle
        buttonId={buttonId}
        onClick={toggleFn}
        isCollapsed={false}
        collapseToggle={null}
      />
    )

    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(defaultLabel.expandedLabel)
  })

  it('renders CollapseToggle with correct label and calls handler', async () => {
    render(
      <CollapseToggle
        buttonId={buttonId}
        onClick={toggleFn}
        isCollapsed={false}
        collapseToggle={customLabel}
      />
    )

    const btn = screen.getByRole('button')
    await userEvent.click(btn)
    expect(toggleFn).toHaveBeenCalledWith(buttonId)
  })
})
