// JavaScript


import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('grey');

// Create 3 3D Object
// Instantiate a loader
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();

dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
loader.setDRACOLoader(dracoLoader);

// Load a glTF resource
loader.load('./pixel-cut3.glb', function (gltf) {
        for (let i = 0; i < 3; i++) {
            const model1 = gltf.scene;
            model1.position.set(-2, 0, 0);
            scene.add(model1);
        }
    },
    // called while loading is progressing
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // called when loading has errors
    function (error) {
        console.log('An error happened' + error);
    }
);

loader.load('./pixel-cut3.glb', function (gltf) {
        for (let i = 0; i < 3; i++) {
            const model2 = gltf.scene;
            model2.position.set(0, 0, 0);
            scene.add(model2);
        }
    },
    // called while loading is progressing
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // called when loading has errors
    function (error) {
        console.log('An error happened' + error);
    }
);

loader.load('./pixel-cut3.glb', function (gltf) {
        for (let i = 0; i < 3; i++) {
            const model3 = gltf.scene;
            model3.position.set(2, 0, 0);
            scene.add(model3);
        }
    },
    // called while loading is progressing
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // called when loading has errors
    function (error) {
        console.log('An error happened' + error);
    }
);


// Create a camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);


// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
ambientLight.position.set(0, 0, 3)
scene.add(ambientLight);

//Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 0, 3)
scene.add(directionalLight);


//Create Raycaster and save mouse's cordinates
const raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();


function getRandomColor() {
    let color = new THREE.Color(); // create once and reuse it
    color.setHSL((Math.floor(Math.random() * 100)) / 100, (Math.floor(Math.random() * 100)) / 100, (Math.floor(Math.random() * 100)) / 100);
    return color;
}


//Return material's opaciti
function resetMaterials() {
    for (let i = 0; i < scene.children.length; i++) {
        if (scene.children[i].material) {
            scene.children[i].material.opacity = 1.0;
        }
    }
}

function objectOpacity() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.transparent = true;
        intersects[i].object.material.opacity = 0.5;
    }
}

function onMouseMove(event) {
    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

}

function onClick(event) {
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(scene.children);


    if (intersects.length > 0) {
        intersects[0].object.material.color.set(getRandomColor());
    }
}

//Events
window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('click', onClick);


//Create OrbitalControl
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;


//Create click on the button event
let AC = true;
const aroundCenter = document.getElementById('ac');
aroundCenter.addEventListener('click', () => {
    if (AC) {
        AC = false;
        controls.enabled = false;
    } else {
        AC = true;
        controls.enabled = true;
    }
});


let q = 0;

// Animation loop
function animate() {
    if (AC) {
        controls.update();
    } else {
        q += 0.01;

        let qSin = Math.sin(q);
        let qCos = Math.cos(q);

        let scaledCos = 10 * qCos;
        let scaledSin = 10 * qSin;

        camera.position.set(scaledCos, 5, scaledSin);
        camera.lookAt(0, 0, 0);
    }
    resetMaterials()
    objectOpacity()
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
