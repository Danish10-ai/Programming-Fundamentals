// 1.  1 - Write a function that takes radius of a circle and returns the circle’s area. Use the constant value 3.14159 for π.

function calculateCircleArea(r) {
  const pi = 3.14159;
  const area = pi * r * r;
  return area;
}

const area = calculateCircleArea(
  parseInt(prompt("Enter the radius of a circle."))
);
console.log("Area of a circle is: ", area);

// 2 - Write a function that calculates the cube of a number.

function calccube(n) {
  const cube = n * n * n;
  return cube;
}

const cube = calccube(parseInt(prompt("Enter a number.")));
console.log("The cube of number is: ", cube);

// 3 - Create a function that calculates the perimeter of a circle from its radius.

function calcperimeter(r) {
  const pi = 3.14159;
  const perimeter = 2 * pi * r;
  return perimeter;
}

const peri = calcperimeter(parseInt(prompt("Enter the radius of a circle.")));
console.log("The perimeter of the circle is: ", peri);

// 4 - Write a function that calculates the perimeter of a rectangle, using the formulas P=2*w+I, where w is the width and l is the length.

function CalcperiRec(w, l) {
  const perimeter = 2 * (w + l);
  return perimeter;
}

const perimeter = CalcperiRec(
  parseInt(prompt("Enter the width of rectangle: ")),
  parseInt(prompt("Enter the length of rectangle: "))
);
console.log("The perimeter of rectangle is: ", perimeter);

// 5 - Write a function that calculates the d of a quardratic equation d = b*b - 4*a*c.

function Calcquad(a, b, c) {
  const d = b * b - 4 * a * c;
  return d;
}

const disc = Calcquad(
  parseInt(prompt("Enter the value of a: ")),
  parseInt(prompt("Enter the value of b: ")),
  parseInt(prompt("Enter the value of c: "))
);
console.log("The disc of quadratic equation: ", disc);

// 6 - Write a function to calculate the area of a triangle using the formula: Area = 12 * Base * Height.

function CalcareaTri(base, height) {
  const area = 12 * base * height;
  return area;
}

const areatri = CalcareaTri(
  parseInt(prompt("Enter the base of triangle: ")),
  parseInt(prompt("Enter the height of a triangle: "))
);
console.log("The area of triangle is: ", areatri);

// 7 - Write a function to take a distance in kilometers and converts it to miles using the conversion factor: 1 kilometer is approximately equal to 0.621371 miles.

function CalcKilotoMile(kilo) {
  const distance = kilo * 0.621371;
  return distance;
}

const distance = CalcKilotoMile(
  parseInt(prompt("Enter distance in kilometer: "))
);
console.log("Distance in Miles: ", distance);

// 8 - Write a function to converts a temperature from Celsius to Farenheit using the formula: F=C*9/5 + 32, where F is the temperature in Fahrenheit and C is the temperature in Celsius.

function Calctemp(C) {
  const temp = (C * 9) / 5 + 32;
  return temp;
}

const temp = Calctemp(parseInt(prompt("Enter the temprature in celcius: ")));
console.log("Temperature in farenheit: ", temp);

// 9 - Write a function that takes an number and return true number is even, retun false if number is odd. (function name like isEven).

function isEven(num) {
  if (num % 2 === 0) {
    console.log("True number is even.");
  } else {
    console.log("False num is odd.");
  }
  return num;
}

const num = isEven(
  parseInt(prompt("Enter a number to check if number is odd or even."))
);
console.log(num);

// 10 - Write a function that takes a person's age and return boolean value to show whether they are of legal age of not (age >= 18).

function legalage(age) {
  if (age >= 18) {
    console.log("True");
  } else {
    console.log("False");
  }
  return age;
}

const age = legalage(parseInt(prompt("Enter your age:")));
console.log(age);

// 11 - Write a function that reads a number and return 0, 1 or 2 to show  whether it is positive, negative or zero.

function checknum(number) {
  if (number > 0) {
    console.log("2");
  } else if (number < 0) {
    console.log("1");
  } else {
    console.log("0");
  }
  return number;
}

const num1 = checknum(
  parseInt(
    prompt(
      "Enter a number, ((0) will show number is zero, (1) will show number is negitive, (2) will show number is positive.)"
    )
  )
);
console.log(num1);

// 12 - Create a function that takes three numbers and return 0, 1 or 2 to show if their sum is positive, negative or equal to zero.

function checknumber(a, b, c) {
  let number1 = a + b + c;

  if (number1 > 0) {
    console.log("2");
  } else if (number1 < 0) {
    console.log("1");
  } else {
    console.log("0");
  }
  return number1;
}

const num2 = checknumber(
  parseInt(
    prompt(
      "Enter the first number, ((0) will show the sum is zero, (1) will show the sum is negitive, (2) will show the sum is positive.)"
    )
  ),
  parseInt(
    prompt(
      "Enter the second number, ((0) will show the sum is zero, (1) will show the sum is negitive, (2) will show the sum is positive.)"
    )
  ),
  parseInt(
    prompt(
      "Enter the third number, ((0) will show the sum is zero, (1) will show the sum is negitive, (2) will show the sum is positive.)"
    )
  )
);
console.log(num2);

