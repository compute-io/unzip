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
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer' );


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

	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'unzip()::invalid input argument. Must provide a zipped array.' );
	}
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		if ( !Array.isArray( arr[i] ) ) {
			throw new TypeError( 'unzip()::invalid input argument. Array must only contain arrays.' );
		}
	}
	// Assume that the first tuple is representative of all tuples...
	numVals = arr[ 0 ].length;
	if ( arguments.length > 1 ) {
		if ( !Array.isArray( idx ) ) {
			throw new TypeError( 'unzip()::invalid input argument. Indices must be specified as an array.' );
		}
		for ( i = 0; i < idx.length; i++ ) {
			k = idx[ i ];
			if ( !isInteger( k ) ) {
				throw new TypeError( 'unzip()::invalid input argument. All indices must be integers.' );
			}
			if ( k < 0 || k > numVals ) {
				throw new Error( 'unzip()::invalid input argument. Must provide valid indices; i.e., an index must be on the interval [0,len], where len is the tuple length.' );
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
