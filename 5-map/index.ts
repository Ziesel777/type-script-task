interface Bucket {
	key: unknown,
	value: unknown,
}

interface MapData {
	[hash: string]: Bucket[],
}

class HashMap {
	private mapData: MapData = {};

	get data(){
		const data: Readonly<MapData> = this.mapData;
		return data;
	}

	private getHash(value: unknown):string {
		const stringValue = JSON.stringify(value);

		let hash = 0;
		if (stringValue.length === 0) {
			return hash.toString();
		}

		for (let i = 0; i < stringValue.length; i++) {
			const char = stringValue.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash &= hash; // Преобразует хэш в 32-битное целое число
		}

		return hash.toString();
	}

	set(key: unknown, value: unknown):void {
		const hash = this.getHash(key);
		if(!this.mapData[hash]) this.mapData[hash] = [];

		const bucketList = this.mapData[hash];
		const elementFind = bucketList.find(item=>item.key === key);

		if(elementFind){
			elementFind.key = key;
			elementFind.value = value;
		} else this.mapData[hash].push({ key, value });
	}
	get(key: unknown){
		const hash = this.getHash(key);
		const bucketList = this.mapData[hash];

		if(bucketList){
			const elementFind = bucketList.find(item=>item.key === key);
			return elementFind?.value;
		}
		else return;
	}
	delete(key: unknown){
		const hash = this.getHash(key);
		const bucketList = this.mapData[hash];
		if(!bucketList) return;

		const index = bucketList.findIndex(item=>item.key === key);
		const [ element ] = bucketList.splice(index, 1);
		if(!bucketList.length) delete this.mapData[hash];

		return element;
	}
	clear():void{
		this.mapData = {};
	}
}

const map = new HashMap();
let a = { a: 5 };

map.set('London', 23);
map.set(a, [1,2,3]);
map.set({ a: 5 }, [3,3,3]);
map.set({ a: 5 }, [3,2,1]);
console.log(map.data);

console.log(map.get('London'));
console.log(map.get('london'));
console.log(map.get(a));
console.log(map.get({ a: 5 }));

console.log(map.delete('London'));
console.log(map.delete(a));
console.log(map.delete('no-key'));
console.log(map.data);

map.clear();
console.log(map.data);