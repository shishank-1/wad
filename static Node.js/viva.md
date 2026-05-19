# Top 15 Viva Questions with Answers  
For Static Website using Node.js and Express.js

---

## 1. What is Node.js?

Node.js is a JavaScript runtime environment used to run JavaScript outside the browser. It is mainly used for server-side development.

---

## 2. What is Express.js?

Express.js is a web framework for Node.js that helps create servers and web applications easily.

---

## 3. Why do we use Express.js?

We use Express.js because:
- Easy routing
- Faster server creation
- Middleware support
- Simplifies backend development

---

## 4. What is a static website?

A static website contains fixed content like HTML, CSS, and JavaScript files that are directly served to the browser.

---

## 5. Which files are used in this project?

- `index.html`
- `server.js`

---

## 6. What is the role of `server.js`?

`server.js` creates the server and sends the HTML page to the browser.

---

## 7. What does `require()` do in Node.js?

`require()` is used to import modules or packages into the project.

Example:

```javascript
const express = require('express');
```

---

## 8. What is `app.get()`?

`app.get()` handles HTTP GET requests.

Example:

```javascript
app.get('/', (req, res) => {})
```

---

## 9. What is the meaning of `'/'` route?

`'/'` represents the home page or root URL.

Example:

```text
http://localhost:3000/
```

---

## 10. What is the use of `res.sendFile()`?

`res.sendFile()` sends a file from the server to the browser.

---

## 11. What is `__dirname` in Node.js?

`__dirname` gives the current project directory path.

---

## 12. What is a port number?

A port number is used for communication between the server and client.

Example:

```javascript
const PORT = 3000;
```

---

## 13. What happens when we run `node server.js`?

- Node.js starts the server
- Server listens on port 3000
- Website becomes accessible in browser

---

## 14. What is localhost?

`localhost` refers to the current computer acting as a server.

Example:

```text
http://localhost:3000
```

---

## 15. What are the advantages of Node.js?

Advantages:
- Fast execution
- Non-blocking architecture
- Uses JavaScript
- Scalable applications
- Lightweight

---

# Bonus Viva Questions

## What is middleware in Express.js?

Middleware is a function that runs between request and response processing.

---

## Difference between frontend and backend?

| Frontend | Backend |
|---|---|
| User interface | Server-side logic |
| HTML, CSS, JS | Node.js, Express |
| Runs in browser | Runs on server |

---

## What is npm?

npm (Node Package Manager) is used to install packages in Node.js projects.

Example:

```bash
npm install express
```

---

## Which protocol is used in web applications?

HTTP (HyperText Transfer Protocol)

---

## Which command initializes a Node.js project?

```bash
npm init -y
```