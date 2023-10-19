interface IA {
	a: number;
	b: string;
}

interface IB {
	a: number;
	c: boolean;
}

let objA: IA = { a: 5, b: '' };
let objB: IB = { a: 10, c: true };

type IDifference<A, B> = Pick<A, Exclude<keyof A, keyof B>>;

let resDef: IDifference<IA, IB> = difference(objA, objB);

function difference<A extends object, B extends object>(a: A, b: B): IDifference<A, B> {
	const data: IDifference<A, B> = {} as IDifference<A, B>;

	for (let [key, value] of Object.entries(a)) {
		if (!(key in b)) data[key as Exclude<keyof A, keyof B>] = value;
	}

	return data;
}