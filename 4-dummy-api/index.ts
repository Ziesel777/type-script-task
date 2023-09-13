enum Gender {
	male = 'male',
	female = 'female',
}
enum BloodGroup {
	Om = 'O-',
	Op = 'O+',
	Am = 'A-',
	Ap = 'A+',
	Bm = 'B-',
	Bp = 'B+',
	ABm = 'AB-',
	ABp = 'AB+',
}
enum EyeColor {
	Green = 'Green',
	Brown = 'Brown',
	Gray = 'Gray',
	Amber = 'Amber',
	Blue = 'Blue',
}
enum HairColor {
	Black = 'Black',
	Blond = 'Blond',
	Brown = 'Brown',
	Chestnut = 'Chestnut',
	Auburn = 'Auburn',
}
enum HairType {
	Strands = 'Strands',
	Curly = 'Curly',
	VeryCurly = 'Very curly',
	Straight = 'Straight',
	Wavy = 'Wavy',
}
enum State {
	DC = 'DC',
	KY = 'KY',
	CA = 'CA',
	CT = 'CT',
	VT = 'VT',
	AZ = 'AZ',
	TN = 'TN',
	CO = 'CO',
	MA = 'MA',
	AR = 'AR',
	AL = 'AL',
	GA = 'GA',
	AK = 'AK',
}

enum cardType {
	maestro = 'maestro',
	mastercard = 'mastercard',
	jcb = 'jcb',
	visaElectron = 'visa-electron',
	americanexpress = 'americanexpress',
	dinersClubCarteBlanche = 'diners-club-carte-blanche',
	bankcard = 'bankcard',
	instapayment = 'instapayment',
	switch = 'switch',
	dinersClubEnroute = 'diners-club-enroute',
	solo = 'solo',
}

enum Currency {
	Peso = 'Peso',
	Ruble = 'Ruble',
	YuanRenminbi = 'Yuan Renminbi',
	Euro = 'Euro',
	Rupiah = 'Rupiah',
	Ringgit = 'Ringgit',
	Rial = 'Rial',
	Hryvnia = 'Hryvnia',
	Dollar = 'Dollar',
	Rupee = 'Rupee',
	Koruna = 'Koruna',
	Real = 'Real',
	Yen = 'Yen',
	Zloty = 'Zloty',
}

enum Department {
	Marketing = 'Marketing',
	Services = 'Services',
	BusinessDevelopment = 'Business Development',
	Support = 'Support',
	Accounting = 'Accounting',
	ProductManagement = 'Product Management',
	HumanResources = 'Human Resources',
	ResearchDevelopment = 'Research and Development',
	Sales = 'Sales',
	Legal = 'Legal',
	Engineering = 'Engineering',
}

interface Hair {
	color: HairColor,
	type: HairType,
}
interface CoordPoint {
	lat: number,
	lng: number,
}
interface AddressInfo{
	address: string,
	city: string,
	coordinates: CoordPoint,
	postalCode: string,
	state: State,
}
interface BankInfo {
	cardExpire: string,
	cardNumber: string,
	cardType: cardType,
	currency: Currency,
	iban: string,
}
interface CompanyInfo {
	address: AddressInfo,
	department: Department,
	name: string,
	title: string,
}

interface User {
	id: number,
	firstName: string,
	lastName: string,
	maidenName: string,
	age: number,
	gender: Gender,
	email: string,
	phone: string,
	username: string,
	password: string,
	birthDate: string,
	image: string,
	bloodGroup: BloodGroup,
	height: number,
	weight: number,
	eyeColor: EyeColor,
	hair: Hair,
	domain: string,
	ip: string,
	address: AddressInfo,
	macAddress: string,
	university: string,
	bank: BankInfo,
	company: CompanyInfo,
	ein: string,
	ssn: string,
	userAgent: string,
}

interface resUserDataSuccess {
	users: User[],
	limit: number,
	skip: number,
	total: number,
}

async function getUsers(): Promise<resUserDataSuccess | unknown> {
	try {
		const res = await fetch('https://dummyjson.com/users');
		const data: resUserDataSuccess = await res.json();
		return data;
	} catch (error) {
		if(error instanceof Error) console.error(error.message);
	}
}