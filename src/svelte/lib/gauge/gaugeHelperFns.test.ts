import { it, expect, describe } from 'vitest';
import {
	getSegmentColor,
	getSegmentMarks,
	getDisplayValue,
	getSegmentSlices,
	getDisplayMarks,
} from './gaugeHelperFns';
import { notitiaSlices } from '../notitiaTemplate';

const testParams = {
	notitiaColors: [ '#8e477d', '#7db8da', '#f93f17', '#f8981d', '#276e27' ],
	segmentInfo: {
		limits: [
			{
				value: 1270900,
				gradient: false,
			},
			{
				value: 1573100,
				gradient: false,
			},
			{
				value: 1876000,
				gradient: false,
			},
			{
				value: 2088600,
				gradient: false,
			},
		],
		paletteColors: [
			{
				color: '#8e477d',
				index: 7,
			},
			{
				color: '#7db8da',
				index: 5,
			},
			{
				color: '#f93f17',
				index: 10,
			},
			{
				color: '#f8981d',
				index: 9,
			},
			{
				color: '#276e27',
				index: 3,
			},
		],
	},
	min: 800000,
	max: 2500000,
};
describe( 'getSegmentColor()', () => {
	it( 'is a function that returns an array', () => {
		//arrange
		const notitiaColors = testParams.notitiaColors;
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'qlik';

		const returnResult = Array;

		//action
		const segmentColors = getSegmentColor(
			notitiaColors,
			styleChoice,
			segmentInfo
		);

		//assert
		expect( segmentColors ).toBeInstanceOf( returnResult );
	} );

	it( 'should return notitiaColor itself when styleChoice is notitia', () => {
		const notitiaColors = testParams.notitiaColors;
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'notitia';

		const expectReturn = [
			'#8e477d',
			'#7db8da',
			'#f93f17',
			'#f8981d',
			'#276e27',
		];

		const segmentColors = getSegmentColor(
			notitiaColors,
			styleChoice,
			segmentInfo
		);

		expect( segmentColors ).toStrictEqual( expectReturn );
	} );

	it( 'should return color set coming from qlik data when styleChoice is qlik', () => {
		const notitiaColors = testParams.notitiaColors;
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'notitia';

		const expectReturn = [
			'#8e477d',
			'#7db8da',
			'#f93f17',
			'#f8981d',
			'#276e27',
		];

		const segmentColors = getSegmentColor(
			notitiaColors,
			styleChoice,
			segmentInfo
		);

		expect( segmentColors ).toStrictEqual( expectReturn );
	} );

	it( 'should also return notitia color if styleChoice is notitia', () => {
		const notitiaColors = testParams.notitiaColors;
		const styleChoice = 'notitia';
		const segmentInfo = testParams.segmentInfo;
		const expectReturn = [
			'#8e477d',
			'#7db8da',
			'#f93f17',
			'#f8981d',
			'#276e27',
		];

		const segmentColors = getSegmentColor(
			notitiaColors,
			styleChoice,
			segmentInfo
		);

		expect( segmentColors ).toStrictEqual( expectReturn );
	} );
} );

describe( 'getSegmentMarks()', () => {
	it( 'is a function that returns an array', () => {
		//arrange
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'qlik';
		const min = testParams.min;
		const max = testParams.max;

		const returnResult = Array;

		//action
		const segmentMarks = getSegmentMarks(
			styleChoice,
			min,
			max,
			segmentInfo
		);

		//assert
		expect( segmentMarks ).toBeInstanceOf( returnResult );
	} );

	it( "should return calculated segmentMarks with 5 equal segments if segmentInfo isn't provided", () => {
		//arrange
		const styleChoice = 'notitia';
		const min = testParams.min;
		const max = testParams.max;

		const returnResult = [
			800000, 1140000, 1480000, 1820000, 2160000, 2500000,
		];

		//action
		const segmentMarks = getSegmentMarks( styleChoice, min, max );

		//assert
		expect( segmentMarks ).toStrictEqual( returnResult );
	} );

	it( 'should return segments coming from qlik data when styleChoice is qlik', () => {
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'qlik';
		const min = testParams.min;
		const max = testParams.max;

		const expectReturn = [
			800000, 1270900, 1573100, 1876000, 2088600, 2500000,
		];

		const segmentMarks = getSegmentMarks(
			styleChoice,
			min,
			max,
			segmentInfo
		);

		expect( segmentMarks ).toStrictEqual( expectReturn );
	} );
} );

