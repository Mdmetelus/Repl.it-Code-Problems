// isOldEnoughToVote
// Instructions from your teacher:
//  Write a function called "isOldEnoughToVote".

// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.

// Notes:* The legal voting age in the United States is 18.

// var output = isOldEnoughToVote(22);
// console.log(output); // --> true

function isOldEnoughToVote(age) {
    // your code here
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  var output = isOldEnoughToVote(22);
  console.log(output); // --> true