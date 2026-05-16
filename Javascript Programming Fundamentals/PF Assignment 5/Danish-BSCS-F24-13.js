// 1. Write a program that displays all numbers from 1 to 100, using a for loop.

function displaynumbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

displaynumbers();

// 2. Write a program that displays even numbers 1 to 50 and odd numbers 51 to 100 using for loop.

function displayevenandodd() {
  for (let i = 2; i <= 50; i += 2) {
    console.log("Even num:", i);
  }
  for (i = 51; i <= 100; i += 2) {
    console.log("Odd num:", i);
  }
}

displayevenandodd();

// 3. Create a program that prompts the user for a number and displays the table of that number using a loop.

function displaytable(num) {
  for (let i = 1; i <= 10; i++) {
    let a = num * i;
    console.log(a);
  }
}

const table = displaytable(parseInt(prompt("Enter a number.")));

// 4. Create a program that displays the table of all numbers from 1 to 10.

function tableof1to10() {
  console.log("Table of 1");
  for (let i = 1; i <= 10; i++) {
    const a = 1 * i;
    console.log(a);
  }
  console.log("Table of 2");
  for (let i = 1; i <= 10; i++) {
    const a = 2 * i;
    console.log(a);
  }
  console.log("Table of 3");
  for (let i = 1; i <= 10; i++) {
    const a = 3 * i;
    console.log(a);
  }
  console.log("Table of 4");
  for (let i = 1; i <= 10; i++) {
    const a = 4 * i;
    console.log(a);
  }
  console.log("Table of 5");
  for (let i = 1; i <= 10; i++) {
    const a = 5 * i;
    console.log(a);
  }
  console.log("Table of 6");
  for (let i = 1; i <= 10; i++) {
    const a = 6 * i;
    console.log(a);
  }
  console.log("Table of 7");
  for (let i = 1; i <= 10; i++) {
    const a = 7 * i;
    console.log(a);
  }
  console.log("Table of 8");
  for (let i = 1; i <= 10; i++) {
    const a = 8 * i;
    console.log(a);
  }
  console.log("Table of 9");
  for (let i = 1; i <= 10; i++) {
    const a = 9 * i;
    console.log(a);
  }
  console.log("Table of 10");
  for (let i = 1; i <= 10; i++) {
    const a = 10 * i;
    console.log(a);
  }
}

tableof1to10();

// my logic

for (i=1 ; i<=10; i++){
  for(j=1; j<=10; j++){
    let a = i * j;
    console.log(a);
  }
}

// 5. Write a program that calculates and displays the values of the power of a number entered by the user raised to an exponent also entered by the user.

function powerofnumber(base, exponenet) {
  let result = 1;
  for (let i = 1; i <= exponenet; i++) {
    result *= base;
  }
  return result;
}

powerofnumber(
  parseInt(prompt("Enter the base of number.")),
  parseInt(prompt("Enter the exponent of number."))
);

// 6. Write a program that prompts the user for two numbers A and B and displays all numbers between A and B.

function displayallnum(a,b){
  for(let i=a+1; i<b; i++){
    console.log(i);
  }
}

displayallnum(parseInt(prompt("Enter the value of a:")),parseInt(prompt("Enter the value of b:"))); 

// 7. Write a program that asks the user for a number N and displays the sum of all numbers from 1 to N.

function sumofallnum (n){
  sum = 0;
  for(let i = 1; i<=n; i++){
    sum += i;
  }
  return (sum);
}

sumofallnum(parseInt(prompt("Enter a number:")));

// 8. One interesting application of computers is drawing graphs and bar charts (sometimes called “histograms”). Write a program that reads five numbers (each between 1 and 30). For each number read, your program should print a line containing that number of adjacent asterisks. For example, if your program reads the number seven, it should print

function drawHistogram(num1, num2, num3, num4, num5) {
  if (num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0 || num5 < 0) {
      console.log("Please enter positive numbers only.");
  } else if (num1 > 30 || num2 > 30 || num3 > 30 || num4 > 30 || num5 > 30) {
      console.log("Please enter numbers less than 30.");
  } else {
      let stars1 = "";
      for (let i = 0; i <= num1; i++) {
          stars1 = stars1 + "*";
      }
      console.log(stars1);

      let stars2 = "";
      for (let i = 0; i <= num2; i++) {
          stars2 = stars2 + "*";
      }
      console.log(stars2); 

      let stars3 = "";
      for (let i = 0; i <= num3; i++) {
          stars3 = stars3 + "*";
      }
      console.log(stars3);

      let stars4 = "";
      for (let i = 0; i <= num4; i++) {
          stars4 = stars4 + "*";
      }
      console.log(stars4);

      let stars5 = "";
      for (let i = 0; i <= num5; i++) {
          stars5 = stars5 + "*";
      }
      console.log(stars5);
  }
}

drawHistogram(7, 3, 10, 4, 9);









