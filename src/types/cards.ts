type Card = {
  id: string
  poster?: string
  title?: string
  text?: string
  actionButton?: null | {
    title: string
  }
  collapseToggle?: null | {
    collapsedLabel?: string
    expandedLabel?: string
  }
}

export type { Card }
