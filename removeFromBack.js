// removeFromBack

// Instructions from your teacher:
//  Write a function called "removeFromBack".

// Given an array, "removeFromBack" returns the given array with its last element removed.

// Notes:* You should be familiar with the method 'pop'.

// var output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]


function removeFromBack(arr) {
    // your code here
    let arr1 = arr;
    arr1.pop();
    return arr1;
  }
  
  removeFromBack([1, 2, 3]);