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

function difference<A, B>(a: A, b: B): IDifference<A, B> {
	let data: IDifference<A, B> = {} as IDifference<A, B>;

	for (let [key, value] of Object.entries(a as Record<string, unknown>)) {
		if (!(key in b)) data[key] = value;
	}

	return data;
}