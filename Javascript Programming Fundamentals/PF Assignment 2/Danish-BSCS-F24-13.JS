//1. Write a program reads an integer and determines and prints weather it is odd or even.

const integer = Number(prompt("Enter your integer"));

if (integer%2==0)  {
        console.log(integer + " is even.");
        }
else {
     console.log(integer + (" is odd."));

}

//2. Make a program that asks for a person's age and displays weather they are of legal age or not (age>=18). 

const age = Number(prompt("Enter your age"));

if (age>=18) {
            console.log("Person's age is legal.");
}
else{
    console.log("Person's age is not legal.");
}

//3. Write a program that reads a number and reports weather it is positive, negitive or zero. 

const number = parseFloat(prompt("Enter your number"));

if (number>0) {
            console.log(number + " is positive number.");
}
else if (number<0) {
            console.log(number + " is negitive number.");
}
else{
            console.log(number + " is zero.");
}

//4. Create a program that reads three numbers and check if thier sum is positive, negitive or equal to zero.    

const n1 = parseFloat(prompt("Enter your num 1"));
const n2 = parseFloat(prompt("Enter your num 2"));
const n3 = parseFloat(prompt("Enter your num 3"));

const n4 = (n1 + n2 + n3);

if (n4>0) {
        console.log("The sum is positive.");
}
else if (n4<0) {
        console.log("The sum is negitive.");
}
else{
    console.log("The sum is zero");
}

//5. Write a program that reads two numbers and tells which one is bigger.

const nu1 = parseFloat(prompt("Enter your num 1"));
const nu2 = parseFloat(prompt("Enter your num 2"));

if (nu1>nu2) {
        console.log(nu1 + " is bigger.");
}
else if (nu2>nu1) {
            console.log(nu2 + " is bigger.");
}

//6. Write a program that asks the user for three numbers and display the largest one. 

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));

let largest = num1;

if (num2>largest) {
         num2 = largest;
}
else if (num3>largest) {
         num3 = largest;
}
console.log("The largest number is:", largest);

//7. Make a program that reads three number and inform if thier sum divisile by 5 or not.

const numb1 = parseFloat(prompt("Enter your num 1"));
const numb2 = parseFloat(prompt("Enter your num 2"));
const numb3 = parseFloat(prompt("Enter your num 3"));

const a = (numb1 + numb2 + numb3);

if (a%5==0) {
        console.log("The sum is divisible by 5.");
}
else{
        console.log("The sum is not divisible by 5.");
}

//8. Write a program that reads in two intgers and determines and prints if the first is the multiple of second.

const int1 = parseFloat(prompt("Enter your num 1"));
const int2 = parseFloat(prompt("Enter your num 2"));

if (int1%int2==0) {
                console.log(int1 + " is a multiple of ", + int2);
}
else{
        console.log(int1 + " is not a multiple of ", + int2);
}

//9. Write a program that asks the user to enter two integers, obtains the numbers from the user, then prints the larger number followed by the words “is larger.” If the numbers are equal, print the message “These numbers are equal.” Use only the single-selection form of the if statement.

const i1 = parseFloat(prompt("Enter your num 1"));
const i2 = parseFloat(prompt("Enter your num 2"));

if (i1>i2) {
        console.log(i1 + " is the largest.");
}
else if (i1===i2){
        console.log("They both are equal.");  
}
else{
        console.log(i2 + " is the largest.");
}

//10. Write a program that asks the user to enter their marks (0 - 100) and prints their letter grade (A for 90-100, B for 80-89, C for 70-79, D for 60-69, F for under 60).

const marks = parseFloat(prompt("Enter your marks from 0 to 100."));

let grade;

if (marks >= 90 && marks <= 100){
        grade = "Your grade is A";
}else if (marks >= 80 && marks <= 89){
        grade = "Your grade is B";
}else if (marks >= 70 && marks <= 79){
        grade = "Your grade is C";
}else if (marks >= 60 && marks <= 69){
        grade = "Your grade is D";
}else {
        marks = "Your grade is F";
}

