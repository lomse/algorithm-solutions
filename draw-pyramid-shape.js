function drawPyramidShape(n) {
  let emptySpace = n - 1

  for (let i = 0; i < n; i++) {
    const hashes = (2 * i) + 1

    const pyramid = " ".repeat(emptySpace) + "#".repeat(hashes) + " ".repeat(emptySpace)

    --emptySpace

    console.log(pyramid)
  }
}

module.exports = drawPyramidShape