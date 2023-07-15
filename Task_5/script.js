//   JavaScript

setInterval(format =>{
    let time = new Date();
    let a = "", b = "", c = "";

    if (time.getHours() < 10){
        a = "0";
    } else {
        a = "";
    }
    if (time.getMinutes() < 10){
        b = "0";
    } else {
        b = "";
    }
    if (time.getSeconds() < 10){
        c = "0";
    } else {
        c = "";
    }

    document.getElementById("real-time").innerHTML = a + time.getHours() + ":" + b + time.getMinutes() + ":" + c + time.getSeconds();

    if (time.getDate() < 10){
        a = "0";
    } else {
        a = "";
    }
    if (time.getMonth() < 9){
        b = "0";
    } else {
        b = "";
    }
    if (time.getFullYear() < 10){
        c = "0";
    } else {
        c = "";
    }
    document.getElementById("real-date").innerHTML = a + time.getDate() + "/" + b + (time.getMonth() + 1) + "/" + c + time.getFullYear();
},1000)




