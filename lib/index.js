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

// UNZIP //

/**
* FUNCTION: unzip( arr )
*	Unzips a zipped array (i.e., a nested array of tuples).
*
* @param {Array} arr - zipped array
* @param {Array} array of unzipped arrays
*/
function unzip( arr ) {
	var len,
		out,
		tmp,
		numVals,
		i, j;

	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'unzip()::invalid input argument. Must provide a zipped array.' );
	}
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		if ( !Array.isArray( arr[i] ) ) {
			throw new TypeError( 'unzip()::invalid input argument. Array must only contain arrays.' );
		}
	}
	numVals = arr[ 0 ].length;
	out = new Array( numVals );
	for ( j = 0; j < numVals; j++ ) {
		tmp = new Array( len );
		for ( i = 0; i < len; i++ ) {
			tmp[ i ] = arr[ i ][ j ];
		}
		out[ j ] = tmp;
	}
	return out;
} // end FUNCTION unzip()


// EXPORTS //

module.exports = unzip;
