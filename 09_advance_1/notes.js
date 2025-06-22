
// ## ✍️ **JavaScript - Synchronous vs Asynchronous & async/await**

// ### 🔸 1. **Synchronous JS**

// * Runs line by line (one task at a time)
// * Blocks next line until current finishes

// 📌 Example:

// ```js
// console.log("1");
// console.log("2");
// console.log("3");
// ```

// 🖨 Output:
// 1
// 2
// 3

// ---

// ### 🔸 2. **Asynchronous JS**

// * Doesn’t wait for long tasks (e.g. API, setTimeout)
// * Moves to next line immediately

// 📌 Example:

// ```js
// console.log("1");
// setTimeout(() => console.log("2"), 1000);
// console.log("3");
// ```

// 🖨 Output:
// 1
// 3
// 2 (after 1 sec)

// ---

// ### 🔸 3. **Promises**

// * Way to handle async results
// * 3 states: *pending → fulfilled / rejected*

// 📌 Example:

// ```js
// let p = new Promise((resolve, reject) => {
//   resolve("Success");
// });
// p.then(res => console.log(res));
// ```

// ---

// ### 🔸 4. **async / await**

// ✅ `async` ➝ marks a function as async (returns Promise)
// ✅ `await` ➝ pauses until Promise settles (like `.then()` but cleaner)

// 📌 Example:

// ```js
// async function greet() {
//   let res = await Promise.resolve("Hi");
//   console.log(res);
// }
// ```

// ---

// ### 🔸 5. **fetch() with then**

// ```js
// fetch('url')
//   .then(res => res.json())
//   .then(data => console.log(data));
// ```

// ### 🔸 fetch() with async/await

// ```js
// async function getData() {
//   let res = await fetch('url');
//   let data = await res.json();
//   console.log(data);
// }
// ```

// ---

// ### 🧠 Analogy:

// | Type         | Real-Life Example                   |
// | ------------ | ----------------------------------- |
// | Synchronous  | You stand in a line at a counter    |
// | Asynchronous | You take a token and wait elsewhere |

