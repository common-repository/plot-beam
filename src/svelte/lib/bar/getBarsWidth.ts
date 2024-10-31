const getBarsWidth = (
	group:string[],
	subGroup: string[], 
	nodesData: number[][],
	innerWidth: number
): number => {
	let barWidth;
	//check if it is a grouped bar
	if (subGroup.length>1) {
		barWidth = 31*subGroup.length
	} else {
	 	barWidth = 40
	}
	const barsWidth = barWidth * group.length;
	
	if ( innerWidth < barsWidth ) 
    return barsWidth;
  
	return innerWidth;
};

export default getBarsWidth;
