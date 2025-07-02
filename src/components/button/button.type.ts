import type { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
  onClick?: (buttonId?: string) => void
  buttonId?: string
  className?: string
  type?: `button` | `submit` | 'reset'
}>

export type { ButtonProps }
