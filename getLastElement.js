// getLastElement

// Instructions from your teacher:
// Write a function called "getLastElement".

// Given an array, "getLastElement" returns the last element of the given array.
// Notes:* If the given array has a length of 0, it should return 'undefined'.

// var output = getLastElement([1, 2, 3, 4]);
// console.log(output); // --> 4


function getLastElement(array) {
    // your code here
    let array1 = array
    return array1.pop();
  }
  
  getLastElement([1, 2, 3, 4]);