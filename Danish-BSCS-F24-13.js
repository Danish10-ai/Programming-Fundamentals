/* 1. Write a program that takes a person's name and age as variables and prints the following using a template string:

Hello, my name is Alex and I am 25 years old.*/

const name = prompt("Enter your name:");
const age = parseInt(prompt("Enter your age:"));

console.log(`Hello, my name is ${name} and i am ${age} years old.`);

/* 2. Convert the following function into an arrow function:
function square(num) {
return num * num;
} */

const square = (num) => {
return num * num;
}

square(4);

// 3. Write an arrow function that takes two numbers and returns their sum.

const sum = (a, b) => {
    return a+b; 
}

sum(parseFloat(prompt("Enter a number 1:")), parseFloat(prompt("Enter a number 2:")));

/* 4. Write a function greet that accepts a name and returns "Hello, [name]!".

If no name is given, it should return "Hello, Guest!". */

const greet = (name) =>{
    if(!name){
        name = "Guest";
    }
    return `Hello, ${name}!`;
}

greet(prompt("Enter your name:"));

// 5. Use array destructuring to assign the first and second items of this array to variables:
// const colors = ['red', 'green', 'blue'];

const colors = ['red', 'green', 'blue'];

const [color1, color2] = colors;

console.log(`The first item in array: ${color1}.`);
console.log(`The second item in array: ${color2}.`);

// 6. Use object destructuring to extract the name and age from this object:
//const person = { name: 'Sara', age: 22, city: 'Lahore' };

const person = { 
    Name: 'Sara',
    Age: 22, 
    City: 'Lahore' 
};

const {Name ,Age} = person;

console.log(`The name of the person in the object: ${Name}`);
console.log(`The age of the person in the object: ${Age}`);

// 7. Write a function that accepts any number of numbers and returns their sum.

//(Hint: Use the rest operator ...)

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll(1, 2, 3));         
console.log(sumAll(10, 20, 30, 40));  
console.log(sumAll());   

/* 8. Use the spread operator to merge these two arrays into one new array:
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'mango']; */

const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'mango'];

const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); 

/* 9. Use the map method to double each number in the array:
const nums = [1, 2, 3, 4]; */

const nums = [1, 2, 3, 4];

const doubled = nums.map(num => num * 2);
console.log(doubled); 

/* 10. Use the filter method to get only even numbers from this array:
const numbers = [10, 15, 20, 25, 30]; */

const numbers = [10, 15, 20, 25, 30];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

/* 11. Use the reduce method to find the sum of all numbers in the array:
const values = [5, 10, 15]; */

const values = [5, 10, 15];

const total = values.reduce((sum, value) => sum + value, 0);
console.log(total);


// 9:
const nums1 = [1, 2, 3, 4];

const doubled1 = nums1.map(val => val * 2);

console.log(doubled1);

// 10:
const numbers1 = [10, 15, 20, 25, 30]; 

const evennum = numbers1.filter(val => val % 2 === 0)

console.log(evennum);

// 11:
const values1 = [5, 10, 15]; 

const sum1 = values1.reduce((accumulator,num) => accumulator+num,0)

console.log(sum1);


