import hasOwnProperty from 'has-own-property'
import generateBreakpoints from '../utils/breakpoints'

export const GUTTERS = [0, 8, 16, 24, 40]
export const GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const generateGrid = (globalStyles, theme, breakpoint) => {
  // For the auto layouting
  const styles = {
    [`grid-${breakpoint}`]: {
      flexBasis: 0,
      flexGrow : 1,
      maxWidth : '100%',
    },
  }

  GRID_SIZES.forEach(size => {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return
    }

    // Only keep 6 significant numbers.
    const width = `${Math.round(size / 12 * 10e6) / 10e4}%`

    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/b0508a975d711d6b24c01f57dd5445c22699fac4/scss/mixins/_grid.scss#L69
    /* eslint-enable max-len */
    styles[`grid-${breakpoint}-${size}`] = {
      flexBasis: width,
      maxWidth : width,
    }
  })

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles)
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles
  }
}

export const generateGutter = (theme, breakpoint) => {
  const styles = {}

  GUTTERS.forEach((spacing, index) => {
    if (index === 0) {
      // Skip the default style.
      return
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin         : -spacing / 2,
      width          : `calc(100% + ${spacing}px)`,
      '& > $typeItem': {
        padding: spacing / 2,
      },
    }
  })

  return styles
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
export default theme => {
  const breakpoints = hasOwnProperty(theme, 'breakpoints') ? theme.breakpoints : generateBreakpoints()

  return {
    typeContainer: {
      boxSizing: 'border-box',
      display  : 'flex',
      flexWrap : 'wrap',
      width    : '100%',
    },

    typeItem: {
      boxSizing: 'border-box',
      flex     : '0 0 auto',
      margin   : '0', // For instance, it's useful when used with a `figure` element.
    },

    zeroMinWidth: {
      minWidth: 0,
    },

    flex: {
      display: 'flex',
    },

    'direction-xs-column': {
      flexDirection: 'column',
    },

    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse',
    },

    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse',
    },

    'wrap-xs-nowrap': {
      flexWrap: 'nowrap',
    },

    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse',
    },

    'align-items-xs-center': {
      alignItems: 'center',
    },

    'align-items-xs-flex-start': {
      alignItems: 'flex-start',
    },

    'align-items-xs-flex-end': {
      alignItems: 'flex-end',
    },

    'align-items-xs-baseline': {
      alignItems: 'baseline',
    },

    'align-content-xs-center': {
      alignContent: 'center',
    },

    'align-content-xs-flex-start': {
      alignContent: 'flex-start',
    },

    'align-content-xs-flex-end': {
      alignContent: 'flex-end',
    },

    'align-content-xs-space-between': {
      alignContent: 'space-between',
    },

    'align-content-xs-space-around': {
      alignContent: 'space-around',
    },

    'justify-xs-center': {
      justifyContent: 'center',
    },

    'justify-xs-flex-end': {
      justifyContent: 'flex-end',
    },

    'justify-xs-space-between': {
      justifyContent: 'space-between',
    },

    'justify-xs-space-around': {
      justifyContent: 'space-around',
    },

    ...generateGutter(theme, 'xs'),

    ...breakpoints.keys.reduce((accumulator, key) => {
      // Use side effect over immutability for better performance.
      generateGrid(accumulator, { ...theme, breakpoints }, key)

      return accumulator
    }, {}),
  }
}
