// hoisting
// - only variables and functions declaration is hoisted not initialization.

// function declaration

// sayHello();

// function sayHello() {
//   console.log("Hello from function declaration");
// }
// sayHello();

// function expression

// var sayHello2 = function () {
//   console.log("Hello from function expression");
// };
// sayHello2();

// Arrow function

// const leo = () => {
//   console.log("Hello Leo");
// };
// leo();

// IIFE -> Imidietely invoked function expression

// (function () {
//   console.log("Hello form IIFE");
// })();

// let vs var vs const difference
// scoping -> block scope & function scope

// const name = "Vikas";
// const age = 23;

// if (age > 20) {
//   let senior = "Saqib";
//   console.log(senior);
// }

// console.log(senior);

// let abc = 5;
// console.log(abc);

// function abcd() {
//   let xyz = 10;
//   let abc = 15;
//   console.log(xyz);
//   function leo() {
//     console.log(xyz + abc);
//   }
//   console.log(abc);
//   leo();
// }
// abcd();

// hoisting -> TDZ

// {
//   console.log(apple);

//   let apple; // declaration

//   // -> Temporal Dead Zone

//   apple = "seb"; // initialization
// }
