// @flow
/**
 * A grid component using the following libs as inspiration.
 *
 * For the implementation:
 * - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
 * - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
 * - https://github.com/roylee0704/react-flexbox-grid
 * - https://material.angularjs.org/latest/layout/introduction
 *
 * Follow this flexbox Guide to better understand the underlying model:
 * - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */

import React from 'react'
import classNames from 'classnames'
import withStyles  from 'react-jss'

import type { AllProps } from './GridTypes'
import GridStyleSheet from './GridStyleSheet'

export const Grid = (props: AllProps) => {
  const {
          classes,
          className: classNameProp,
          component,
          container,
          item,
          align,
          direction,
          spacing,
          justify,
          wrap,
          xs,
          sm,
          md,
          lg,
          xl,
          theme,
          sheet,
          ...other
        } = props

  const className = classNames(
    {
      [classes.typeContainer]                       : container,
      [classes.typeItem]                            : item,
      [classes[`spacing-xs-${String(spacing)}`]]    : container && spacing !== 0,
      [classes[`direction-xs-${String(direction)}`]]: direction !== Grid.defaultProps.direction,
      [classes[`wrap-xs-${String(wrap)}`]]          : wrap !== Grid.defaultProps.wrap,
      [classes[`align-xs-${String(align)}`]]        : align !== Grid.defaultProps.align,
      [classes[`justify-xs-${String(justify)}`]]    : justify !== Grid.defaultProps.justify,
      [classes['grid-xs']]                          : xs === true,
      [classes[`grid-xs-${String(xs)}`]]            : xs && xs !== true,
      [classes['grid-sm']]                          : sm === true,
      [classes[`grid-sm-${String(sm)}`]]            : sm && sm !== true,
      [classes['grid-md']]                          : md === true,
      [classes[`grid-md-${String(md)}`]]            : md && md !== true,
      [classes['grid-lg']]                          : lg === true,
      [classes[`grid-lg-${String(lg)}`]]            : lg && lg !== true,
      [classes['grid-xl']]                          : xl === true,
      [classes[`grid-xl-${String(xl)}`]]            : xl && xl !== true,
    },
    classNameProp,
  )

  const gridProps = { className, ...other }

  // workaround: see https://github.com/facebook/flow/issues/1660#issuecomment-297775427
  const ComponentProp = component || Grid.defaultProps.component

  return <ComponentProp {...gridProps} />
}

Grid.defaultProps = {
  align    : 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item     : false,
  justify  : 'flex-start',
  spacing  : 16,
  wrap     : 'wrap',
}

export default withStyles(GridStyleSheet, { name: 'JssGrid' })(Grid)
