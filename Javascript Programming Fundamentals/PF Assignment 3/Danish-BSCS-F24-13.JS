// 1. Write a program that displays the number 1 through 10 using a while loop.

let num1 = 1;

while (num1 <= 10) {
  console.log(num1);
  num1++;
}

// 2. Write a program that prints all even numbers from 1 to 10 using a while loop and an if statement inside the loop to check if the number is even or not

let num2 = 1;

while (num2 <= 10) {
  if (num2 % 2 === 0) {
    console.log(num2 + " is an even number.");
  }
  num2++;
}

// 3. Write a program that prints all even numbers from 1 to 100 using while loop without using any if statement.

let num3 = 2;

while (num3 <= 100) {
  console.log(num3);
  num3 += 2;
}

// 4. Write a program that reads numbers from the user until a negative number is entered, and prints the sum of the positive numbers.

let num4 = parseFloat(prompt("Enter a number or (negitive) number to stop."));;
let sum1 = 0;

while (num4 >= 0) {
  sum1 += num4;
  num4 = parseFloat(prompt("Enter a number or (negitive) number to stop."));
}
console.log("Sum of positive numbers: ", sum1);

// 5. Write a program that calculates and displays the sum of even numbers from 1 to 100 using a repeating loop.

let sum2 = 0;
let num5 = 2;

while (num5 <= 100) {
  sum2 += num5;
  num5 += 2;
}
console.log("Sum of even numbers: ", sum2);

// 6. Write a program that reads numbers from the user until zero is entered, and displays the average of the numbers entered.

let sum3 = 0;
let count1 = 0;
let num6 = parseFloat(prompt("Enter a number or (zero) to stop."));

while (num6 !== 0) {
  sum3 += num6;
  count1++;
  num6 = parseFloat(prompt("Enter a number or (zero) to stop."));
}
if (count1 > 0) {
  console.log("Average: ", sum3 / count1);
} else {
  comsole.log("No number is entered.");
}

// 7. Write a program that prompts the user for a list of numbers, until the user types the number zero, and displays the largest and smallest numbers in the list.

let num7 = parseFloat(prompt("Enter a number or (zero)  to stop. "));
let max = num7;
let min = num7;

while (num7 !== 0) {
  if (num7 < min) min = num7;
  if (num7 > max) max = num7;
  num7 = parseFloat(prompt("Enter a number or (zero)  to stop. "));
}
console.log("Smallest number is :", min);
console.log("Largest number is :", max);

// 8. A class of ten students took a quiz. The marks (0 to 100) for this quiz are available to you. Determine the class average on the quiz.

let summarks = 0;
let countmarks = 10;
i2 = 0;

while (i2 < countmarks) {
  let marks = parseInt(prompt("Enter students marks from (0 to 100)."));
  if (marks > 0 && marks <= 100) {
    summarks += marks;
    i2++;
  } else {
    console.log("Invliad score! please enter a number between 0 and 100.");
  }
}
console.log("Class average: ", summarks / countmarks);

// 9. Develop a class averaging program that will process an arbitrary number of marks each time the program is run.(Sentinel Value)

let totalmarks = 0;
let totalstudents = 0;
let mark2 = parseInt(prompt("Enter students marks from (0 to 100) or -1 to stop."));

while (mark2 !== -1) {
  totalmarks += mark2;
  totalstudents++;
  mark2 = parseInt(prompt("Enter students marks from (0 to 100) or -1 to stop."));
  if (totalstudents > 0) {
    console.log("Class average is: ", totalmarks / totalstudents);
  } else {
    console.log("no marks entered.");
  }
}

/* 10. You have been asked to write a program to summarize the results of 10 students. Next to each student name a 1 is written if the student passed the exam and a 2 if the student failed. Your program should analyze the results of the exam as follows:
	a. Input each test result (i.e., a 1 or a 2). Display the prompting message “Enter result” each time the program requests another test result.
	b. Count the number of test results of each type.
	c. Display a summary of the test results indicating the number of students who passed and the number who failed.
	d. If more than eight students passed the exam, print the message “Bonus to instructor!” */

let passCount = 0;
let failCount = 0;
let i3 = 0;

while (i3 < 10) {
  let result = parseInt(prompt("Enter result (1 for pass, 2 for fail):"));
  if (result === 1) {
    passCount++;
  } else if (result === 2) {
    failCount++;
  }
  i3++;
}
console.log("Students passed:", passCount);
console.log("Students failed:", failCount);
if (passCount > 8) {
  console.log("Bonus to instructor!");
}

