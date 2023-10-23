class Person {
	@allowFunc((a: number)=>(a>0))
	age: number = 30;
}

let person = new Person();
console.log(person.age);

person.age = -10;
console.log(person.age);

person.age = 40;
console.log(person.age);


function allowFunc(cb: (a:number)=>boolean){
	return (
		target: Object,
		propertyKey: string | symbol
	) => {
		let value: number;

		Object.defineProperty(target, propertyKey, {
			set(newValue: number){
				if(cb(newValue)) value = newValue;
				else console.error(`Не могу установить значение ${newValue}`);
			},
			get(){
				return value;
			}
		})
	}
}