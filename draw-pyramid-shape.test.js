drawPyramidShape = require('./draw-pyramid-shape')

beforeAll(()=>{
  console.log = jest.fn()
})

describe('drawPyramidShape', () => {
  it('calls console.log function n times', ()=> {
    const n = 5

    drawPyramidShape(n)

    expect(console.log).toHaveBeenCalledTimes(n)
  })

  it('outputs draws correctly a pyramid', ()=> {
    const n = 3

    drawPyramidShape(n)

    expect(console.log).toHaveBeenCalledWith("  #  ")
    expect(console.log).toHaveBeenCalledWith(" ### ")
    expect(console.log).toHaveBeenCalledWith("#####")
  })
});