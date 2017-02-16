
// What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers?

firstTen = [1,2,3,4,5,6,7,8,9,10];

var sumSquare = firstTen.map(Math.sqrt).reduce(function(a, b){return a+b});

var squareSum = firstTen.reduce(function(a, b){return a+b});
squareSum = Math.sqrt(squareSum);

finalAnswer = sumSquare - squareSum;

console.log(finalAnswer)