import Button from '../button'
import type { CollapseToggleProps } from './collapse-toggle.type'
import { COLLAPSE_TOGGLE_LABELS } from '../consts'

const CollapseToggle = ({
  buttonId,
  onClick,
  collapseToggle,
  isCollapsed = false,
}: CollapseToggleProps) => {
  const {
    collapsedLabel = COLLAPSE_TOGGLE_LABELS.collapsedLabel,
    expandedLabel = COLLAPSE_TOGGLE_LABELS.expandedLabel,
  } = collapseToggle ?? {}

  const classes = 'bg-[#DEDEDE] hover:bg-[#BFBFBF] rounded-none text-black'

  return (
    <Button
      buttonId={buttonId}
      onClick={onClick}
      type={`button`}
      className={classes}
    >
      {isCollapsed ? collapsedLabel : expandedLabel}
    </Button>
  )
}

export default CollapseToggle