describe( 'getDisplayValue()', () => {
	it( 'is a function that returns an string', () => {
		//arrange
		const value = 10000000;
		const label = 'value';
		const valueOptions = 'thousands';
		const decimal = 0;
		const min = testParams.min;
		const max = testParams.max;

		const expectReturn = 'string';

		//action
		const displayValue = getDisplayValue(
			value,
			label,
			valueOptions,
			decimal,
			min,
			max
		);

		//assert
		expect( typeof displayValue ).toBe( expectReturn );
	} );

	it( '10000000 should return 10000k if displayed as value and round by thousands with 2 decimal', () => {
		//arrange
		const value = 10000000;
		const label = 'value';
		const valueOptions = 'thousands';
		const decimal = 2;
		const min = testParams.min;
		const max = testParams.max;

		const expectReturn = '10000.00K';

		//action
		const displayValue = getDisplayValue(
			value,
			label,
			valueOptions,
			decimal,
			min,
			max
		);

		//assert
		expect( displayValue ).toBe( expectReturn );
	} );

	it( '10000000 should return correct percentage if displayed as percentage of giving range rounded by giving decimal', () => {
		//arrange
		const value = 1000000;
		const label = 'percentage';
		const valueOptions = 'thousands';
		const decimal = 2;
		const min = testParams.min;
		const max = testParams.max;

		const expectReturn = '11.76%';

		//action
		const displayValue = getDisplayValue(
			value,
			label,
			valueOptions,
			decimal,
			min,
			max
		);

		//assert
		expect( displayValue ).toBe( expectReturn );
	} );
} );

describe( 'getSegmentSlices()', () => {
	it( 'is a function that returns an array', () => {
		//arrange
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'qlik';
		const segmentMarks = [
			800000, 1270900, 1573100, 1876000, 2088600, 2500000,
		];
		const returnResult = Array;

		//action
		const segmentColors = getSegmentSlices(
			styleChoice,
			notitiaSlices,
			segmentInfo,
			segmentMarks
		);

		//assert
		expect( segmentColors ).toBeInstanceOf( returnResult );
	} );

	it( 'should return notitiaColor itself when styleChoice is notitia', () => {
		//arrange
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'notitia';
		const returnResult = notitiaSlices;
		const segmentMarks = [
			800000, 1270900, 1573100, 1876000, 2088600, 2500000,
		];

		//action
		const segmentColors = getSegmentSlices(
			styleChoice,
			notitiaSlices,
			segmentInfo,
			segmentMarks
		);

		//assert
		expect( segmentColors ).toStrictEqual( returnResult );
	} );

	it( 'should return notitiaColor itself when styleChoice is notitia with no segmentInfo provided', () => {
		//arrange
		const styleChoice = 'notitia';
		const returnResult = notitiaSlices;
		const segmentMarks = [
			800000, 1270900, 1573100, 1876000, 2088600, 2500000,
		];
		//action
		const segmentInfo = testParams.segmentInfo;
		const segmentColors = getSegmentSlices(
			styleChoice,
			notitiaSlices,
			segmentInfo,
			segmentMarks
		);

		//assert
		expect( segmentColors ).toStrictEqual( returnResult );
	} );

	it( 'should return one segment slice when styleChoice is qlik but no segmentInfo provided', () => {
		//arrange
		const segmentInfo = testParams.segmentInfo;
		const styleChoice = 'qlik';
		const returnResult = [ 470900, 302200, 302900, 212600, 411400 ];
		const segmentMarks = [
			800000, 1270900, 1573100, 1876000, 2088600, 2500000,
		];

		//action
		const segmentSlices = getSegmentSlices(
			styleChoice,
			notitiaSlices,
			segmentInfo,
			segmentMarks
		);

		//assert
		expect( segmentSlices ).toStrictEqual( returnResult );
	} );
} );

describe( 'getDisplayMarks()', () => {
	it( 'is a function returning array', () => {
		//arrange
		const segmentMarks = [ 800000, 1369500, 1930000, 2500000 ];
		const label = 'value';
		const valueOptions = 'millions';
		const decimal = 2;
		const min = testParams.min;
		const max = testParams.max;

		const expectResult = Array;
		//action
		const displayMarks = getDisplayMarks(
			segmentMarks,
			label,
			valueOptions,
			decimal,
			min,
			max
		);

		//assert
		expect( displayMarks ).toBeInstanceOf( expectResult );
	} );

	it( 'is a function returning array', () => {
		//arrange
		const segmentMarks = [ 800000, 1369500, 1930000, 2500000 ];
		const label = 'value';
		const valueOptions = 'millions';
		const decimal = 2;
		const min = testParams.min;
		const max = testParams.max;

		const expectResult = [ '0.80M', '1.37M', '1.93M', '2.50M' ];
		//action
		const displayMarks = getDisplayMarks(
			segmentMarks,
			label,
			valueOptions,
			decimal,
			min,
			max
		);

		//assert
		expect( displayMarks ).toStrictEqual( expectResult );
	} );
} );
