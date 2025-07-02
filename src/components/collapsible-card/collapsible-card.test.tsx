import { screen, render } from '@testing-library/react'
import CollapsibleCard from './collapsible-card'
import { COLLAPSE_TOGGLE_LABELS } from '../consts'
import userEvent from '@testing-library/user-event'

describe(`Component: CollapsibleCard`, () => {
  const poster = '/poster.jpg'
  const collapseLabels: typeof COLLAPSE_TOGGLE_LABELS = {
    expandedLabel: `Hide`,
    collapsedLabel: `Show`,
  }
  const childProps = `Content`

  it('should renders CollapsibleCard correctly and toggles content visibility', () => {
    render(
      <CollapsibleCard poster={poster} collapseToggle={collapseLabels}>
        <p>{childProps}</p>
      </CollapsibleCard>
    )

    expect(screen.getByRole('button')).toHaveTextContent(
      collapseLabels.expandedLabel
    )
    expect(screen.getByText(childProps)).toBeInTheDocument()
  })

  it('should toggles content visibility', async () => {
    render(
      <CollapsibleCard poster={poster} collapseToggle={collapseLabels}>
        <p>{childProps}</p>
      </CollapsibleCard>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(collapseLabels.expandedLabel)

    await userEvent.click(button)
    expect(button).toHaveTextContent(collapseLabels.collapsedLabel)
  })
})
