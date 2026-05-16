// Q no 1-Use .map() Method Given the array:
// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "John", age: 30 }
// ];
// Create a new array that contains only the names of the users.

const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 },
  { name: "John", age: 30 },
];
const names = users.map((user) => user.name);
console.log(names);

// Q no 2-Use .filter() Method Given the array:
// const products = [
//   { name: "Book", price: 100 },
//   { name: "Pen", price: 20 },
//   { name: "Bag", price: 300 }
// ];
// Create a new array that only includes products with price less than 150.

const products = [
  { name: "Book", price: 100 },
  { name: "Pen", price: 20 },
  { name: "Bag", price: 300 },
];
const affordable = products.filter((product) => product.price < 150);
console.log(affordable);

// Q no 3-Use .reduce() Method Given the array:
// const orders = [
//   { item: "Apple", quantity: 2 },
//   { item: "Banana", quantity: 5 },
//   { item: "Orange", quantity: 3 }
// ];
// Calculate the total quantity of all items using the `.reduce()` method.

const orders = [
  { item: "Apple", quantity: 2 },
  { item: "Banana", quantity: 5 },
  { item: "Orange", quantity: 3 },
];
const totalQuantity = orders.reduce(
  (total, order) => total + order.quantity,0
);
console.log(totalQuantity);

// Q no 4-Demonstrate Array Mutability with .sort()
// Given:
// const numbers = [4, 2, 1, 3];
// * Sort the array using `.sort()` and print the original array to show it has changed.
// * Sort it again **without modifying** the original array.

const numbers = [4, 2, 1, 3];
numbers.sort();
console.log("After sort (mutated):", numbers);
const original = [4, 2, 1, 3];
const sortedCopy = [...original].sort();
console.log("Original array (unchanged):", original);
console.log("Sorted copy:", sortedCopy);

// mutated
const numbers1 = [4, 2, 1, 3];

numbers1.sort();
console.log(numbers1);

// immutated
const OrgNum = [4, 2, 1, 3];

const sortedarr = OrgNum.sort();
console.log(sortedarr);
console.log(`Original array:`,OrgNum);

// Q no 5-Use the Ternary Operator
// Check if a number is even or odd using the ternary operator. If the number is 7, it should print "Odd".

const num1 = parseFloat(prompt("Enter the number:"));
const result = num1 % 2 === 0 ? "Even" : "Odd";
console.log(`The num is: ${result}`);

// Q no 6-Use Optional Chaining
// Given the object:
// const user = {
//   profile: {
//     name: "Ali"
//   }
// };
// Safely access:
// * `user.profile.name`
// * `user.address.city` (should not throw an error)

// optional chaining ? ka matlab ha agar ya element (profile , address) agae object ha to hi iskay agay (name, city) ko access karo warna isay undefined samjh lo.
const user1 = {
  profile: {
    name: "Ali",
  },
};

console.log(user1.profile?.name);
console.log(user1.address?.city);

// Q no 7-Use Short-Circuiting with Logical Operators
// * Use `||` to assign a default value if a variable is undefined.
// * Use `&&` to print a message only if a condition is true.
// Using || to assign a default value

let inputName;
let name = inputName || "Guest";
console.log("Hello,", name);
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");

let username = "";
let name1 = console.log(username || "guest");

let login = true;
console.log(login && "Welcome back");

// Q no 8-Write a Callback Function
// Create a function `greetUser(name, callback)` that prints a greeting and then calls the callback function which prints another message.

function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}
function afterGreet() {
  console.log("Hope you're having a great day!");
}
greetUser("Ali", afterGreet);

// Q no 9-Create a Function Returning a Promise
// Write a function `getData()` that returns a promise which resolves after 2 seconds with the message: "Data received".

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}
getData().then((message) => {
  console.log(message);
});

const mul = () => {
  let a = 222;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = parseFloat(prompt("Enter a number:"));
      if (a<5) {
        resolve(console.log(a*2));
      } else {
        reject(console.log(a*3));
      }
    }, 2000);
  });
};

mul().then((message) => {
  console.log(message);
});

mul().catch((message) =>{
  console.log(message);
})

// Q no 10-Use Async/Await
// Write an `async` function `fetchAndPrint()` that calls `getData()` and prints the result.
// Assuming getData is already defined like this:

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}
async function fetchAndPrint() {
  const result = await getData();
  console.log(result);
}
fetchAndPrint();

const getdat = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data recived!");
    }, 2000);
  });
};

let fetchAndPrin = async () => {
  const response = await getdata1();
  console.log(response);
};

fetchAndPrin();
