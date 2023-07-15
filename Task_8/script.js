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

function changeTheme() {
    if(document.getElementById("theme").classList.contains("light")) {
        document.getElementById("theme").classList.remove("light");
        document.getElementById("theme").classList.add("dark");
        document.getElementById("container").classList.remove("darkContainer");
        document.getElementById("container").classList.add("lightContainer");
        document.getElementById("table").classList.remove("darkTable");
        document.getElementById("table").classList.add("lightTable");
        document.getElementById("result").classList.remove("darkResult");
        document.getElementById("result").classList.add("lightResult");
        document.getElementById("getUser").classList.remove("darkGetUser");
        document.getElementById("getUser").classList.add("lightGetUser");
    } else {
        document.getElementById("theme").classList.remove("dark");
        document.getElementById("theme").classList.add("light");
        document.getElementById("container").classList.remove("lightContainer");
        document.getElementById("container").classList.add("darkContainer");
        document.getElementById("table").classList.remove("lightTable");
        document.getElementById("table").classList.add("darkTable");
        document.getElementById("result").classList.remove("lightResult");
        document.getElementById("result").classList.add("darkResult");
        document.getElementById("getUser").classList.remove("lightGetUser");
        document.getElementById("getUser").classList.add("darkGetUser");
    }
}
