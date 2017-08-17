// @flow
import hasOwnProperty from 'has-own-property'
import generateBreakpoints from '../utils/breakpoints'

const GUTTERS    = [0, 8, 16, 24, 40]
const GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const generateGrid = (globalStyles, theme, breakpoint) => {
  // For the auto layouting
  const styles = {
    [`grid-${breakpoint}`]: {
      flexBasis: 0,
      flexGrow : 1,
      maxWidth : '100%',
    },
  }

  GRID_SIZES.forEach((size) => {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return
    }

    // Only keep 6 significant numbers.
    const width = `${Math.round(size / 12 * Math.pow(10, 6)) / Math.pow(10, 4)}%`

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
export default (theme: Object) => {
  const breakpoints = hasOwnProperty(theme, 'breakpoints') ? theme.breakpoints : generateBreakpoints()

  return {
    typeContainer                : {
      boxSizing: 'border-box',
      display  : 'flex',
      flexWrap : 'wrap',
      width    : '100%',
    },
    typeItem                     : {
      boxSizing: 'border-box',
      flex     : '0 0 auto',
      margin   : '0', // For instance, it's useful when used with a `figure` element.
    },
    'direction-xs-column'        : {
      flexDirection: 'column',
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse',
    },
    'direction-xs-row-reverse'   : {
      flexDirection: 'row-reverse',
    },
    'wrap-xs-nowrap'             : {
      flexWrap: 'nowrap',
    },
    'align-xs-center'            : {
      alignItems: 'center',
    },
    'align-xs-flex-start'        : {
      alignItems: 'flex-start',
    },
    'align-xs-flex-end'          : {
      alignItems: 'flex-end',
    },
    'align-xs-baseline'          : {
      alignItems: 'baseline',
    },
    'justify-xs-center'          : {
      justifyContent: 'center',
    },
    'justify-xs-flex-end'        : {
      justifyContent: 'flex-end',
    },
    'justify-xs-space-between'   : {
      justifyContent: 'space-between',
    },
    'justify-xs-space-around'    : {
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
