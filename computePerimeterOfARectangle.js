// computePerimeterOfARectangle

// Instructions from your teacher:
// Write a function called "computePerimeterOfARectangle".

// Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.

// var output = computePerimeterOfARectangle(5, 2);
// console.log(output); // --> 14

function computePerimeterOfARectangle(length, width) {
    // your code here
    let perimeterOf = length + width +length + width;
    return perimeterOf;
    
  }
  
  
  computePerimeterOfARectangle(5, 2);