// equalsTen

// Instructions from your teacher:
//  Write a function called "equalsTen".

// Given a number, "equalsTen" returns whether or not the given number is 10.

// var output = equalsTen(9);
// console.log(output); // --> false

function equalsTen(num) {
    // your code here
    let at = num === 10 ? true : false ;
    console.log(at);
    return at;
  }
  
  var output = equalsTen(9);
  var output = equalsTen(11);
  console.log(output); // --> false