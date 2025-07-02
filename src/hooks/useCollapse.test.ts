import { renderHook, act } from '@testing-library/react'
import useCollapse from './useCollapse'

describe('useCollapse', () => {
  it('should return default isCollapsed false', () => {
    const { result } = renderHook(() => useCollapse())

    expect(result.current.isCollapsed).toBe(false)
  })

  it('shouls return isCOllapsed, when init value true', () => {
    const { result } = renderHook(() => useCollapse(true))

    expect(result.current.isCollapsed).toBe(true)
  })

  it('should toggle value isCollapsed with call toggle()', () => {
    const { result } = renderHook(() => useCollapse())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isCollapsed).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isCollapsed).toBe(false)
  })
})
