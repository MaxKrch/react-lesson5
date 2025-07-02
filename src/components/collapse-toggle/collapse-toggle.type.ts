import type { Card } from '../../types'

type CollapseToggleProps = {
  onClick?: (buttonId?: string) => void
  buttonId?: string
  isCollapsed?: boolean
  collapseToggle: Card[`collapseToggle`]
}

export type { CollapseToggleProps }
