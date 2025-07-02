import type { PropsWithChildren } from 'react'
import type { Card } from '../../types'

type CardProps = PropsWithChildren<Pick<Card, 'poster'>>

export type { CardProps }
