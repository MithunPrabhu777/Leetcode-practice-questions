// Function statement aka Function declaration

// function a() {
//   console.log("a called");
// }

// a();

// Function expression

// var b = function () {
//   console.log("b called");
// };

// b();

/*     
Major difference is hoisting that is function statement can be invoked before function statement
and this is not applicable to function expression because we are assigning function to a variable it will throw error 
*/

// Anonymous Function

// SyntaxError: Function statements require a function name if u write function statement without name

// function (){

// }

// Named function expression

// var ab = function xyz() {
//   console.log("xyz is logging");
// };

// ab();

// Difference between parameter and argument

// Argument is the actual value passing to the function and parameters are labels of function.

// First class functions

//Passing another function inside a function is called first class function

// function z() {
//   console.log("logging z");
// }

// function xy() {
//   console.log("logging xy");
// }

// z(xy());

//Functions are first class citizens

// const radiusList = [2, 4, 6, 7, 1];

// function areaOfCircle(radius) {
//   return Math.PI * radius * radius;
// }

// function circumferenceOfCircle(radius) {
//   return 2 * Math.PI * radius;
// }

// function diameterOfCircle(radius) {
//   return 2 * radius;
// }

// console.log(radiusList.map(areaOfCircle));
// console.log(radiusList.map(circumferenceOfCircle));
// console.log(radiusList.map(diameterOfCircle));
// Arrow functions

var average = function (salary) {
  salary.sort((a, b) => a - b);

  salary.splice(0, 1);
  salary.splice(salary.length - 1, 1);

  let totalSum = salary.reduce((acc, ele) => {
    return acc + ele;
  }, 0);

  return totalSum / salary.length;
};

let salary = [4000, 3000, 1000, 2000];
console.log(average(salary));
