//   JavaScript

let snowArr = [];

window.addEventListener('load', function () {
    let snowCount = getRandom(35, 50);

    for (let i = 0; i < snowCount; i++) {
        snowArr.push(crateSnow());
    }
    Snows();

});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function crateSnow() {
    return {x: getRandom(0, 980)/10, y: getRandom(500, 600)/10};
}

function Snows() {
    let snowflakes = document.getElementById("snowflakes");
    let text = "";
    for (let i = 0; i < snowArr.length; i++) {
        text += ' <div ' + 'class="snow" ' + 'style="top: ' + snowArr[i].y + '%; left: ' + snowArr[i].x + '%; "></div>';
    }
    snowflakes.innerHTML = text;

    requestAnimationFrame(function snowFall(time){
        text = "";
        for (let i = 0; i < snowArr.length; i++) {
            if(snowArr[i].y >97) {
                snowArr[i].y = 0;
                snowArr[i].x = Math.floor(Math.random() * 97);
            }
            snowArr[i].y += (Math.floor(Math.random() * (6 - 2 + 1) + 2))/10;
            text += ' <div ' + 'class="snow" ' + 'style="top: ' + snowArr[i].y + '%; left: ' + snowArr[i].x + '%; "></div>';
        }
        snowflakes.innerHTML = text;
        requestAnimationFrame(snowFall);
    })
}
