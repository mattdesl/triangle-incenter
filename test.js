var incenter = require('./')
var test = require('tape')

test('computes the incenter of a 2D or 3D triangle', function(t) {
  var t2d = [ 
    [10, 0],
    [20, 2],
    [30, 1]
  ]

  var t3d = [
    [10, 0, -4],
    [20, 2, 24],
    [30, 1, 4]
  ]

  t.deepEqual(incenter(t3d), [ 21.00565152881361, 0.9888920317758836, 7.420011896888692 ])
  t.deepEqual(incenter(t2d), [ 20.03678985362022, 1.2476878747362354 ])
  t.throws(function() {
    incenter([])
  }, TypeError, 'throws type error')
  t.end()
})