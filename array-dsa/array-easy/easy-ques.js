/*
Given an array, we have to find the largest element in the array.

example : 
    input : [2,100,42,87,66]
    output : 100
*/

// Time complexity - O(n)
function findLargestNumber(arr) {
  let maxNumber = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > maxNumber) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

const num = [2, 100, 42, 87, 66];

console.log(`Max number from ${num} : ${findLargestNumber(num)}`);

/*
Given an array, find the second smallest and second largest element in the array. 
Print ‘-1’ in the event that either of them doesn’t exist.

examples : 
  input : [1, 2, 4, 7, 7, 5]  
Output:
      Second Smallest : 2  
      Second Largest : 5

*/

function secondSmallestNum(arr) {
  let minNumber = Infinity;
  let secondMin = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current < minNumber) {
      secondMin = minNumber;
      minNumber = current;
    }
    if (current !== minNumber && current < secondMin) {
      secondMin = current;
    }
  }
  return secondMin;
}

function secondLargestNum(arr) {
  let maxNumber = -Infinity;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current > maxNumber) {
      secondLargest = maxNumber;
      maxNumber = current;
    }
    if (current !== maxNumber && current > secondLargest) {
      secondLargest = current;
    }
  }
  return secondLargest;
}

const num2 = [1, 2, 4, 7, 7, 5];

console.log(`Second Largest Number : ${secondLargestNum(num2)}`);
console.log(`Second Smallest number : ${secondSmallestNum(num2)}`);