console.log(grade);

//11. Create a program that reads the price of a product. If the proce is more that Rs.200, the tax is 5%, if it is more that Rs.500, the tax is 7.5%/ Products up to Rs.200 do not pay taxes. Print the final price of the product on the screen.

const price = parseFloat(prompt("Enter the price of the product:"));

let tax;

if (price>500) {
         tax = price + (price * 0.075);
}
else if (price>200) {
         tax = price + (price * 0.05);
}
else {
         tax = price + (price * 0);
}

console.log("The final price is:", tax);

//12. Write a program that asks for an integer and checks if it is divisible by 3 and 5 at the same time.

const inte = parseFloat(prompt("Enter your number:"));

if (inte % 5 == 0  &&  inte % 3 == 0) {
                console.log(inte + " is divisible by 3 and 5 at the same time.");
}
else {
        console.log (inte + " is not divisble by 3 and 5 at the same time.");
}

//13. Make a program that reads three numbers, and displays them on the screen in ascending order.

let u = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));

let numbers = [u, b, c];
numbers.sort((x, y) => x - y);

console.log("Numbers in ascending order:", numbers.join(", "));

//14.Write a program that inputs three different integers from the keyboard, then prints the sum, the average, the product, the smallest and the largest of these numbers. Use only the single-selection form of the if statement
let integer1=parseInt(prompt("enter first integer"));
let integer2=parseInt(prompt("enter second integer"));
let integer3=parseInt(prompt("enter third number"));

let add=integer1+integer2+integer3;
let average=add/3;
let product=integer1*integer2*integer3;

let smallest=integer1;
if(integer2<smallest) smallest=integer2;
if(integer3<smallest) smallest=integer3;

let largeone=int1;
if(integer2>largeone) largeone=integer2;
if(integer3>largeone) largeone=integer3;

console.log("add",add);
console.log("average",average);
console.log("product",product);
console.log("smallest",smallest);
console.log("largeone",largeone);

//15.  Write a program that reads three numbers and tells you if they can be the sides of a triangle (the sum of two sides must always be greater than the third side).

const s1 = parseFloat(prompt("enter the first num"));
const s2 = parseFloat(prompt("enter the second num"));
const s3 = parseFloat(prompt("enter the third num"));

if (s1+s2>s3 && s2+s3>s1 && s3+s1>s2) {
        console.log("These numbers can form a triangle.");
}
else{
        console.log("These numbers cannot form a triangle.");
}

//16. Create a program that asks for a person's age and displays whether they are a child (0-12 year), teenager (13-17 years), adult (18-59 years) or elderly (60---), using nested conditionals, without using logical operators.

const aged = parseFloat(prompt("Enter your age:"));

if (aged<=12) {
        console.log("You are a child.");
} else if (aged<=17) {
        console.log("You are a teenager.");       
} else if (aged<=59) {
        console.log("You are a adult.");         
} else if (aged>=60) {
        console.log("You are elderly person.");  
}

//17.  Write a program that reads the values a, b, and c of a quardratic equation, and says if the roots of the function are real or imaginary.

const a1 = parseFloat(prompt("Enter the value of a:"));
const b2 = parseFloat(prompt("Enter the value of b:"));
const c3 = parseFloat(prompt("Enter the value of c:"));

let dis = (b2*b2 -4*a1*c3);

if(dis>0){
        console.log(dis + " is real number");
}else{
        console.log(dis + " is imaginary number");
}

//18.  Write a program that reads in five integers and then determines and prints the largest and the smallest integers in the group.

const Integer1 = parseFloat(prompt("Enter your num 1"));
const Integer2 = parseFloat(prompt("Enter your num 2"));
const Integer3 = parseFloat(prompt("Enter your num 3"));
const Integer4 = parseFloat(prompt("Enter your num 4"));
const Integer5 = parseFloat(prompt("Enter your num 5"));