/* 11. Drivers are concerned with the mileage obtained by their automobiles. One driver has kept track of several tankfuls of gasoline by recording miles driven and gallons used for each tankful. Develop a program that will input the miles driven and gallons used for each tankful. The program should calculate and display the miles per gallon obtained for each tankful. After processing all input information, the program should calculate and print the combined miles per gallon obtained for all tankfuls. Here is a sample input/output dialog:

	Enter the gallons used (-1 to end): 12.8
	Enter the miles driven: 287
	The miles / gallon for this tank was 22.421875
	
	Enter the gallons used (-1 to end): 10.3
	Enter the miles driven: 200
	The miles / gallon for this tank was 19.417475
	
	Enter the gallons used (-1 to end): 5
	Enter the miles driven: 120
	The miles / gallon for this tank was 24.000000
	
	Enter the gallons used (-1 to end): -1
	The overall average miles/gallon was 21.601423 */

let totalMile = 0,
  totalGallon = 0;
let gallon = parseFloat(prompt("Enter the gallons used (-1 to end):"));
while (gallon !== -1) {
  let mile = parseFloat(prompt("Enter the miles driven:"));
  console.log("The miles/gallon for this tank was", miles / gallons);
  totalMile += mile;
  totalGallon += gallon;
  gallon = parseFloat(prompt("Enter the gallons used (-1 to end):"));
}
if (totalGallon > 0) {
  console.log("The overall average miles/gallon was", totalMile / totalGallon);
}

/* 12. One large chemical company pays its salespeople on a commission basis. The salespeople receive $200 per week plus 9% of their gross sales for that week. For example, a salesperson who sells $5000 worth of chemicals in a week receives $200 plus 9% of
$5000, or a total of $650. Develop a program that will input each salesperson’s gross sales for last week and will calculate and display that salesperson's earnings. Process one salesperson's figures at a time. Here is a sample input/output dialog:

	Enter sales in dollars (-1 to end): 5000.00
	Salary is: $650.00
	
	Enter sales in dollars (-1 to end): 1234.56
	Salary is: $311.11
	
	Enter sales in dollars (-1 to end): 1088.89
	Salary is: $298.00
	
	Enter sales in dollars (-1 to end): -1 */

let totalMiles = 0,
  totalGallons = 0;
let gallons = parseFloat(prompt("Enter the gallons used (-1 to end):"));
while (gallons !== -1) {
  let miles = parseFloat(prompt("Enter the miles driven:"));
  console.log("The miles/gallon for this tank was", miles / gallons);
  totalMiles += miles;
  totalGallons += gallons;
  gallons = parseFloat(prompt("Enter the gallons used (-1 to end):"));
}
if (totalGallons > 0) {
  console.log(
    "The overall average miles/gallon was",
    totalMiles / totalGallons
  );
}

/* 13. The simple interest on a loan is calculated by the formula
	interest = principal * rate * days / 365;
The preceding formula assumes that rate is the annual interest rate, and therefore includes the division by 365 (days). Develop a program that will input principal, rate and days for several loans, and will calculate and display the simple interest for each loan, using the preceding formula.
Here is a sample input/output dialog:

	Enter loan principal (-1 to end): 1000.00
	Enter interest rate: .1
	Enter term of the loan in days: 365
	The interest charge is $100.00
	
	Enter loan principal (-1 to end): 1000.00
	Enter interest rate: .08375
	Enter term of the loan in days: 224
	The interest charge is $51.40
	
	Enter loan principal (-1 to end): 10000.00
	Enter interest rate: .09
	Enter term of the loan in days: 1460
	The interest charge is $3600.00
	
	Enter loan principal (-1 to end): -1 */

let principal = parseFloat(prompt("Enter loan principal (-1 to end):"));
while (principal !== -1) {
  let rate = parseFloat(prompt("Enter interest rate:"));
  let days = parseInt(prompt("Enter term of the loan in days:"));
  console.log(
    "The interest charge is $",
    ((principal * rate * days) / 365).toFixed(2)
  );
  principal = parseFloat(prompt("Enter loan principal (-1 to end):"));
}

/* 14. Develop a program that will determine the gross pay for each of several employees. The company pays “straight time” for the first 40 hours worked by each employee and pays “time-and-a-half” for all hours worked in excess of 40 hours. You’re given a list of the employees of the company, the number of hours each employee worked last week and the hourly rate of each employee. Your program should input this information for each employee, and should determine and display the employee's gross pay. 
Here is a sample input/output dialog:

	Enter # of hours worked (-1 to end): 39
	Enter hourly rate of the worker ($00.00): 10.00
	Salary is $390.00
	
	Enter # of hours worked (-1 to end): 40
	Enter hourly rate of the worker ($00.00): 10.00
	Salary is $400.00
	
	Enter # of hours worked (-1 to end): 41
	Enter hourly rate of the worker ($00.00): 10.00
	Salary is $415.00

	Enter # of hours worked (-1 to end): -1 */

