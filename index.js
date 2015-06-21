var length = require('magnitude')

function sub (tmp, a, b) {
  for (var i = 0; i < tmp.length; i++) {
    tmp[i] = a[i] - b[i]
  }
  return tmp
}

module.exports = triangleIncenter
function triangleIncenter (triangle) {
  if (triangle.length !== 3) {
    throw new TypeError('must provide a triangle of 3 points')
  }

  var dim = triangle[0].length

  var v1 = triangle[0]
  var v2 = triangle[1]
  var v3 = triangle[2]

  var tmp = new Array(dim)
  var d1 = length(sub(tmp, v3, v2))
  var d2 = length(sub(tmp, v1, v3))
  var d3 = length(sub(tmp, v2, v1))
  var p = d1 + d2 + d3

  for (var i = 0; i < dim; i++) {
    tmp[i] = (v1[i] * d1 + v2[i] * d2 + v3[i] * d3) / p
  }

  return tmp
}
