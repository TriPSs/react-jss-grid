// @flow
import createBreakpoints from '../breakpoints'

describe('createBreakpoints', () => {
  let breakpoints

  beforeEach(() => {
    breakpoints = createBreakpoints()
  })

  describe('up', () => {
    it('should work for xs', () => {
      expect(breakpoints.up('xs')).toEqual('@media (min-width:0px)')
    })

    it('should work for md', () => {
      expect(breakpoints.up('md')).toEqual('@media (min-width:960px)')
    })
  })

  describe('down', () => {
    it('should work', () => {
      expect(breakpoints.down('md')).toEqual('@media (max-width:959.99px)')
    })
  })

  describe('between', () => {
    it('should work', () => {
      expect(breakpoints.between('sm', 'md')).toEqual('@media (min-width:600px) and (max-width:1279.99px)')
    })
  })

  describe('only', () => {
    it('should work', () => {
      expect(breakpoints.only('md')).toEqual('@media (min-width:960px) and (max-width:1279.99px)')
    })

    it('on xl should call up', () => {
      expect(breakpoints.only('xl')).toEqual('@media (min-width:1920px)')
    })
  })
})
