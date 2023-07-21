// JavaScript


import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('grey');


// Create a camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 15);
camera.lookAt(0, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Create Raycaster and save mouse's cordinates
const raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();


function getRandomColor() {
    let color = new THREE.Color(); // create once and reuse it
    color.setHSL((Math.floor(Math.random() * 100)) / 100, (Math.floor(Math.random() * 100)) / 100, (Math.floor(Math.random() * 100)) / 100);
    return color;
}

//Create 3 cubes
const geometry = new THREE.BoxGeometry(1, 1, 1);

for (let i = 0; i < 3; i++) {
    const material = new THREE.MeshBasicMaterial({color: 0x900000});
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(i * 2 - 2, 0, 0);
    scene.add(cube)
}


function resetMaterials() {
    for (let i = 0; i < scene.children.length; i++) {
        if (scene.children[i].material) {
            scene.children[i].material.opacity = 1.0;
        }
    }
}

function cubeOpacity() {
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
controls.target.set(0, 0, 0);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    resetMaterials()
    cubeOpacity()
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