const numbe = [Integer1,Integer2,Integer3,Integer4,Integer5];

const small = Math.min(...numbe);
const large = Math.max(...numbe);

console.log ("The smallest number is", small);
console.log ("The largest number is", large);

//19.  Write a program that inputs one five-digit number, separates the number into its individual digits and prints the digits separated from one another by three spaces each. [Hint: Use combinations of integer division and the remainder operation.] 

const n15 = parseFloat(prompt("Enter the one-five number"));

const digit1 = Math.floor (n15/10000);
const digit2 = Math.floor (n15%10000/1000);
const digit3 = Math.floor (n15%1000/100);
const digit4 = Math.floor (n15%100/10);
const digit5 = Math.floor (n15%10);

console.log(`The separated digits are: ${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);

//20. Write a program that reads two integers and calculates the absolute difference between them. If the first number is larger, subtract the second number from the first. Otherwise, subtract the first number from the second.

const in1 = parseFloat(prompt("Enter the first number")); 
const in2 = parseFloat(prompt("Enter the second number")); 

let ans;

if(in1>in2){
        ans = in1-in2;
}else{
        ans = in2-in1;
}

console.log("The absolute difference is", ans);

//21. Write a program that reads a year and determines whether it is a leap year or not. A leap year is divisible by 4 but not divisible by 100, except when it is divisible by 400.

const year = (prompt("Enter the year"));

if (year%4 === 0) {
        console.log(year + " is a leap year.");
}else{
        console.log(year + " is not a leap year.");
}

/*22. Write a program that asks for the current temperature in degrees Celsius and displays one of the following categories:

"Cold" if the temperature is below 10.
"Warm" if the temperature is between 10 and 25.
"Hot" if the temperature is above 25.*/

const temp = parseFloat(prompt("Enter the temperature in degrees celcius:"));

let tem;

if (temp<10) {
        tem = "Cold";
}else if (temp>=10 && temp<=25) {
        tem = "Warm";
}else{
        tem = "Hot";
}

console.log("The temperature is", tem);


/*23. Write a program that asks for the price of a product and applies a discount based on the following conditions:

If the price is less than Rs.100, no discount.
If the price is between Rs.100 and Rs.500, apply a 10% discount.
If the price is greater than Rs.500, apply a 20% discount. Print the final price after the discount.*/

const pr = parseFloat(prompt("Enter the price of the product:"));

let final;

if (pr<100) {
        final = (pr);
}else if (pr<=500){
        final = (pr * 0.9);
}else {
        final = (pr * 0.8);
}

console.log("The final price is", final);


//24. Write a program that reads a number and checks whether it falls within a given range (e.g., between 50 and 100). Display "Within range" or "Out of range."

const A1 = parseFloat(prompt("Enter the number:"));

if (A1>=50 && A1<=100) {
        console.log(A1 + " is in the range");
}else {
        console.log(A1 + " is out of the range"); 
}

/*25. Write a program that reads the weight (in kg) and height (in meters) of a person, calculates their BMI using the formula BMI = weight / (height * height), and categorizes them as follows:

"Underweight" if BMI < 18.5.
"Normal weight" if BMI is between 18.5 and 24.9.
"Overweight" if BMI is between 25 and 29.9.
"Obese" if BMI is 30 or higher.*/

const weight = parseFloat(prompt("Enter the weight in kilogram:"));
const height = parseFloat(prompt("Enter the height in meters:"));

const BMI = weight / (height * height)

let T;
if (BMI<18.5) {
        T = "Underweight";
}else if (BMI>=18.5 && BMI<=24.9) {
        T = "Normal weight";
}else if (BMI>=25 && BMI<=29.9) {
        T = "Overweight";
}else{
        T = "Obese";
}