let hours = parseFloat(prompt("Enter # of hours worked (-1 to end):"));
while (hours !== -1) {
  let rate = parseFloat(prompt("Enter hourly rate of the worker ($00.00):"));
  let salary =
    hours <= 40 ? hours * rate : 40 * rate + (hours - 40) * rate * 1.5;
  console.log("Salary is $", salary.toFixed(2));
  hours = parseFloat(prompt("Enter # of hours worked (-1 to end):"));
}

// 15. Write a program that utilizes looping to print the numbers from 1 to 10 side by side on the same line with three spaces between numbers.

let output = "";
let a = 1;

while (a <= 10) {
  output += a += "   ";
  a++;
}
console.log(output);

/* 16. Write a program that uses looping to print the following table of values.

	N 	10*N 	100*N 	1000*N
	1 	10 		100 	1000
	2 	20 		200 	2000
	3 	30 		300 	3000
	4 	40 		400 	4000
	5 	50 		500 	5000
	6 	60 		600 	6000
	7 	70 		700 	7000
	8 	80 		800 	8000
	9 	90 		900 	9000
	10 	100 	1000 	10000 */

let b = 1;
console.log("N\t10*N\t100*N\t1000*N");
while (b <= 10) {
  console.log(b + "\t" + b * 10 + "\t" + b * 100 + "\t" + b * 1000);
  b++;
}

/* 17. Write a program that utilizes looping to produce the following table of values:

	A 	A+2 A+4 A+6
	3 	5 	7 	9
	6 	8 	10 	12
	9 	11 	13 	15
	12 	14 	16 	18
	15 	17 	19 	21 */

let c = 3;
console.log("A 	A+2 A+4 A+6")
while (c <= 15) {
  console.log(c, c + 2, c + 4, c + 6);
  c += 3;
}

/* 18. Write a program that reads in the side of a square and then prints that square out of asterisks. Your program should work for squares of all side sizes between 1 and 20. For example, if your program reads a size of 4, it should print

	****
	****
	****
	****   */

let size = parseInt(prompt("Enter the size of the square (1-20):"));
let i = 0;
while (i < size) {
  let j = 0;
  let row = "";
  while (j < size) {
    row += "*";
    j++;
  }
  console.log(row);
  i++;
}

/*19. Write a program that reads in the side of a square and then prints a hollow square. For example, if your program reads a size of 5, it should print

	*****
	*   *
	*   *
	*   *
	*****    */

let size1 = parseInt(prompt("Enter the size of the hollow square (1-20):"));
let i4 = 0;
while (i4 < size1) {
  let j = 0;
  let row = "";
  while (j < size1) {
    if (i4 === 0 || i4 === size1 - 1 || j === 0 || j === size1 - 1) {
      row += "*";
    } else {
      row += " ";
    }
    j++;
  }
  console.log(row);
  i4++;
}

/* 20. A palindrome is a number or a text phrase that reads the same backward as forward. For example, each of the following five-digit integers is a palindrome: 12321, 55555, 45554 and 11611. Write a program that reads in a five-digit integer and determines whether or not it’s a palindrome. [Hint: Use the division and remainder operators to separate the number
into its individual digits.] */

let number = parseInt(prompt("Enter a five-digit integer:"));

if (number >= 10000 && number <= 99999) {
  let digit1 = Math.floor(number / 10000);
  let digit2 = Math.floor((number % 10000) / 1000);
  let digit3 = Math.floor((number % 1000) / 100);
  let digit4 = Math.floor((number % 100) / 10);
  let digit5 = number % 10;

  if (digit1 === digit5 && digit2 === digit4) {
    console.log("The number is a palindrome.");
  } else {
    console.log("The number is not a palindrome.");
  }
} else {
  console.log("Please enter a valid five-digit integer.");
}

// 21. Write a program that reads an integer and determines and prints how many digits in the integer are 7s.


let temp = parseInt(prompt("Enter an integer:"));
if (temp < 0) temp = -temp; 

let count = 0;

while (temp > 0) {
    let digit = temp % 10; 
    if (digit === 7) {
        count++; 
    }
    temp = (temp - digit) / 10; 
}

console.log("The number contains " + count + " digit(s) of 7.");




