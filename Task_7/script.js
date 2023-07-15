//   JavaScript

let users;
let i;

window.addEventListener('load', function () {
    getText();
    i = 0;
});

async function getText() {
    let objects = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await objects.json();
}

function getUser() {
    document.getElementById("result").classList.remove("hide");
    document.getElementById("name").innerHTML = users[i].name;
    document.getElementById("email").innerHTML = users[i].email;
    document.getElementById("phone").innerHTML = users[i].phone;
    document.getElementById("website").innerHTML = users[i].website;

    i++;
    if (i > users.length - 1) i = 0;
}


