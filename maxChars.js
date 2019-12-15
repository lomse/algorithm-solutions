function maxChar(str) {

  const arr = str.split("");

  // map letters to total number of occurences
  const map = arr.reduce((acc, letter) => {
    if (letter.trim()) {
      acc.set(letter, (acc.get(letter) || 0) + 1)
    }
    return acc;
  }, new Map());

  const res = arr.reduce((max, letter) => {
    if (map.get(letter) > max.count) {
      return { letter, count: map.get(letter) }
    }
    return max
  }, {
    letter: "",
    count: 0
  })
  return res.letter;
}

// assert.equal(maxChar("a"), "a");
// assert.equal(maxChar("test"), "t");
// assert.equal(maxChar("I loveeeeee noodles"), "e");
// assert.equal(maxChar("1337"), "3");