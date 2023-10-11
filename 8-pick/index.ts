const user = {
	name: 'Vasiliy',
	age: 8,
	skills: ['ts', 'js']
}

const res = pickObjectKeys(user, ['name', 'skills']);

function pickObjectKeys<T, K extends keyof T>(obj: T, fields: K[]): Record<string, unknown>{
	let newObj: Record<string, unknown> = {};
	for(let key of fields){
		newObj[key as string] = obj[key];
	}

	return newObj;
}