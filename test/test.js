'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	unzip = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-unzip', function tests() {

	it( 'should export a function', function test() {
		expect( unzip ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			true,
			NaN,
			null,
			undefined,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				unzip( value );
			};
		}
	});

	it( 'should throw an error if not provided a zipped array', function test() {
		var values = [
			'5',
			5,
			true,
			NaN,
			null,
			undefined,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				unzip( [ value ] );
			};
		}
	});

	it( 'should unzip a zipped array', function test() {
		var data, expected, actual;

		data = [
			[1,'a',3],
			[2,'b',4]
		];

		expected = [
			[1,2],
			['a','b'],
			[3,4]
		];

		actual = unzip( data);

		assert.deepEqual( actual, expected );
	});

});
