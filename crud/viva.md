npm install
node server.js

# Top 15 Node.js Questions with Answers

---

## 1. What is Node.js?

Node.js is an open-source JavaScript runtime environment built on Chrome’s V8 engine. It is used to run JavaScript outside the browser and mainly used for server-side development.

---

## 2. What are the features of Node.js?

- Asynchronous and non-blocking
- Event-driven architecture
- Fast execution using V8 engine
- Single-threaded
- Scalable
- Cross-platform
- Open-source

---

## 3. Explain the architecture of Node.js.

Node.js follows:
- Single-threaded architecture
- Event loop mechanism
- Non-blocking I/O model

It can handle multiple client requests using events without creating multiple threads.

---

## 4. What is event-driven programming in Node.js?

In event-driven programming, actions are performed when events occur.

Example:
- Button click
- File read completion
- API request

Node.js uses an Event Loop to manage events efficiently.

---

## 5. What is non-blocking I/O in Node.js?

Non-blocking I/O means Node.js does not wait for one task to complete before starting another task.

Example:
- While reading a file, Node.js can process another request simultaneously.

This improves performance and speed.

---

## 6. Difference between synchronous and asynchronous methods.

| Synchronous | Asynchronous |
|---|---|
| Executes line by line | Executes without waiting |
| Blocking | Non-blocking |
| Slower | Faster |
| Example: readFileSync() | Example: readFile() |

---

## 7. What is npm in Node.js?

npm (Node Package Manager) is used to install and manage packages/modules in Node.js.

Example:

```bash
npm install express
```

---

## 8. What is a module in Node.js?

A module is a reusable block of code.

Types:
- Core modules
- Local modules
- Third-party modules

Example:

```js
const fs = require('fs');
```

---

## 9. Difference between `require()` and `import`.

| require() | import |
|---|---|
| CommonJS module | ES6 module |
| Used in Node.js | Used in modern JavaScript |
| Dynamic loading | Static loading |

Example:

```js
const express = require('express');
```

```js
import express from 'express';
```

---

## 10. What is middleware in Express.js?

Middleware is a function that executes between request and response.

Uses:
- Authentication
- Logging
- Error handling
- Parsing JSON

Example:

```js
app.use(express.json());
```

---

## 11. What is Express.js and why is it used?

Express.js is a web framework for Node.js.

It is used for:
- Creating APIs
- Handling routes
- Middleware management
- Building web applications

---

## 12. What is routing in Express.js?

Routing defines how application responds to client requests.

Example:

```js
app.get('/home', (req, res) => {
   res.send("Home Page");
});
```

---

## 13. How to connect MongoDB with Node.js?

Using Mongoose.

Example:

```js
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test")
.then(() => console.log("Connected"));
```

---

## 14. What are CRUD operations in Node.js?

CRUD means:

- Create → Add data
- Read → Fetch data
- Update → Modify data
- Delete → Remove data

Used in database applications.

---

## 15. Explain REST API in Node.js.

REST API is an interface that allows communication between client and server using HTTP methods.

Methods:
- GET
- POST
- PUT
- DELETE

Example:

```js
app.get('/users', (req, res) => {
   res.send("Users Data");
});
```


# Top 15 Express.js Questions with Answers

---

## 1. What is Express.js?

Express.js is a fast and lightweight web framework for Node.js used to build web applications and REST APIs.

---

## 2. Why is Express.js used?

Express.js is used because it:
- Simplifies server creation
- Handles routing easily
- Supports middleware
- Helps create APIs quickly
- Improves application performance

---

## 3. How to install Express.js?

Install using npm:

```bash
npm install express
```

---

## 4. How to import Express.js?

Example:

```js
const express = require('express');
```

---

## 5. How to create a server using Express.js?

Example:

```js
const express = require('express');

const app = express();

app.listen(3000, () => {
   console.log("Server Running");
});
```

---

## 6. What is routing in Express.js?

Routing defines how the server responds to client requests.

Example:

```js
app.get('/', (req, res) => {
   res.send("Home Page");
});
```

---

## 7. What are HTTP methods in Express.js?

Common HTTP methods:
- GET → Read data
- POST → Insert data
- PUT → Update data
- DELETE → Remove data

---

## 8. What is middleware in Express.js?

Middleware is a function that executes between request and response.

Uses:
- Authentication
- Logging
- Validation
- Error handling

Example:

```js
app.use(express.json());
```

---

## 9. What is `express.json()`?

`express.json()` is middleware used to parse incoming JSON data from request body.

Example:

```js
app.use(express.json());
```

---

## 10. Difference between `app.use()` and `app.get()`.

| `app.use()` | `app.get()` |
|---|---|
| Used for middleware | Used for GET request |
| Executes for all requests | Executes only for GET |
| General purpose | Route specific |

---

## 11. What is REST API in Express.js?

REST API allows communication between client and server using HTTP methods.

Example:
- GET
- POST
- PUT
- DELETE

---

## 12. What is the use of `req` and `res` objects?

- `req` → contains client request data
- `res` → sends response to client

Example:

```js
app.get('/', (req, res) => {
   res.send("Hello");
});
```

---

## 13. What is route parameter in Express.js?

Route parameter is used to pass dynamic values in URL.

Example:

```js
app.get('/user/:id', (req, res) => {
   res.send(req.params.id);
});
```

---

## 14. What is the difference between `res.send()` and `res.json()`?

| `res.send()` | `res.json()` |
|---|---|
| Sends any type of response | Sends JSON response |
| Can send text or HTML | Sends JavaScript object |

Example:

```js
res.send("Hello");
```

```js
res.json({name: "Shadow"});
```

---

## 15. How to connect MongoDB with Express.js?

Using Mongoose.

Example:

```js
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test")
.then(() => console.log("Connected"));
```

---