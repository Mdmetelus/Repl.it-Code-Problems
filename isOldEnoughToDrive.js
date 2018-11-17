// Instructions from your teacher:
//  Write a function called "isOldEnoughToDrive".

// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.

// Notes:* The legal driving age in the United States is 16.

// var output = isOldEnoughToDrive(22);
// console.log(output); // --> true

function isOldEnoughToDrive(age) {
    // your code here
    if (age >= 16) {
      return true;
    } else{
      return false;
    }
  }
  
  var output = isOldEnoughToDrive(22);
  console.log(output); // --> true


   //   Automatic Unit Test Function

Describe("unitTests", function() {
    Advanced
    // Initialization code
    beforeAll(function() {
    // Setup code
    });
    afterAll(function() {
    // TearDown code
    });
    it("Should_return_false", function() {
    // failure message:
    // Wrong return value. Make sure its false
    expect(isOldEnoughToDrive(15)).toBe(false);
    });
    it("Should_return_false", function() {
    // Failure message:
    // Wrong return value. Make sure its false
    expect(isOldEnoughToDrive(17)).toBe(true);
    });
    })