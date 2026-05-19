# Top 15 JavaScript Interview Questions

## 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web applications. It runs in browsers and also on servers using Node.js.

---

## 2. Difference between `var`, `let`, and `const`

| Keyword | Scope | Reassign | Redeclare |
|----------|--------|-----------|------------|
| `var`    | Function | Yes | Yes |
| `let`    | Block | Yes | No |
| `const`  | Block | No | No |

### Example

```js
let age = 25;
age = 30;

const name = "John";
// name = "Mike"; // Error
```

---

## 3. What is hoisting in JavaScript?

Hoisting means variable and function declarations are moved to the top of their scope before execution.

### Example

```js
console.log(a); // undefined
var a = 5;
```

Functions are fully hoisted:

```js
greet();

function greet() {
  console.log("Hello");
}
```

---

## 4. What is the difference between `==` and `===`?

- `==` → compares values only
- `===` → compares value and datatype

### Example

```js
5 == "5"   // true
5 === "5"  // false
```

---

## 5. What are closures?

A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

### Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
```

---

## 6. What is the difference between `null` and `undefined`?

| `null` | `undefined` |
|--------|--------------|
| Intentional empty value | Variable declared but not assigned |
| Object type | Undefined type |

### Example

```js
let a;
console.log(a); // undefined

let b = null;
```

---

## 7. What is an arrow function?

Arrow functions provide shorter syntax for writing functions.

### Example

```js
const add = (a, b) => a + b;
```

### Difference

- Arrow functions do not have their own `this`.

---

## 8. What is the DOM?

DOM (Document Object Model) represents the HTML page as objects that JavaScript can manipulate.

### Example

```js
document.getElementById("title").innerHTML = "Hello";
```

---

## 9. What is event bubbling?

Event bubbling means an event starts from the target element and bubbles upward to parent elements.

### Example

```js
div.addEventListener("click", () => {
  console.log("Div clicked");
});
```

---

## 10. What are promises in JavaScript?

Promises handle asynchronous operations.

### States

- Pending
- Resolved
- Rejected

### Example

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then(data => console.log(data));
```

---

## 11. Difference between synchronous and asynchronous code

### Synchronous

Executes line by line.

### Asynchronous

Does not block execution.

### Example

```js
setTimeout(() => {
  console.log("Async");
}, 1000);

console.log("Sync");
```

---

## 12. What is `this` keyword?

`this` refers to the object that is executing the current function.

### Example

```js
const person = {
  name: "Sam",
  greet() {
    console.log(this.name);
  }
};
```

---

## 13. What is callback function?

A callback is a function passed into another function as an argument.

### Example

```js
function greet(name, callback) {
  console.log(name);
  callback();
}

greet("John", () => {
  console.log("Callback executed");
});
```

---

## 14. What is the difference between `map()` and `forEach()`?

| `map()` | `forEach()` |
|----------|-------------|
| Returns new array | Does not return array |
| Used for transformation | Used for iteration |

### Example

```js
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
```

---

## 15. What is async/await?

`async/await` simplifies working with promises.

### Example

```js
async function fetchData() {
  const response = await fetch("api-url");
  const data = await response.json();

  console.log(data);
}
```

---

# Bonus Advanced Questions

- Explain event loop
- What is prototypal inheritance?
- Difference between shallow copy and deep copy
- Explain debounce and throttle
- What are higher-order functions?
- Explain call, apply, and bind
- What is currying?
- Difference between localStorage and sessionStorage

---

# Helpful Learning Resources

- MDN JavaScript Docs  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript

- JavaScript.info  
  https://javascript.info

- Node.js Official Website  
  https://nodejs.org

  ````md id="7hl4y4"
## 16. What is the difference between Promises and async/await?

| Promises | async/await |
|----------|-------------|
| Uses `.then()` and `.catch()` | Uses cleaner synchronous-looking syntax |
| Harder to read for complex chains | Easier to read and maintain |
| Introduced in ES6 | Introduced in ES8 |

### Promise Example

```js
fetch("api-url")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### async/await Example

```js
async function getData() {
  try {
    const response = await fetch("api-url");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

---

## 17. How does error handling work in async/await?

Errors in `async/await` are handled using `try...catch`.

### Example

```js
async function fetchUser() {
  try {
    const response = await fetch("wrong-url");

    if (!response.ok) {
      throw new Error("Network Error");
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchUser();
```

### Key Points

- `try` block contains async code  
- `catch` block handles errors  
- Makes asynchronous error handling easier and cleaner
````
