import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import { keys as breakpointKeys } from '../utils/breakpoints'

const styles = theme => {
  const hidden = {
    display: 'none !important',
  }

  return breakpointKeys.reduce((acc, key) => {
    acc[`only-${key}`] = {
      [theme.breakpoints.only(key)]: hidden,
    }

    acc[`${key}Up`] = {
      [theme.breakpoints.up(key)]: hidden,
    }

    acc[`${key}Down`] = {
      [theme.breakpoints.down(key)]: hidden,
    }

    return acc
  }, {})
}

/**
 * @ignore - internal component.
 */
function HiddenCss(props) {
  const {
    children,
    classes,
    className: classNameProp,
    component: Component,
    lgDown,
    lgUp,
    mdDown,
    mdUp,
    only,
    smDown,
    smUp,
    xlDown,
    xlUp,
    xsDown,
    xsUp,
    theme,
    ...other
  } = props

  const classNames = []

  if (classNameProp) {
    classNames.push(classNameProp)
  }

  for (let i = 0; i < breakpointKeys.length; i += 1) {
    const breakpoint = breakpointKeys[i]
    const breakpointUp = props[`${breakpoint}Up`]
    const breakpointDown = props[`${breakpoint}Down`]

    if (breakpointUp) {
      classNames.push(classes[`${breakpoint}Up`])
    }
    if (breakpointDown) {
      classNames.push(classes[`${breakpoint}Down`])
    }
  }

  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only]
    onlyBreakpoints.forEach(breakpoint => {
      classNames.push(classes[`only-${breakpoint}`])
    })
  }

  return (
    <Component
      className={classNames.join(' ')}
      {...other}>
      {children}
    </Component>
  )
}

HiddenCss.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: PropTypes.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: PropTypes.bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.arrayOf(PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])),
  ]),

  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: PropTypes.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: PropTypes.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: PropTypes.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: PropTypes.bool,


}

HiddenCss.defaultProps = {
  component: 'div',
}

export default withStyles(styles)(HiddenCss)
