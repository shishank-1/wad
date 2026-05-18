# index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Dashboard</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Sidebar -->
    <div class="sidebar">

        <h2 class="logo">Dashboard</h2>

        <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Exams</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Settings</a></li>
        </ul>

    </div>

    <!-- Main Content -->
    <div class="main-content">

        <!-- Navbar -->
        <div class="topbar">
            <h3>College Admin Dashboard</h3>

            <button class="admin-btn">
                Admin
            </button>
        </div>

        <!-- Cards -->
        <div class="container-fluid mt-4">

            <div class="row">

                <div class="col-md-3 mb-4">
                    <div class="card-box blue">
                        <h5>Total Students</h5>
                        <h2>1250</h2>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card-box green">
                        <h5>Total Courses</h5>
                        <h2>45</h2>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card-box orange">
                        <h5>Exams Scheduled</h5>
                        <h2>18</h2>
                    </div>
                </div>

                <div class="col-md-3 mb-4">
                    <div class="card-box red">
                        <h5>Pending Fees</h5>
                        <h2>$12K</h2>
                    </div>
                </div>

            </div>

            <!-- Table -->
            <div class="table-section">

                <h4>Recent Student Activity</h4>

                <table class="table table-bordered table-hover">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>101</td>
                            <td>Shishank</td>
                            <td>BE</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>102</td>
                            <td>Shivanshu</td>
                            <td>MCA</td>
                            <td>Pending</td>
                        </tr>

                        <tr>
                            <td>103</td>
                            <td>Sidhant</td>
                            <td>B.Tech</td>
                            <td>Active</td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    </div>

</body>

</html>

# style.css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

/* Sidebar */

.sidebar {
    width: 220px;
    height: 100vh;
    background-color: #343a40;
    position: fixed;
    padding-top: 20px;
}

.logo {
    color: white;
    text-align: center;
    margin-bottom: 30px;
}

.sidebar h2{
    text-align: center;
    margin-top: 20px;
}

.sidebar ul{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    list-style: none;
    padding: 0;
}

.sidebar ul li {
    padding: 12px 20px;
}

.sidebar ul li a {
    color: white;
    text-decoration: none;
    display: block;
}

.sidebar ul li a:hover {
    background-color: #495057;
    padding-left: 10px;
    transition: 0.3s;
}

.active {
    background-color: #0d6efd;
    border-radius: 5px;
}

/* Main Content */

.main-content {
    margin-left: 220px;
    padding: 20px;
}

/* Topbar */

