import { faker } from '@faker-js/faker'
import type { Card } from '../types'

const baseCards: Card[] = [
  {
    id: faker.string.uuid(),
    poster: faker.image.url(),
    title: faker.lorem.sentence(5),
    text: faker.lorem.sentence(),
    actionButton: {
      title: faker.lorem.words(2),
    },
    collapseToggle: null,
  },
  {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(3),
    text: faker.lorem.paragraph(),
    actionButton: {
      title: faker.lorem.words(2),
    },
    collapseToggle: null,
  },
]

const collapsedCards: Card[] = [
  {
    id: faker.string.uuid(),
    poster: faker.image.url(),
    title: faker.lorem.sentence(3),
    text: faker.lorem.sentence(),
    actionButton: null,
    collapseToggle: {
      collapsedLabel: 'Show',
      expandedLabel: 'Hide',
    },
  },
  {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(5),
    collapseToggle: {},
  },
]

const cards = [...baseCards, ...collapsedCards]

export { cards }
