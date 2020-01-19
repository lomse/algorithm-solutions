function drawPyramidShapeAlternative(n) {

  for (let i = 1; i <= n; i++) {
    const hashes = (2 * i) - 1
    const emptySpace = n - i

    const pyramid = " ".repeat(emptySpace) + "#".repeat(hashes) + " ".repeat(emptySpace)

    console.log(pyramid)
  }
}

module.exports = drawPyramidShapeAlternative