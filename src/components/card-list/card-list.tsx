import Button from '../button'

import Card from '../card/card'
import CollapsibleCard from '../collapsible-card'

import type { CardListProps } from './card-list.type'

const CardList = ({ cards }: CardListProps) => {
  return (
    <ul className="flex flex-row flex-wrap gap-2 justify-around">
      {cards.map((card) => {
        const content = []

        if (card.title)
          content.push(
            <h3 className="text-xl font-bold" key="title">
              {card.title}
            </h3>
          )
        if (card.text) content.push(<div key="text">{card.text}</div>)
        if (card.actionButton) {
          content.push(
            <Button key="btn" buttonId={card.id}>
              {card.actionButton.title}
            </Button>
          )
        }

        return (
          <li key={card.id}>
            {card.collapseToggle ? (
              <CollapsibleCard
                poster={card.poster}
                collapseToggle={card.collapseToggle}
              >
                {content}
              </CollapsibleCard>
            ) : (
              <Card poster={card.poster}>{content}</Card>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default CardList
