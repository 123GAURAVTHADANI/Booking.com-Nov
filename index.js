// function orderLenskart() {
//   return "Ordering from Lenskart";
// }

// function orderDominos(callback) {
//   console.log("Ordering from Dominos");
//   return callback();
// }

// console.log(orderDominos(orderLenskart));

// const createPromise = (resolve, reject) => {
//   let simran_percentage = 89;
//   if (simran_percentage > 90) {
//     resolve("Simran will buy a new scooty");
//   } else {
//     reject("Simran will not buy a new scooty");
//   }
// };
// const handleResolve = (message) => {
//   console.log(message);
// };

// let promise2 = new Promise(createPromise);

// promise2
//   .then(() => 5)
//   .then((x) => x * 2)
//   .then((x) => x - 3)
//   .then((x) => x / 2)
//   .then((x) => console.log(x))
//   .catch((error) => {
//     console.log(error);
//   })
//   .then(() => {
//     console.log("This will run regardless of the previous promise's outcome.");
//   });

// promise2.then(handleResolve).catch((error) => {
//   console.log(error);
// });

// 1 sec
// 1.05 second

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   });

// let promise1 = fetch("https://jsonplaceholder.typicode.com/todos").then(
//   (response) => response.json(),
// );
// let promise2 = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (response) => response.json(),
// );
// let promise3 = fetch("https://jsonplaceholder.typicode.com/comments").then(
//   (response) => response.json(),
// );

// Promise.race([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise1.then((text) => {
//   console.log(text);
// });

// let promise2 = Promise.reject("Promise 2 rejected");
// promise2.catch((error) => {
//   console.log(error);
// });

// CRUD = Ceate, Read, Update, Delete
// fetch("https://dummyjson.com/products", {
//   method: "DELETE",
//   body: JSON.stringify({
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//   }),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   });

// async await

// async function handlePromise(){
//     try
//     let promise1 = Promise.resolve("Promise 1 resolved");
// }

// async await ; dom manipulation

// fetch , map method (Youtube) - array.
// Prototypes in js , filter , reduce

// debouncing

// let promise1 = new Promise((res) => res("Hellooo"));

// promise1
//   .then((res) => console.log(res))
//   .catch((rej) => console.log("error:", rej));

//   .then((res) => res.json())
//   .then(console.log)
//   .catch((error) => console.log(error));

// const handleGetService = async (url) => {
//   try {
//     let response = await fetch(url);
//     let result_json = await response.json();
//     return result_json;
//   } catch (error) {
//     throw error;
//   }
// };

// const handleApiCall = async () => {
//   try {
//     let getData = await handleGetService(
//       "https://dummyjson.com/products?sortBy=title&order=asc",
//     );
//     console.log(getData);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// const handleSecondApiCall = async () => {
//   try {
//     let getData = await handleGetService(
//       "https://dummyjson.com/products/categories",
//     );
//     console.log(getData);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// handleApiCall();

// handleSecondApiCall();

// function handleTest() {
//   try {
//     const a = 10;
//     a = 100;
//   } catch (error) {
//     console.dir(error);
//   }
// }
// handleTest();

// higher order functions in js !!!

//  HOF

// let array = [10, 8, 4, 20];

// let accumulator = 1;
// for (let i = 0; i < array.length; i++) {
//   accumulator = accumulator * array[i];
// }
// console.log(accumulator);

// console.log(array.reduce((item, acc) => item * acc, 1));

// console.log(array.every((item) => item > 10));

// function handleFilter(item) {
//   return item == 10;
// }

// console.log(array.filter(handleFilter));

// function callbackFnc(item) {
//   console.log(item * 15);
// }

// console.log(array.map((item) => item + 2));

// DOM Manipulation & Prototypes !!!

// let array = [1, 2, 3, [5, 91, [6, [19, [21, [900, [76, [10001]]]]]]]];

// console.log(array.flat(5));

// SQL = 2 days
// NoSQL = 2 days
// Node = 2 days
// Express = 3 days

// 10 weeks

// frontend = 6 weeks

// Next Js = 2 weeks

// project (backend API, frontend React Components !!)

// DSA (15 mins) - 1 array (leetcode) 8 - 10 (doubt session)
// strings
// recursion
// stacks
// linkedList
// map
// trees
// graphs (DFS and BFS)

// setTimeout(() => {
//   console.log("hello!!!!!");
// }, 1000);

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 1000);
// console.log("Second Console");

// Promise.resolve("promise 1").then((res) => console.log(res));

// let promise1 = new Promise((resolve, reject) => {
//   console.log("Inside the promise");
//   resolve("Promiseeeeeeee!!!");
// });

// promise1.then((res) => console.log(res));

// Promise.reject("promise 2")
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// console.log("End");

// start
// second console
// end
// promise 1
// promise 2
// timeout 2
// timeout 1

// let abc = [1, 2, 3];

// Array.prototype.meriMarzi = 19;

// console.log(xyz.meriMarzi);

// Hidden Properties
// Shared Properties

// let person = {
//   name: "Tasnia",
//   age: 24,
// };

// Object.setPrototypeOf(person, { school: "PW SKILLS" });

// person.__proto__ = { school: "PW SKILLS" };
// console.log(person.school);

// console.log(person.__proto__);

// let array = [10];

// let new_array = [11, 19];

// Array.prototype.name = "Ganesh";
// console.log(Object.getPrototypeOf(person));

// let person = {
//   name: "Tasnia",
//   age: 24,
// };

// let new_person = Object.create(person);

// console.log(new_person);

// this keyword ??

// const person = {
//   name: "Tasnia",
//   age: 29,
//   getName: () => {
//     console.log(this.name);
//   },
// };

// person.getName();

// console.log(this);

// function handleGanesh() {
//   console.log(this);
// }

// handleGanesh();

// const handleGETRequest = () => {
//   console.log(this);
// };

// handleGETRequest();

// 20 mins - DOM Manipulation
// SQL - 2.5 days (DBMS)
