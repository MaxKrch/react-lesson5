import { useCallback, useState } from 'react'

const useCollapse = (initial = false) => {
  const [isCollapsed, setIsCollapsed] = useState(initial)

  const toggle = useCallback(() => {
    setIsCollapsed((prev) => !prev)
  }, [])

  return {
    isCollapsed,
    toggle,
  }
}

export default useCollapse
