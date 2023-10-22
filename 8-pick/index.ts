const user = {
	name: 'Vasiliy',
	age: 8,
	skills: ['ts', 'js']
}

const res = pickObjectKeys(user, ['name', 'skills']);

function pickObjectKeys<T, K extends keyof T>(obj: T, fields: K[]): { [key in typeof fields[number]]: T[key] }{
	const newObj = {} as { [key in typeof fields[number]]: T[key] };
	for(let key of fields){
		newObj[key] = obj[key];
	}

	return newObj;
}