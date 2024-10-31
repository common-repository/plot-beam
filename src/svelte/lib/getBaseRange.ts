const getBaseRange = ( numberArr: number[][] ) => {
	const flatArray = numberArr.flat();
	const min = Math.min( ...flatArray );
	const max = Math.max( ...flatArray );

	return [ min, max ];
};

export default getBaseRange;
