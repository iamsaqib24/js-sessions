// eventloop in js video
// - Callstack
// - Microtask queue -> high priority wale
// - Macrotask queue -> setTimeout, setInterval

// console.log(1);
// console.log(2);

// function log() {
//   console.log(3);
// }

// function logAgain() {
//   log();
//   console.log(4);
// }

// console.log(5);
// logAgain();
// console.log(6);

// function apple() {
//   console.log("Hello, apple!");
// }

// apple.model = "M1";

// console.log(apple());

// function sayHello() {
//   console.log(name); // Undefined
//   console.log(age); // ReferenceType error

//   let age = 28;
//   var name = "Saqib";
// }

// console.log(sayHello());

// var name = "Komal";
// var name = "Khushi";

// console.log(name);

// for (let i = 0; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }

// for (let i = 0; i < 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }

// function sayHi() {
//   return (() => "Nitish")();
// }

// console.log(typeof sayHi());
// console.log(typeof 0);

// const one = () => console.log(1);

// const two = () =>
//   setTimeout(() => {
//     console.log(2);
//   });

// const three = () => console.log(3);

// three(); // 3
// two(); //
// one(); // 1

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("worked!");
    console.log("timerEnd");
  }, 4000);
});

console.log(2);

promise.then((response) => {
  console.log(response);
});

console.log(3);

// 1 2 3 timerStart timerEnd worked

// function p1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error in p1"), 1000);
//   }).catch((error) => {
//     console.error(error);
//   })
// }

// function p2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("p2 resolved"), 1000);
//   });
// }

// function pAll() {
//   Promise.all([p2(), p1()])
//     .then((results) => {
//       console.log("All data resolved:", results);
//     })
//     .catch((error) => {
//       console.error("Error resolving data:", error);
//     });
// }

// pAll();
