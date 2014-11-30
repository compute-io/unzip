'use strict';

var unzip = require( './../lib' );

// Simulate some data...
var arr = new Array( 1000 );

for ( var i = 0; i < arr.length; i++ ) {
	arr[ i ] = [
		Date.now(),
		Math.random() * 100
	];
}

var unzipped,
	start,
	diff,
	elapsed;

start = process.hrtime();
for ( var j = 0; j < 1e6; j++ ) {
	unzipped = unzip( arr );
}
diff = process.hrtime( start );

// Elapsed time:
elapsed = diff[ 0 ] + diff[ 1 ]*1e-9;

// Results:
console.log( 'Ops/sec: %d ops', 1e6/elapsed );
console.log( 'Time per op: %d ms', elapsed/1e6*1000 );
