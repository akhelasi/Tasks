// JavaScript

import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

// Instantiate a loader
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();

dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
loader.setDRACOLoader(dracoLoader);

//color for models
let modelcolor = 0x777777;

// Load a glTF resource
loader.load('./light.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(-8, 0, 0);

        // Traverse through the object hierarchy and set material color
        model.traverse(function (child) {
            if (child.isMesh) {
                child.material.color.set(modelcolor); // Set color to red (hex value)
            }
        });

        scene.add(model);
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

loader.load('./medium.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, 0);

        // Traverse through the object hierarchy and set material color
        model.traverse(function (child) {
            if (child.isMesh) {
                child.material.color.set(modelcolor); // Set color to red (hex value)
            }
        });

        scene.add(model);    },
    // called while loading is progressing
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // called when loading has errors
    function (error) {
        console.log('An error happened' + error);
    }
);

loader.load('./complex.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(8, 0, 0);

        // Traverse through the object hierarchy and set material color
        model.traverse(function (child) {
            if (child.isMesh) {
                child.material.color.set(modelcolor); // Set color to red (hex value)
            }
        });

        scene.add(model);
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
camera.position.set(0, 15, 10);
camera.lookAt(0, 0, 0);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Directional light
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(0, 20, 0)
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight2.position.set(0, -20, 0)
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight3.position.set(20, 0, 0)
scene.add(directionalLight3);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight4.position.set(-20, 0, 0)
scene.add(directionalLight4);

const directionalLight5 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight5.position.set(0, 0, 20)
scene.add(directionalLight5);

const directionalLight6 = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight6.position.set(0, 0, -20)
scene.add(directionalLight6);


//Create OrbitalControl
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;


// Animation loop
function animate() {
    controls.update();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
