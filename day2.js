// Heap and stack memory

// Stack Memory -> Primitive types

// let name = "Nitish";
// let anotheName = name;
// anotheName = "Saqib";

// console.log(name);
// console.log(anotheName);

// object -> Heap -> Referenced types / Non-Primitives

// const user = {
//   name: "Saqib",
//   age: 28,
//   sayHello: function () {
//     console.log("hello from obj");
//   },
// };

// const anotherUser = user;
// anotherUser.age = 29;
// anotherUser.email = "saqib@saqib.com";

// console.log("Ist: ", user);
// console.log("2nd: ", anotherUser);

// statement vs expressions

// Expression could be anything that produces a value
// Statement is like giving instruction to do something, it can have expression in it.

// String Interpolation

// let name = "Saqib";
// let age = 30;

// console.log("My name is " + name + "and I'm " + age + "years old.");
// console.log(`My name is ${name} and I'm ${age} years old.`);

// Callbacks -> function which passes as a parameter into the function is known as callbacks.

// function print(cb) {
//   console.log(cb());
//   cb(); // 5
// }

// function cb() {
//   return 5;
// }

// print(cb);

// setTimeout and setInterval

// console.log("Hi, all!");

// setTimeout(cb, 5000);
// // setInterval(cb, 1000);

// function cb() {
//   console.log("hi, meenakshi");
// }

// console.log("So jao!");

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i));
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i));
// }

// let greet = { sayHello: "Hello" };
// let cheat = greet;

// cheat.sayHello = "Hi";

// console.log(cheat);

// eventloop in js video
// - Callstack
// - Microtask queue -> high priority wale
// - Macrotask queue -> setTimeout, setInterval

// this keyword
// Closures
// Callbacks hell
// Promises chaining
// Async & Await
// Oops