// 13 - Write a function that takes two numbers and returns the bigger.

function returnbig(num1, num2) {
  if (num1 > num2) {
    return num1 + " (first number) is bigger.";
  } else if (num1 < num2) {
    return num2 + " (second number) is bigger.";
  }
}

const big = returnbig(
  parseInt(prompt("Enter the first number:")),
  parseInt(prompt("Enter the second number:"))
);
console.log(big);

// 14 - Write a function that takes the three numbers and returns the largest one.

function largenum(n1, n2, n3) {
  let largest;
  if (n1 > n2) {
    largest = n1;
  } else if (n2 > n3) {
    largest = n2;
  } else {
    largest = n3;
  }
  return largest;
}

const lar1 = largenum(
  parseInt(prompt("Enter the first number:")),
  parseInt(prompt("Enter the second number:")),
  parseInt(prompt("Enter the third number:"))
);
console.log("The largest num is: ", lar1);

// 15 - Make a function that takes three numbers, and return boolean value to show if their sum is divisible by 5 or not.

function isdivisible(num1, num2, num3) {
  if ((num1 + num2 + num3) % 5 === 0) {
    return "true";
  } else {
    return "false";
  }
}

const l2 = isdivisible(
  parseInt(
    prompt(
      "Enter the first number (true means it is divisible by 5 and false means it is not.):"
    )
  ),
  parseInt(
    prompt(
      "Enter the second number (true means it is divisible by 5 and false means it is not.):"
    )
  ),
  parseInt(
    prompt(
      "Enter the third number (true means it is divisible by 5 and false means it is not.):"
    )
  )
);
console.log(l2);

// 16 - Write a function that takes two integers and determines if the first is a multiple of the second. [Hint: Use the remainder operator.]

function multisecond(n1, n2) {
  if (n1 % n2 === 0) {
    return "First is muliple of second.";
  } else {
    return "First is not multiple second.";
  }
}

const multiple = multisecond(
  parseInt(prompt("Enter the first number:")),
  parseInt(prompt("Enter the second number:"))
);
console.log(multiple);

// 17 - Write a function that takes the  marks (0 - 100) and return the letter grade (A for 90-100, B for 80-89, C for 70-79, D for 60-69, F for under 60).

function checkgrade(grade) {
  if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade >= 80 && grade <= 89) {
    return "B";
  } else if (grade >= 70 && grade <= 79) {
    return "C";
  } else if (grade >= 60 && grade <= 69) {
    return "D";
  } else {
    return "F";
  }
}

const grade = checkgrade(parseInt(prompt("Enter the marks from 0 - 100:")));
console.log("Your grade is: ", grade);

// 18 - Create a function that takes the price of a product. If the price is more that Rs.200, the tax is 5%, if it is more that Rs.500, the tax is 7.5%/ Products up to Rs.200 do not pay taxes. Return the final price of the product.

function calculateFinalPrice(price) {
  if (price > 500) {
    return price + price * 0.075;
  } else if (price > 200 && price <= 500) {
    return price + price * 0.05;
  } else {
    return price;
  }
}

const price = calculateFinalPrice(
  parseInt(prompt("Enter the price of product:"))
);
console.log("The final price is: ", price);

// 19 - Write a function that takes three numbers and return if they can be the sides of a triangle (the sum of two sides must always be greater than the third side).

function sideofTri(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return "They are the side of triangle.";
  } else {
    return "They are not the side of triangle.";
  }
}

const sides = sideofTri(
  parseInt(prompt("Enter the value of a:")),
  parseInt(prompt("Enter the value of b:")),
  parseInt(prompt("Enter the value of c:"))
);
console.log(sides);

// 20 - Write a function that takes the values a, b, and c of a quardratic equation, and returns if the roots of the function are real or imaginary.

function quadRealorImagi(a, b, c) {
  let dis = b * b - 4 * a * c;

  if (dis > 0) {
    console.log(dis + " is real number");
  } else {
    console.log(dis + " is imaginary number");
  }
  return dis;
}

const side = quadRealorImagi(parseInt(prompt("Enter the value of a:")), parseInt(prompt("Enter the value of b:")), parseInt(prompt("Enter the value of c:")));
console.log(side);

// 21 - Write a function that takes a year and determines whether it is a leap year or not.

function checkleapyear(year) {
  if (year % 4 === 0) {
    return "It is a leap year.";
  } else {
    return "It is not a leap year";
  }
}

const year = checkleapyear(
  parseInt(prompt("Enter the year to check if it is leap year or not:"))
);
console.log(year);

// 22 - Write a function that takes the values a, b, and c of a quardratic equation, and says if the roots of the function are real or imaginary.

function quadRealorImagi(a, b, c) {
    let dis = b * b - 4 * a * c;
  
    if (dis > 0) {
      console.log(dis + " is real number");
    } else {
      console.log(dis + " is imaginary number");
    }
    return dis;
  }
  
  const side1 = quadRealorImagi(parseInt(prompt("Enter the value of a:")), parseInt(prompt("Enter the value of b:")), parseInt(prompt("Enter the value of c:")));
  console.log(side1);