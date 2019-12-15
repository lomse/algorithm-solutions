const maxChar = require('./maxChars')

describe('maxChar', () => {
  test('returns character with max occurences', ()=> {
    expect(maxChar("a")).toBe("a");
    expect(maxChar("test")).toBe("t");
    expect(maxChar("I loveeeeee noodles")).toBe("e");
    expect(maxChar("1337")).toBe("3");
  })
})
