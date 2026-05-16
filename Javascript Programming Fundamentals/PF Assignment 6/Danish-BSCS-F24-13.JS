// Q no 1-Write a program that reads an array of integers and displays the elements in reverse order.

const reverse = (arr) => {
  return arr.reverse();
};

reverse([1, 2, 3, 4, 5]);

// Q no 2-Create a program that reads an array of integers and displays the sum of all the elements.

const Calsum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

Calsum([1, 2, 3, 4, 5]);

// Q no 3-Write a program that reads an array of integers and displays the average of the elements.

const Calavg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

Calavg([1, 2, 3, 4, 5]);

// Q no-4 Write a program that reads an array of integers and displays the largest element in the array.

const largest = (arr) => {
  let largest = arr[0];
  for (let j = arr.length - 1; j >= 0; j--) {
    if (arr[j] > largest) {
      largest = arr[j];
    }
  }
  return `The laegest num in array is:${largest}`;
};

largest([2, 4, 7, 88, 3]);

// Q no 5-Create a program that reads two arrays of integers of the same size and displays a new array with the sum of the corresponding elements of the two arrays.

const sum_arr = (array1, array2) => {
  if (array1.length !== array2.length) {
    console.log("Length of both array must be equal.");
  } else {
    let arraysum = [];
    for (let i = 0; i < array1.length; i++) {
      arraysum.push(array1[i] + array2[i]);
    }
    return arraysum;
  }
};

sum_arr([2, 4, 6], [1, 1, 1]);

// Q no 6-Create a program that reads two arrays of integers of the same size and displays a new array with the multiplication of the corresponding elements of the two arrays

const multi_arr = (array1, array2) => {
  if (array1.length !== array2.length) {
    console.log("Length of both arrays must be eqaul.");
  } else {
    let final_arr = [];
    for (let i = 0; i < array1.length; i++) {
      final_arr.push(array1[i] * array2[i]);
    }
    return final_arr;
  }
};

multi_arr([2, 4, 6], [10, 2, 6]);

// Q no 7-Write a program that reads an array of integers and displays how many times a specific number appears in the array.

function repeat_num(array, Specific_num) {
  let count = 0;
  for (let h = 0; h <= array.length; h++) {
    if (array[h] === Specific_num) {
      count++;
    }
  }
  console.log(Specific_num + " is repeated " + count + " times in this Array");
}
repeat_num([3, 4, 3, 4, 34, 6], 34);

const repeated_num = (array, Specific_num) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === Specific_num) {
      count++;
    }
  }
  return Specific_num + " is repeated " + count + " times in this Array";
};

repeated_num([3, 4, 3, 4, 34, 6], 34);

// Q no 8-Write a program that reads an array of integers and checks if they are in ascending order.

function ascending_check(array) {
  let ascending = true;
  for (let f = 0; f < array.length - 1; f++) {
    if (array[f] > array[f + 1]) {
      ascending = false;
      break;
    }
  }
  if (ascending === true) {
    console.log("Array is in Ascending Order");
  } else {
    console.log("Array is not in Ascending Order");
  }
}

// Q no 9-Write a program that reads an array of integers and finds the second largest element in the array.

function second_largest(array) {
  if (array.length < 2) {
    console.log("Array must contain at least two elements.");
    return;
  }
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      second = largest;
      largest = array[i];
    } else if (array[i] > second && array[i] !== largest) {
      second = array[i];
    }
  }
  if (second === -Infinity) {
    console.log("There is no distinct second largest element.");
  } else {
    console.log("Second largest element is:", second);
  }
}

// Q no 10-Write a program that reads an array and sort it in ascending order.

function sortAscending(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log("Sorted Array in Ascending Order:", array);
}
