// @flow

import React from 'react'
import { ThemeProvider } from 'react-jss'
import renderer from 'react-test-renderer';
import Grid from '../Grid'

describe('(Component) <Grid />', () => {

  const render = children => renderer.create(
    <ThemeProvider theme={{}}>
      {children}
    </ThemeProvider>
  )

  it('should render', () => {
    const component = render(<Grid className="woofGrid" />).toJSON()

    expect(component).toMatchSnapshot();
    expect(component.type).toBe('div')
    expect(component.props.className).toBe('woofGrid')
  })


  describe('prop: container', () => {
    it('should apply the container class', () => {
      const component = render(<Grid container />).toJSON()

      expect(component).toMatchSnapshot();
      expect(component.props.className).toContain('typeContainer')
    })
  })

  describe('prop: item', () => {
    it('should apply the item class', () => {
      const component = render(<Grid item />).toJSON()

      expect(component).toMatchSnapshot();
      expect(component.props.className).toContain('typeItem')
    })
  })

  describe('prop: component', () => {
    it('should use the default', () => {
      const component = render(<Grid />).toJSON()

      expect(component.type).toBe('div')
    })

    it('should change the component', () => {
      const component = render(<Grid component={'span'} />).toJSON()

      expect(component.type).toBe('span')
    })
  })

  describe('prop: xs', () => {
    it('should apply the flex-grow class', () => {
      const component = render(<Grid item xs />).toJSON()

      expect(component.props.className).toContain('grid-xs')
    })

    it('should apply the flex size class', () => {
      const component = render(<Grid item xs={3} />).toJSON()

      expect(component.props.className).toContain('grid-xs-3')
    })
  })

  describe('prop: spacing', () => {
    it('should have a default spacing', () => {
      const component = render(<Grid container />).toJSON()

      expect(component.props.className).toContain('spacing-xs-16')
    })
  })

  describe('prop: other', () => {
    it('should spread the other properties to the root element', () => {
      const handleClick = () => {}

      const component = render(<Grid component={'span'} onClick={handleClick} />).toJSON()
      expect(component.props.onClick).toEqual(handleClick)
    })
  })
})
