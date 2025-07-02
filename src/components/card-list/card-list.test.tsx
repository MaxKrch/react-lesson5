import { screen, render } from '@testing-library/react'
import CardList from './card-list'
import type { Card } from '../../types'

describe(`Component: CardList`, () => {
  const actionButton: Card[`actionButton`] = {
    title: `Action Button`,
  }
  const collapseToggle: Card[`collapseToggle`] = {
    collapsedLabel: 'Hide',
    expandedLabel: 'Show',
  }
  const cards: Card[] = [
    {
      id: '1',
      title: 'Test Title',
      text: 'Test text',
      poster: 'https://example.com/poster.jpg',
      actionButton,
    },
    {
      id: '2',
      title: 'Test Title 2',
      text: 'Test text 2',
      poster: 'https://example.com/poster2.jpg',
      collapseToggle,
    },
  ]

  it(`should renders correctly data and count cards`, () => {
    render(<CardList cards={cards} />)

    expect(screen.getAllByRole(`article`)).toHaveLength(cards.length)
    expect(screen.getAllByRole('img')).toHaveLength(cards.length)

    cards.map((card) => {
      expect(screen.getByText(card.title!)).toBeInTheDocument()
      expect(screen.getByText(card.text!)).toBeInTheDocument()
    })

    expect(screen.getByText(actionButton.title)).toBeInTheDocument()
    expect(screen.getByText(collapseToggle.expandedLabel!)).toBeInTheDocument()
  })
})
