import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from 'react-jss'

import GridStyleSheet, { GUTTERS } from './GridStyleSheet'

function Grid(props) {
  const {
    alignContent,
    alignItems,
    classes,
    className: classNameProp,
    component: Component,
    container,
    direction,
    hidden,
    flex,
    item,
    justify,
    lg,
    md,
    zeroMinWidth,
    sm,
    spacing,
    wrap,
    xl,
    xs,
    theme,
    ...other
  } = props

  const className = classNames(
    {
      [classes.typeContainer]                              : container,
      [classes.typeItem]                                   : item,
      [classes.zeroMinWidth]                               : zeroMinWidth,
      [classes.flex]                                       : flex,
      [classes[`spacing-xs-${String(spacing)}`]]           : container && spacing !== 0,
      [classes[`direction-xs-${String(direction)}`]]       : direction !== Grid.defaultProps.direction,
      [classes[`wrap-xs-${String(wrap)}`]]                 : wrap !== Grid.defaultProps.wrap,
      [classes[`align-items-xs-${String(alignItems)}`]]    : alignItems !== Grid.defaultProps.alignItems,
      [classes[`align-content-xs-${String(alignContent)}`]]: alignContent !== Grid.defaultProps.alignContent,
      [classes[`justify-xs-${String(justify)}`]]           : justify !== Grid.defaultProps.justify,
      [classes['grid-xs']]                                 : xs === true,
      [classes[`grid-xs-${String(xs)}`]]                   : xs && xs !== true,
      [classes['grid-sm']]                                 : sm === true,
      [classes[`grid-sm-${String(sm)}`]]                   : sm && sm !== true,
      [classes['grid-md']]                                 : md === true,
      [classes[`grid-md-${String(md)}`]]                   : md && md !== true,
      [classes['grid-lg']]                                 : lg === true,
      [classes[`grid-lg-${String(lg)}`]]                   : lg && lg !== true,
      [classes['grid-xl']]                                 : xl === true,
      [classes[`grid-xl-${String(xl)}`]]                   : xl && xl !== true,
    },
    classNameProp,
  )

  const gridProps = { className, ...other }

  return <Component {...gridProps} />
}

Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems  : PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  /**
   * The content of the component.
   */
  children    : PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes     : PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className   : PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: PropTypes.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If provided, will wrap with [Hidden](/api/hidden) component and given properties.
   */
  hidden: PropTypes.object,

  /**
   * If `true`, the component will have display flex
   */
  flex: PropTypes.bool,

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: PropTypes.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: PropTypes.oneOf(GUTTERS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: PropTypes.bool,
}

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems  : 'stretch',
  component   : 'div',
  container   : false,
  flex        : false,
  direction   : 'row',
  item        : false,
  justify     : 'flex-start',
  zeroMinWidth: false,
  spacing     : 16,
  wrap        : 'wrap',
}

export default withStyles(GridStyleSheet, { name: 'JssGrid' })(Grid)
