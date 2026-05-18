# Steps to Run the Project

## 1. Create Folder Structure

Arrange files like this:

```txt
project-folder/

│── server.js
│── package.json
│── package-lock.json
│
├── models/
│   └── User.js
│
└── routes/
    └── userRoutes.js
```

Move:
- `User.js` inside `models` folder
- `userRoutes.js` inside `routes` folder

---

## 2. Open Project in VS Code

Open the complete project folder in VS Code.

---

## 3. Open Terminal

In VS Code:

```txt
Terminal → New Terminal
```

---

## 4. Install Dependencies

Run this command:

```bash
npm install
```

---

## 5. Install MongoDB

Download and install MongoDB Community Server.

During installation:
- Select **Complete**
- Install **MongoDB Compass** also

---

## 6. Start MongoDB

Run:

```bash
mongod
```

OR start MongoDB service from Windows Services.

---

## 7. Database Connection

Your project connects to:

```txt
mongodb://localhost:27017/crud
```

This automatically creates database named:

```txt
crud
```

---

## 8. Run the Server

Run:

```bash
node server.js
```

You should see:

```txt
mongoose connected
server running at http://localhost:4000
```

---

## 9. Install Postman

Install Postman for API testing.

OR use Thunder Client extension in VS Code.

---

# 10. Test APIs

## Add User

### Method

```txt
POST
```

### URL

```txt
http://localhost:4000/add
```

### Body → raw → JSON

```json
{
  "name": "Shadow",
  "email": "shadow@gmail.com"
}
```

---

## Get All Users

### Method

```txt
GET
```

### URL

```txt
http://localhost:4000/users
```

---

## Update User

### Method

```txt
PUT
```

### URL

```txt
http://localhost:4000/update/<id>
```

Example:

```txt
http://localhost:4000/update/68123abc123
```

### Body

```json
{
  "name": "New Name",
  "email": "new@gmail.com"
}
```

---

## Delete User

### Method

```txt
DELETE
```

### URL

```txt
http://localhost:4000/delete/<id>
```

Example:

```txt
http://localhost:4000/delete/68123abc123
```

---

## 11. Important Code Improvement

Inside `userRoutes.js`

Replace:

```js
const user = require('../models/User');
```

with:

```js
const User = require('../models/User');
```

Then replace everywhere:

```js
new user()
user.find()
```

with:

```js
new User()
User.find()
```

---

# Final Commands

```bash
npm install
node server.js
```

Server runs on:

```txt
http://localhost:4000
```