.topbar {
    background-color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

.admin-btn {
    background-color: #0d6efd;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
}

/* Cards */

.card-box {
    padding: 20px;
    color: white;
    border-radius: 8px;
    text-align: center;
}

.blue {
    background-color: #0d6efd;
}

.green {
    background-color: #198754;
}

.orange {
    background-color: #fd7e14;
}

.red {
    background-color: #dc3545;
}

/* Table */

.table-section {
    background-color: white;
    padding: 20px;
    margin-top: 30px;
    border-radius: 8px;
}

.table-section h4 {
    margin-bottom: 20px;
}


## question viva 
````md
# HTML Viva Questions and Answers

## 1. What is HTML?
HTML is the language used to create and structure web pages.

## 2. What does HTML stand for?
HyperText Markup Language

## 3. Is HTML a programming language?
No, it is a markup language, not a programming language.

## 4. What is a tag in HTML?
A tag is a keyword inside angle brackets, like `<p>` or `<h1>`.

## 5. What is an HTML element?
An element is a complete unit like:

```html
<p>Hello</p>
````

## 6. What is the basic structure of HTML?

```html
<html>
<head></head>
<body></body>
</html>
```

## 7. What is `<head>` used for?

It contains page info like title, links, and metadata.

## 8. What is `<body>` used for?

It contains visible content like text, images, and videos.

## 9. What is a hyperlink?

A clickable link that takes you to another page:

```html
<a href="page.html">Click here</a>
```

## 10. What is an image tag?

Used to show images:

```html
<img src="image.jpg">
```

## 11. What is a heading tag?

Used for titles:

```html
<h1>Big Heading</h1>
```

## 12. What is a paragraph tag?

Used for text:

```html
<p>This is text</p>
```

## 13. What is an attribute?

Extra information in a tag, like `href` or `src`.

## 14. What is HTML used for?

To build websites and structure web content.

## 15. What is the latest version of HTML?

HTML5

---

# CSS Viva Questions and Answers

## 1. What is CSS?

CSS (Cascading Style Sheets) is used to style and design web pages.

## 2. What does CSS stand for?

Cascading Style Sheets

## 3. What is CSS used for?

To control colors, layout, fonts, spacing, and design of HTML pages.

## 4. Why is CSS important?

It makes websites look attractive and user-friendly.

## 5. How do you add CSS to HTML?

Three ways:

* Inline CSS
* Internal CSS
* External CSS

## 6. What is inline CSS?

CSS written inside an HTML tag:

```html
<p style="color:red;">Hello</p>
```

## 7. What is internal CSS?

CSS written inside `<style>` in HTML `<head>`.

## 8. What is external CSS?

CSS written in a separate `.css` file.

## 9. What is a CSS selector?

It selects HTML elements to style, like `p`, `h1`, `.class`, `#id`.

## 10. What is a class in CSS?

Used to style multiple elements:

```html
<p class="text"></p>
```

## 11. What is an ID in CSS?

Used for a single unique element:

```html
<p id="title"></p>
```

## 12. What is the difference between class and ID?

* Class → multiple elements
* ID → one unique element

## 13. What is a property in CSS?

A feature you want to change, like `color`, `font-size`, `margin`.

## 14. What is a value in CSS?

The setting of a property:

```css
color: blue;
```

## 15. What is the latest version of CSS?

CSS3

## 16. What is a CSS box model?

The box model describes:
**content + padding + border + margin**

## 17. What is padding in CSS?

Space inside an element between content and border.

## 18. What is margin in CSS?

Space outside an element between it and other elements.

## 19. What is a CSS background property?

Used to set background color or image of an element.

```css
body {
  background-color: lightblue;
}
```

## 20. What is responsive design in CSS?

Making websites work on all devices using flexible layouts and media queries.

---

# Bootstrap Viva Questions and Answers

## 1. What is Bootstrap?

Bootstrap is a free framework used to design responsive websites quickly.

## 2. Why is Bootstrap used?

To build mobile-friendly and responsive websites easily.

## 3. Is Bootstrap free?

Yes, it is completely free and open-source.

## 4. What are Bootstrap components?

Ready-made UI parts like buttons, forms, navbars, and cards.

## 5. What is a Bootstrap grid system?

A layout system using rows and columns (12-column structure).

## 6. What is a container in Bootstrap?

A container holds website content and gives proper spacing.

## 7. What is a row in Bootstrap?

A horizontal group of columns.

## 8. What is a column in Bootstrap?

A vertical section inside a row.

## 9. What is a responsive website?

A website that adjusts to all screen sizes (mobile, tablet, desktop).

## 10. What is a Bootstrap class?

Predefined CSS classes like `btn`, `container`, `row`.

## 11. What is a navbar?

A navigation bar used for menus and links.

## 12. What are Bootstrap buttons?

Styled buttons using classes like:

```html
<button class="btn btn-primary">Click</button>
```

## 13. What is Bootstrap CDN?

A link to use Bootstrap without downloading files.

## 14. What is mobile-first design?

Designing for mobile screens first, then larger screens.

## 15. What is the latest version of Bootstrap?

Bootstrap 5

## 16. What is a Bootstrap card?

A flexible content box used to display text, images, and buttons.

## 17. What is a Bootstrap modal?

A popup window used to show messages or forms.

## 18. What are Bootstrap utilities?

Pre-made helper classes like margin, padding, text color, and alignment.

Example:

```html
<div class="text-center">Hello</div>
```

## 19. What is a breakpoint in Bootstrap?

Screen size limits where layout changes (mobile, tablet, desktop).

## 20. What is the difference between Bootstrap 4 and Bootstrap 5?

* Bootstrap 5 does not use jQuery
* Bootstrap 5 has better grid and utilities
* Bootstrap 5 is faster and more modern

```
```
