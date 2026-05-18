# index.html

<!DOCTYPE html>
<html>
<head>
    <title>Student App</title>

    <link rel="stylesheet"
    href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css"/>
    <link rel="stylesheet" href="style.css">
    
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

</head>

<body>

<!-- HOME -->
<div data-role="page" id="home">

    <div data-role="header">
        <h1>Student App</h1>
    </div>

    <div role="main" class="ui-content">

        <h3>Welcome Student</h3>

        <p>Student Information Mobile App using jQuery Mobile.</p>

        <a href="#profile" class="ui-btn">Go to Profile</a>
        <a href="#subjects" class="ui-btn">Subjects</a>
        <a href="#attendance" class="ui-btn">Attendance</a>
        <a href="#contact" class="ui-btn">Contact</a>

    </div>

</div>

<!-- PROFILE -->
<div data-role="page" id="profile">

    <div data-role="header">
        <h1>Profile</h1>
    </div>

    <div role="main" class="ui-content">

        <p><b>Name:</b> Rahul Sharma</p>
        <p><b>Roll No:</b> 101</p>
        <p><b>Course:</b> BCA</p>

        <a href="#home" class="ui-btn">Back</a>

    </div>

</div>

<!-- SUBJECTS -->
<div data-role="page" id="subjects">

    <div data-role="header">
        <h1>Subjects</h1>
    </div>

    <div role="main" class="ui-content">

        <ul data-role="listview">
            <li>Web Dev</li>
            <li>Java</li>
            <li>DBMS</li>
            <li>Python</li>
        </ul>

        <a href="#home" class="ui-btn">Back</a>

    </div>

</div>

<!-- ATTENDANCE -->
<div data-role="page" id="attendance">

    <div data-role="header">
        <h1>Attendance</h1>
    </div>

    <div role="main" class="ui-content">

        <p>Web Dev - 90%</p>
        <p>Java - 85%</p>
        <p>Python - 92%</p>

        <a href="#home" class="ui-btn">Back</a>

    </div>

</div>

<!-- CONTACT -->
<div data-role="page" id="contact">

    <div data-role="header">
        <h1>Contact</h1>
    </div>

    <div role="main" class="ui-content">

        <form>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Send">
        </form>

        <a href="#home" class="ui-btn">Back</a>

    </div>

</div>

</body>
</html>

# style.css
body {
    font-family: Arial, sans-serif;
    color: #e42f2f;
    background-color: #5ca6de;
}

/* Header text color */
h1, h3 {
    color: #040f1a;
}

/* Button border + color */
.ui-btn {
    border: 1px solid #1e344a;
    color: #121416;
    background-color: #491515;
     border-radius: 8px;
}

/* Input fields border */
input, textarea {
    border: 1px solid #2c3e50;
}


# viva 
# jQuery Mobile – Viva Notes

## Definition

jQuery Mobile is a **touch-optimized web framework built on jQuery** that is used to create **responsive and mobile-friendly web applications**. It provides pre-built UI components like buttons, forms, and navigation systems, allowing developers to build apps that work smoothly on smartphones, tablets, and desktops using HTML5.

---

## Viva Questions & Answers

### 1. What is jQuery Mobile?
jQuery Mobile is a touch-optimized web framework built on jQuery used to develop responsive mobile web applications.

---

### 2. What is the main purpose of jQuery Mobile?
Its main purpose is to create mobile-friendly web pages and apps that work across all devices and screen sizes.

---

### 3. What are the key features of jQuery Mobile?
- Responsive design  
- Touch-friendly UI  
- Pre-built UI components  
- AJAX navigation  
- Theme support  

---

### 4. What is `data-role` in jQuery Mobile?
`data-role` is an HTML5 attribute used to define UI components like page, header, footer, button, etc.

---

### 5. What is a page in jQuery Mobile?
A page is a single screen layout defined using `data-role="page"`.

---

### 6. What is AJAX navigation in jQuery Mobile?
It allows loading pages without refreshing the entire browser, improving performance and user experience.

---

### 7. What is `data-theme`?
`data-theme` is used to apply predefined styles or themes to elements like buttons and pages.

---

### 8. What are UI components in jQuery Mobile?
They are ready-made elements like:
- Buttons  
- Lists  
- Forms  
- Dialogs  
- Navbars  

---

### 9. What is a button in jQuery Mobile?
A button is created using an anchor or input tag with `data-role="button"`.

---

### 10. What is the difference between jQuery and jQuery Mobile?
- **jQuery:** JavaScript library for DOM manipulation  
- **jQuery Mobile:** Framework for mobile UI development  

---

### 11. What is multi-page template in jQuery Mobile?
It allows multiple pages to exist in a single HTML file.

---

### 12. What is the use of `data-transition`?
It defines animation effects while moving between pages (like slide, fade, pop).

---

### 13. What is a listview?
Listview is a formatted list component used to display menu items or data lists.

---

### 14. Is jQuery Mobile still used today?
It is mostly outdated and not actively maintained, but still used for learning and simple projects.

---

### 15. What are alternatives to jQuery Mobile?
- Bootstrap  
- Ionic Framework  
- React Native  
- Flutter  