// @flow weak

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Sorted ASC by size. That's important.
export const keys = ['xs', 'sm', 'md', 'lg', 'xl']

export const defaultBreakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

// Keep in mind that @media is inclusive by the CSS specification.
export default (breakpoints = defaultBreakpoints, unit = 'px', step = 1) => {
  const values = keys.map(key => breakpoints[key])

  const up = (key) => {
    let value
    // min-width of xs starts at 0
    if (key === 'xs') {
      value = 0
    } else {
      value = breakpoints[key] || key
    }
    return `@media (min-width:${value}${unit})`
  }

  const down = (key) => {
    const value = breakpoints[key] || key
    return `@media (max-width:${value - step / 100}${unit})`
  }

  const between = (start, end) => {
    const startIndex = keys.indexOf(start)
    const endIndex   = keys.indexOf(end)
    return (
      `@media (min-width:${values[startIndex]}${unit}) and ` +
      `(max-width:${values[endIndex + 1] - step / 100}${unit})`
    )
  }

  const only = (key) => {
    const keyIndex = keys.indexOf(key)
    if (keyIndex === keys.length - 1) {
      return up(key)
    }
    return between(key, key)
  }

  const getWidth = (key) => {
    return breakpoints[key]
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    getWidth,
  }
}
