drawPyramidShapeAlternative = require('./draw-pyramid-shape-alternative')

beforeAll(()=>{
  console.log = jest.fn()
})

describe('drawPyramidShape', () => {
  it('calls console.log function n times', ()=> {
    const n = 5

    drawPyramidShapeAlternative(n)

    expect(console.log).toHaveBeenCalledTimes(n)
  })

  it('outputs draws correctly a pyramid', ()=> {
    const n = 3

    drawPyramidShapeAlternative(n)

    expect(console.log).toHaveBeenCalledWith("  #  ")
    expect(console.log).toHaveBeenCalledWith(" ### ")
    expect(console.log).toHaveBeenCalledWith("#####")
  })
});