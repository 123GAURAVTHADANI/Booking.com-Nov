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


