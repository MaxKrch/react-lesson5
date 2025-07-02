import { forwardRef, type MouseEvent } from 'react'
import type { ButtonProps } from './button.type'
import { twMerge } from 'tailwind-merge'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ buttonId, className, onClick, type = `button`, children }, ref) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault()
      onClick?.(buttonId)
    }

    const baseClasses =
      'w-full p-1 h-[35px] cursor-pointer bg-[#1155EE] hover:bg-[#5577EE] text-lg capitalize text-white rounded'

    return (
      <button
        className={twMerge(baseClasses, className)}
        type={type}
        onClick={(event: MouseEvent<HTMLButtonElement>) => handleClick(event)}
        ref={ref}
      >
        {children ?? `Button`}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
