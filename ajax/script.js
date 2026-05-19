// empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

// form submit
document.getElementById("myForm").addEventListener("submit", function(e){

    e.preventDefault();

    // get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // object create
    let user = {
        name: name,
        email: email,
        password: password
    };

    // push into array
    users.push(user);

    // save in local storage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST METHOD
    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)

    })
    .then(response => response.json())
    .then(data => {

        alert("Registration Successful");

        // next page
        window.location.href = "list.html";

    });

});