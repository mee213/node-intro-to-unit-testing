// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should fizz buzz', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: -30, expected: 'fizz-buzz'},
      {num: 10, expected: 'buzz'},
      {num: -10, expected: 'buzz'},
      {num: 6, expected: 'fizz'},
      {num: -6, expected: 'fizz'},
      {num: 7, expected: 7},
      {num: -7, expected: -7}
    ];
    // for each inputs (num), `fizzBuzz` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where they are not numbers
    const badInputs = [
      'a',
      '1',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});