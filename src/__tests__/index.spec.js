import Grid from '../Grid'
import index, {generateBreakpoints as indexBreakpoints} from '../index'
import generateBreakpoints from '../utils/breakpoints'

describe('(Index)', () => {

  it('should export the Grid component as default', () => {
    expect(index).toEqual(Grid)
  })

  it('should export the generateBreakpoints function', () => {
    expect(indexBreakpoints).toEqual(generateBreakpoints)
  })

})
