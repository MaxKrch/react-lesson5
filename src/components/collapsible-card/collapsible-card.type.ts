import type { PropsWithChildren } from 'react'
import type { Card } from '../../types'

type CollapsibleCardProps = PropsWithChildren<
  Pick<Card, 'poster' | 'collapseToggle'>
>

export type { CollapsibleCardProps }
