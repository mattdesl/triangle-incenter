# triangle-incenter

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Computes the incenter of a triangle. The vectors can be 2D, 3D, or n-dimensional.

```js
var incenter = require('triangle-incenter')

var triangle2d = [ 
  [10, 0],
  [20, 2],
  [30, 1]
]

incenter(triangle2d)
// > [ 20.03678985362022, 1.2476878747362354 ]
```

## Usage

[![NPM](https://nodei.co/npm/triangle-incenter.png)](https://www.npmjs.com/package/triangle-incenter)

#### `incenter = triangleIncenter(triangle)`

For the given `triangle`, an array of 3 vectors, computes the incenter. 

Returns a new vector with the same dimension as the first point in `triangle`. 

## See Also

- [triangle-centroid](https://www.npmjs.com/package/triangle-centroid)
- [circumcenter](https://www.npmjs.com/package/circumcenter)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/triangle-incenter/blob/master/LICENSE.md) for details.
