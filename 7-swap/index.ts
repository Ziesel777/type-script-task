const obj: Record<string, number> = {
	a: 1,
	b: 2,
	c: 3,
}

let swapObj = swapKeyValue(obj);
console.log(swapObj);

function swapKeyValue<T extends Record<string, number>>(obj: T): Record<string, keyof T> {
	const swapObj: Record<string, keyof T> = {};

	for(const [key, value] of Object.entries(obj)){
		swapObj[value] = key;
	}

	return swapObj;
}