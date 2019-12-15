const findShortestSubArray = require('./degree-of-an-array');

describe('degree', () => {
  test('returns shortest sub array', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toEqual(2)
    expect(findShortestSubArray([1,2,2,3,1,4,2])).toEqual(6)
  })
})
