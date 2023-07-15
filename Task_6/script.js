//   JavaScript

let cubeArr = [];
let id;

window.addEventListener('load', function () {
    let cubeCount = getRandomNumber(3, 10);
    id = 0;

    for (let i = 0; i < cubeCount; i++) {
        cubeArr.push(CrateCube());
    }
    openCubes();

});

function CrateCube() {
    id++;
    return {id: id, size: getRandomSize(), color: getRandomColor()};
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomSize() {
    return Math.floor(Math.random() * (130) + 20);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function openCubes() {
    let cubes = document.getElementById('cubes');
    let text = "";
    for (let i = 0; i < cubeArr.length; i++) {
        text += ' <div ' + 'class="cube" ' + 'style="width: ' + cubeArr[i].size + 'px; height: ' + cubeArr[i].size + 'px; background: ' + cubeArr[i].color + ';"></div>';
    }
    cubes.innerHTML = text;
}


function shiftCube() {
    cubeArr.shift();
    openCubes();
}

function unshiftCube() {
    cubeArr.unshift(CrateCube());
    openCubes();
}

function popCube() {
    cubeArr.pop();
    openCubes();
}

function pushCube() {
    cubeArr.push(CrateCube());
    openCubes();
}

function deleteCube() {
    cubeArr.splice(Math.floor(Math.random() * (cubeArr.length)), 1);
    openCubes();
}

function sortCube() {
    console.log(cubeArr);
    let sortArr = [];

    while (0 < cubeArr.length) {
        let long = cubeArr.length;
        let max = long-1;

        for (let j = long-1; j >= 0; j--) {
            if (cubeArr[j].size > cubeArr[max].size) {
                max = j;
            }
        }
        sortArr.unshift(cubeArr[max]);
        cubeArr.splice(max,1);

    }
    cubeArr = sortArr;
    console.log(cubeArr);

    openCubes();
}


