// import * as t1 from './1-task';
// import * as t2 from './2-task';
import * as t3 from './3-task';

// TASK 1
// @ts-ignore
// console.log(t1.add(4)(6)());

// TASK 2
// console.log(t2.stringsAreAnagrams('hello', 'olleh'));

// TASK 3
type Bag = {
	color: string;
	weightKg: number;
};

type Student = {
	age: number;
	subjects: string[];
	bag: Bag;
};

const student: Student = {
	age: 40,
	subjects: ['Math', 'Data science'],
	bag: {
		color: 'green',
		weightKg: 5,
	},
};

const clonedStudent: Student = t3.deepClone(student);
console.log(JSON.stringify(student) === JSON.stringify(clonedStudent));
