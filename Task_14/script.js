// JavaScript


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Load and parse the XML file
let xml = new XMLHttpRequest();
xml.open('GET', 'lines.xml', false);
xml.send();
let xmlStr = xml.responseText;
let xmlData = new DOMParser().parseFromString(xmlStr, 'text/xml');
let linesPoints = xmlData.getElementsByTagName("Points");

// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set( 0, 0, 80 );
camera.lookAt( 15, 2, 0 );

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a lines ( Create a material, Create a geometry, Create a mesh, Add the mesh to the scene )
for (let i = 0; i < linesPoints.length; i++) {
    let pointsData = linesPoints[i].getElementsByTagName('Point');
    let points = [];

    for (let j = 0; j < pointsData.length; j++) {
        let x = parseFloat(pointsData[j].getElementsByTagName('X')[0].textContent);
        let y = parseFloat(pointsData[j].getElementsByTagName('Y')[0].textContent);
        let z = parseFloat(pointsData[j].getElementsByTagName('Z')[0].textContent);
        points.push(new THREE.Vector3(x, y, z));
    }
    let lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial( {color:0xff0000, linewidth: 10});
    let line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
}

//Create OrbitalControl
const controls = new OrbitControls(camera, renderer.domElement);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
