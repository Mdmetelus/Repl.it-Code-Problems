// isOdd

// Instructions from your teacher:
// Write a function called "isOdd".

// Given a number, "isOdd" returns whether the given number is odd.

// var output = isOdd(9);
// console.log(output); // --> true

function isOdd(num) {
    // your code here
    
    let odd = num % 2 === 1 ? true : false ;
    return odd;
  }
  
  isOdd(9);