//isLessThan

// Instructions from your teacher:
//  Write a function called "isLessThan".

// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

// var output = isLessThan(9, 4);
// console.log(output); // --> true

function isLessThan(num1, num2) {
    // your code here
    if (num1 > num2){
        return true;
    } else {
        return false;
    }
  }
  
  isLessThan(9, 4);