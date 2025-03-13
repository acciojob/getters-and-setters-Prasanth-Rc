//complete this code
class Person {
	private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

	get name():string{
		return this._name;
	}

	set age(age:number){
		this._age=age;
	}

	get age(): number {
        return this._age;
    }
}

class Student extends Person {
	constructor(name: string, age: number) {
        super(name, age);
    }

	study(): void {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
	constructor(name: string, age: number) {
        super(name, age);
    }

	teach(): void {
        console.log(`${this.name} is teaching`);
    }
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("John", 30);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("John", 30);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
