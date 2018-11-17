// Instructions from your teacher:
// Write a function called "isOldEnoughToDrink".

// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.

// Notes:* The legal drinking age in the United States is 21.

// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true

function isOldEnoughToDrink(age) {
    // your code here	
    if( age >= 21){
      return true;
    } else{
      return false;
    }
  }
  
  var output = isOldEnoughToDrink(22);
  console.log(output); // --> true





  //   Automatic Unit Test Function

describe("UnitTests", function() {
    Advanced
    // Initialization code
    beforeAll(function() {
    // Setup code
    });
    afterAll(function() {
    // TearDown code
    });
    it("Should_return_false", function() {
    // Failure message: 
    // Wrong return value. Make sure its false
    expect(isOldEnoughToDrink(20)).toBe(false);
    });
    it("Should_return_true", function() {
    // Failure message: 
    // Wrong return value. Make sure its true
    expect(isOldEnoughToDrink(22)).toBe(true);
    });
    });