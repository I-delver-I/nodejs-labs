// Import t1 from './1-task.js';
// import t2 from './2-task.js';
// import t3 from './3-task.js';
import t4 from './4-task.js';

// TASK 1
// console.log(t1.add(4)(6)());

// TASK 2
// console.log(t2.stringsAreAnagrams('hello', 'olleh'));

// TASK 3
// type Bag = {
// 	color: string;
// 	weightKg: number;
// };
//
// type Student = {
// 	age: number;
// 	subjects: string[];
// 	bag: Bag;
// };
//
// const student: Student = {
// 	age: 40,
// 	subjects: ['Math', 'Data science'],
// 	bag: {
// 		color: 'green',
// 		weightKg: 5,
// 	},
// };
//
// const clonedStudent: Student = t3.deepClone(student);
// console.log(JSON.stringify(student) === JSON.stringify(clonedStudent));

// TASK 4
function add(...numbers: number[]): number {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

const cachedAdd = t4.cacheWrapper(add);
const functionsCountToCall = 102;
cachedAdd(2, 3, 0);

for (let i = 0; i < functionsCountToCall; i++) {
  cachedAdd(2, 3, i);
}

cachedAdd(2, 3, 66);
