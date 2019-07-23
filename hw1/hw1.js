//Задание 1
const loop = (times = 0, callback = null) => {
	if (!callback || times === 0 || +times === NaN) {
		return;
	}
	while(times >= 0) {
		callback(times);
		times--;
	}
};

const showMessage = item => {
	console.log(item);
};

loop(5, showMessage);

//Задание 2

const calculateArea = (width, height) => {
	if (+width === NaN || +height === NaN) {
		console.log('Error: invalid input');
		return;
	}

	return {
		area: width*height,
		figure: 'Rectangle',
		input:`width: ${width}, height: ${height}`,

	};
}

console.log(calculateArea(10,10));

//Задание 3

class Human {
	constructor(name = 'John', age = 21, dateOfBirth = '10.09.1998'){
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}

	displayInfo() {
		return `Name: ${this.name},
		Age: ${this.age}, 
		Data of birth: ${this.dateOfBirth}`;
	}
}

class Employee extends Human {
	constructor(salary = 15000, department = 'Cleaner') {
		super();
		this.salary = salary;
		this.department = department;
	}

	displayInfo() {
		return `${super.displayInfo()},
		Salary: ${this.salary},
		Department: ${this.department}`;
	}
}

class Manager extends Employee {
	constructor(id = 0) {
		super();
		this.id = id;
		this.employees = [];
	}

	addEmployee(id, name, age, dateOfBirth, salary, department) {
		const newDev = new Developer(id, name, age, dateOfBirth, salary, department, manager)
		this.employees.push(newDev)
	}

	removeEmployee(dev) {
		if (this.employees.length !== 0) {
			this.employees.splice(this.employees.indexOf(dev),1);
		} else {
			console.log('Error: Developers list is empty.')
		}
	}
}

class Developer extends Employee {
	constructor(id = 0, manager) {
		super();
		this.id = id;
		this.manager = manager;
	}

	changeManager(newManager) {
		this.manager = newManager;
	}
}