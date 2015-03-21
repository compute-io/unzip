/**
*
*	COMPUTE: unzip
*
*
*	DESCRIPTION:
*		- Unzips a zipped array (i.e., a nested array of tuples).
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' ),
	isArrayArray = require( 'validate.io-array-array' );


// UNZIP //

/**
* FUNCTION: unzip( arr[, idx] )
*	Unzips a zipped array (i.e., a nested array of tuples).
*
* @param {Array} arr - zipped array
* @param {Array} [idx] - array of indices specifying which tuple elements to unzip
* @returns {Array} array of unzipped arrays
*/
function unzip( arr, idx ) {
	var len,
		out,
		tmp,
		numVals,
		i, j, k;

	if ( !isArrayArray( arr ) ) {
		throw new TypeError( 'unzip()::invalid input argument. Must provide a zipped array (an array of arrays). Value: `' + arr + '`.' );
	}
	// Assume that the first tuple is representative of all tuples...
	numVals = arr[ 0 ].length;
	if ( arguments.length > 1 ) {
		if ( !isArray( idx ) ) {
			throw new TypeError( 'unzip()::invalid input argument. Indices must be specified as an array.' );
		}
		for ( i = 0; i < idx.length; i++ ) {
			k = idx[ i ];
			if ( !isNonNegativeInteger( k ) ) {
				throw new TypeError( 'unzip()::invalid input argument. All indices must be nonnegative integers. Value: `' + k + '`.' );
			}
			if ( k > numVals ) {
				throw new RangeError( 'unzip()::invalid input argument. Must provide valid indices; i.e., an index must be on the interval [0,' + numVals + ']. Value: `' + k + '`.' );
			}
		}
		numVals = idx.length;
	} else {
		idx = new Array( numVals );
		for ( i = 0; i < numVals; i++ ) {
			idx[ i ] = i;
		}
	}
	out = new Array( numVals );
	len = arr.length;
	for ( j = 0; j < numVals; j++ ) {
		tmp = new Array( len );
		k = idx[ j ];
		for ( i = 0; i < len; i++ ) {
			tmp[ i ] = arr[ i ][ k ];
		}
		out[ j ] = tmp;
	}
	return out;
} // end FUNCTION unzip()


// EXPORTS //

module.exports = unzip;
