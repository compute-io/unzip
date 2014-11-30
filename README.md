Unzip
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Unzips a [zipped array](https://github.com/compute-io/zip) (i.e., a nested array of tuples).


## Installation

``` bash
$ npm install compute-unzip
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var unzip = require( 'compute-unzip' );
```

#### unzip( arr[, idx] )

Unzips a [zipped array](https://github.com/compute-io/zip) (i.e., a nested `array` of tuples).

``` javascript
var arr = [ [1,'a',3], [2,'b',4] ];

var out = unzip( arr );
// returns [ [1,2], ['a','b'], [3,4] ];
```

To unzip specific tuple elements, you can provide an `array` of indices as an optional second argument.

``` javascript
var arr = [ [1,'a',3], [2,'b',4] ];

var out = unzip( arr, [0,2] );
// returns [ [1,2], [3,4] ];
```



## Examples

``` javascript
var unzip = require( 'compute-unzip' ),
	mean = require( 'compute-mean' );

// Simulate some data...
var arr = new Array( 100 ),
	len = 5;

for ( var i = 0; i < arr.length; i++ ) {
	arr[ i ] = new Array( len );
	for ( var j = 0; j < len; j++ ) {
		arr[ i ][ j ] = Math.round( Math.random()*Math.pow(10,j) );
	}
}
// Unzip and compute the means...
var out = unzip( arr );

var mu = new Array( len );
for ( var k = 0; k < len; k++ ) {
	mu[ k ] = mean( out[k] );
}
console.log( mu.join( '\t' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

This function is complementary to [compute-zip](https://github.com/compute-io/zip) and is inspired by Python's [`zip`](https://docs.python.org/3.3/library/functions.html#zip) function.


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-unzip.svg
[npm-url]: https://npmjs.org/package/compute-unzip

[travis-image]: http://img.shields.io/travis/compute-io/unzip/master.svg
[travis-url]: https://travis-ci.org/compute-io/unzip

[coveralls-image]: https://img.shields.io/coveralls/compute-io/unzip/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/unzip?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/unzip.svg
[dependencies-url]: https://david-dm.org/compute-io/unzip

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/unzip.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/unzip

[github-issues-image]: http://img.shields.io/github/issues/compute-io/unzip.svg
[github-issues-url]: https://github.com/compute-io/unzip/issues
