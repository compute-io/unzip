'use strict';

var unzip = require( './../lib' ),
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
