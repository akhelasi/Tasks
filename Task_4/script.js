// JavaScript

function rs() {
    let text = document.getElementById("text").value;
    const textArray = text.split(" ");
    text = "";

    for (let i = textArray.length - 1; i >= 0; i--) {
        text += textArray[i] + " "
    }

    const result = text;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function rw() {
    let text = document.getElementById("text").value;
    const textArray = text.split(" ");
    text = "";

    for (let i = 0; i < textArray.length; i++) {

        let word = textArray[i];
        const wordArray = word.split("");
        word = "";

        for (let i = wordArray.length - 1; i >= 0; i--) {
            word += wordArray[i];
        }

        text += word + " "
    }

    const result = text;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function rv() {
    let text = document.getElementById("text").value;
    let text1 = text.replaceAll("A", "");
    text = text1.replaceAll("a", "");
    text1 = text.replaceAll("E", "");
    text = text1.replaceAll("e", "");
    text1 = text.replaceAll("I", "");
    text = text1.replaceAll("i", "");
    text1 = text.replaceAll("O", "");
    text = text1.replaceAll("o", "");
    text1 = text.replaceAll("U", "");
    text = text1.replaceAll("u", "");
    const result = text;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function chul() {
    let text = document.getElementById("text").value;
    let text1 = "";


    for (let i = 0; i < text.length; i++) {
        let word = text[i];

        if (text.charCodeAt(i) < 123 && text.charCodeAt(i) > 96) {
            text1 += text[i].toUpperCase();

        } else if (text.charCodeAt(i) < 91 && text.charCodeAt(i) > 64) {
            text1 += text[i].toLowerCase();

        } else {
            text1 += text[i];
        }

    }

    const result = text1;
    document.getElementById("result").innerHTML = "Result: " + result;
}
