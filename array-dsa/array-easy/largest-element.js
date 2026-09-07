/*
Given an array, we have to find the largest element in the array.

example : 
    input : [2,100,42,87,66]
    output : 100
*/

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
