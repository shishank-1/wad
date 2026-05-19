````md
# AJAX (Asynchronous JavaScript and XML)

## What is AJAX?

**AJAX (Asynchronous JavaScript and XML)** is a technique used in web development to send and receive data from a server **without reloading the entire web page**.

Even though it contains "XML" in the name, modern applications mostly use **JSON** instead of XML.

### Benefits:
- Faster web applications
- No full page reload
- Better user experience
- Asynchronous communication with server

---

## How AJAX Works

1. Browser sends request to server in background
2. Server processes the request
3. Server sends response (JSON/XML)
4. JavaScript updates the webpage dynamically

---

## AJAX Example (Fetch API - Modern Way)

```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

---

## AJAX Example (XMLHttpRequest - Old Way)

```js
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/data", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.send();
```

---

## Key Features of AJAX

- Asynchronous communication
- No page reload required
- Works in background
- Supports HTTP methods like GET, POST, PUT, DELETE

---

# AJAX Interview Questions

## 1. What is AJAX?
AJAX is a technique used to send and receive data from a server asynchronously without refreshing the page.

---

## 2. Is AJAX a programming language?
No. AJAX is not a language. It is a combination of:
- JavaScript
- HTML
- CSS
- XMLHttpRequest or Fetch API

---

## 3. What are the technologies used in AJAX?
- JavaScript
- DOM
- JSON/XML
- XMLHttpRequest or Fetch API

---

## 4. Difference between AJAX and traditional web requests?

| AJAX | Traditional Request |
|------|---------------------|
| No page reload | Full page reload |
| Faster | Slower |
| Asynchronous | Synchronous |

---

## 5. What are the advantages of AJAX?
- Faster user experience
- Reduced server load
- Partial page updates
- Better interactivity

---

## 6. What are the disadvantages of AJAX?
- SEO challenges in some cases
- Browser history issues
- Requires JavaScript enabled

---

## 7. What is XMLHttpRequest?
It is a built-in JavaScript object used to make HTTP requests in AJAX (older approach).

---

## 8. Difference between AJAX and Fetch API?

| AJAX (XHR) | Fetch API |
|------------|-----------|
| Older approach | Modern approach |
| Callback-based | Promise-based |
| Complex syntax | Cleaner syntax |

---

## 9. Can AJAX send POST requests?
Yes. AJAX can send both GET and POST requests to the server.

---

## 10. What data formats are used in AJAX?
- JSON (most common)
- XML (older)
- HTML / Text

---
````
