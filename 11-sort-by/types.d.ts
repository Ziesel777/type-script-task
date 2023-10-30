declare module 'sort-by' {
	export default function sortBy<T>(...args:  ReadonlyArray<string>): (a: T, b: T )=>number;
}