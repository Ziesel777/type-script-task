type TObject = {
	[key:string]: number|string|TObject,
};

declare module 'sort-by' {
	export default function sortBy(...args: string[]): (
			obj1: TObject,
			obj2: TObject
		)=>number;
}