import * as d3 from 'd3';
const getTicks = ( domain: number[], numberOfTicks: number ) => {
	let ticksPrep = d3.range(
		domain[ 0 ],
		domain[ 1 ],
		( domain[ 1 ] - domain[ 0 ] ) / ( numberOfTicks - 1 )
	);
	ticksPrep.push( domain[ 1 ] );
	const ticks = ticksPrep.map( ( tick ) => Math.round( tick ) );
	return ticks;
};

export default getTicks;
