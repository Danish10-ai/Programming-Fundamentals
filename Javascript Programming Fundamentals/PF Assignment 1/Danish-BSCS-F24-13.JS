//1. Write a program that prints the numbers 1 to 4 on the same line.

console.log(1,2,3,4);

//2. Obtain two num from the Keyboard, compute thier sum and display the result.

const num1 = parseFloat(prompt("Enter your num1:"));
const num2 = parseFloat(prompt("Enter your num2:"));

const sum = num1 + num2;

console.log ("Sum=", sum); 

//3. Diplay the follwing checkerboard pattern with eight print statement. 

console.log ("********");
console.log (" ********");
console.log ("********");
console.log (" ********");
console.log ("********");
console.log (" ********");
console.log ("********");
console.log (" ********");

//4. Write a program that print the bscs with asterisks.

console.log("****    ***    ***    ***");
console.log("*   *  *   *  *   *  *   *");
console.log("*   *  *      *      *");
console.log("****    ***   *       ***");
console.log("*   *      *  *          *");
console.log("*   *  *   *  *   *  *   *");
console.log("****    ***    ***    ***");

//5. Print your name initials in block letters. Construct each block letter out of letter it represents.

console.log("DDDD    H   H");
console.log("D   D   H   H");
console.log("D   D   H   H");
console.log("D   D   HHHHH");
console.log("D   D   H   H");
console.log("D   D   H   H");
console.log("DDDD    H   H");

//6. Write a program that reads in the radius of the circle and prints the circle's diameter and circumference and area. Use the contant value 3.14159 for Math.PI.

const radius = parseFloat(prompt("Enter the radius of the circle:"));
const pi = 3.14159;

const diameter = 2 * radius;
const circumference = 2 * pi * radius;
const area = pi * radius * radius;

console.log("Diameter=", diameter);
console.log("Circumference=", circumference);
console.log("Area=", area);

//7. Write a program that calculates the squares and cubes of the numbers from 0 to 10 and uses tabs to print the following table of values.


console.log("Number Square Cube");
console.log("0 0 0");
console.log("1 1 1");
console.log("2 4 8");
console.log("3 9 27");
console.log("4 16 64");
console.log("5 25 125");
console.log("6 36 216");
console.log("7 49 343");
console.log("8 64 512");
console.log("9 81 729");
console.log("10 100 1000");


//8. Write a program that prints "Hello World".

console.log("Hello World");

//9. Write a program that prints "Hello" on one line and "world" on the bottom line using two console.log commands.

console.log("Hello");
console.log("World");

//10. Make a program that asks for the user's name , and the prints the name on the screen immediately after.

const n = prompt("Enter your name:");

console.log("User Name=", n);

//11. Write a program that prompt the user for two numbers and displays the addition, subtraction, multiplication, division between them. 

const a = parseFloat(prompt("Enter your num1"));
const b = parseFloat(prompt("Enter your num2"));

const add = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;

console.log("Addition=", add);
console.log("Subtraction=", sub );
console.log("Multiplaction=", mul);
console.log("Division=", div);

//12. Write a program that calculate the arithematic mean of two numbers entered by the user. 

const c = parseFloat(prompt("Enter your num1"));
const d = parseFloat(prompt("Enter your num2"));

const mean = (c + d) / 2;

console.log("Mean=",mean);

//13. Write a program that calculates the arthemetic mean of three numbers entered by the user.

const e = parseFloat(prompt("Enter your num1"));
const f = parseFloat(prompt("Enter your num2"));
const h = parseFloat(prompt("Enter your num3"));

const m = (e + f + h) / 3;

console.log("Mean=",m);

//14. Write a program that calculates the BMI value of a person using the formula BMI = weight / height * height.

const weight = parseFloat(prompt("Enter the weight"));
const height = parseFloat(prompt("Enter the height"));

const BMI = weight / (height * height);

console.log("BMI=",BMI);

//15. Create a program that calculate and display the perimeter of the circle prompting the user for the radius.  

const r = parseFloat(prompt("Enter the radius"));
const p = 3.14159;

const peri = 2 * p * r;

console.log("Perimeter=", peri);

//16. Write a program that calculates the perimeter and area of a rectangle, using the formulas P=2*w+l and A=w*l, where w is the width and l is the length.

const w = parseFloat(prompt("Enter the width of rectengle"));
const l = parseFloat(prompt("Enter the length of length"));

const per = 2 * (w + l); 
const are = w * l;

console.log("Perimeter=", per);
console.log("Area=", are);

//17. Write a program that calculates the d of a quardratic equation d = b*b - 4*a*c.

const A = parseFloat(prompt("Enter the value of a"));
const B = parseFloat(prompt("Enter the value of b"));
const C = parseFloat(prompt("Enter the value of c"));

const D = (B*B) - 4*(A*C);

console.log("The value of d is=", D);

//18. The program prompts the user to enter the base and height of a triangle and calculates its area using the formula: Area = 12 * Base * Height. It then displays the calculated area.

const Base = parseFloat(prompt("Enter the base of triangle"));
const Height = parseFloat(prompt("Enter the height of triangle"));

const ar =  12 * (Base * Height);

console.log("Area=", ar);

//19. This program prompts the user to enter a distance in kilometers and converts it to miles using the conversion factor: 1 kilometer is approximately equal to 0.621371 miles. It then displays the converted distance.

const kilometer = parseFloat(prompt("Enter the distance in kilometer"));

const mile = kilometer *  0.621371 

console.log("Miles=", mile);

//20. This program converts a temperature from Celsius to Farenheit using the formula: F=C*9/5 + 32, where F is the temperature in Fahrenheit and C is the temperature in Celsius.

const Cel = parseFloat(prompt("Enter the temperature in celsius"));

const farenheiht = Cel * (9/5) + 32;

console.log("Farenheit", farenheiht);

//21. Write a program that swaps the values of two variables and prints the swapped values.

let var1 = 5;
let var2 = 10;

[var1 , var2] = [var2 , var1]

console.log(var1 , var2);

//22. Write a program that concatenates three strings and displays the resulting string.

const c1 = ("Write your first string here string1.");
const c2 = ("Write your second string here string2.");
const c3 = ("Write your third string here string3.");

const c4 = (c1 + c2 + c3);

console.log("Concatenated string=", c4);

//23. Write a program that combines the day, month, and year into a single string to display the full date in the format DD/MM/YYYY. (Input: day = 15, month = 8, year = 2023  Output: "15/08/2023")

const day = ("15/");
const month = ("08/");
const year = ("2023");

const date = (day+month+year);

console.log("Date:", date);

//24. Write a program that converts hours into seconds.

const hours = Number(prompt("Enter how many hours you want to convert."));

const seconds = hours * 60 * 60;

console.log("Seconds=", seconds);

//25. Write a program that displays a multiplication table for a given number. The user should enter the number, and the program should display the table from 1 to 10.

const z = parseInt(prompt("Enter the number"));

const T = z * 1;
const S = z * 2;
const X = z * 3;
const V = z * 4;
const I = z * 5;
const O = z * 6;
const U = z * 7;
const F = z * 8;
const K = z * 9;
const H = z * 10;

console.log(T);
console.log(S);
console.log(X);
console.log(V);
console.log(I);
console.log(O);
console.log(U);
console.log(F);
console.log(K);
console.log(H);

//21. another method of swapping values.

let ft = 5
let st = 10;

let temp = ft;
ft = st; 
st = temp;
console.log(ft , st);