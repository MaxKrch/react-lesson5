import Card from '../card'
import type { CollapsibleCardProps } from './collapsible-card.type'
import CollapseToggle from '../collapse-toggle'
import clsx from 'clsx'
import useCollapse from '../../hooks/useCollapse'

const CollapsibleCard = ({
  poster,
  collapseToggle,
  children,
}: CollapsibleCardProps) => {
  const { isCollapsed, toggle } = useCollapse()

  return (
    <div>
      <CollapseToggle
        onClick={toggle}
        isCollapsed={isCollapsed}
        collapseToggle={collapseToggle}
      />
      <div
        className={clsx('transition-all duration-300 overflow-hidden', {
          'max-h-[0px] p-[0px]': isCollapsed,
          'max-h-[100vh]': !isCollapsed,
        })}
      >
        <Card poster={poster}>{children}</Card>
      </div>
    </div>
  )
}

export default CollapsibleCard
