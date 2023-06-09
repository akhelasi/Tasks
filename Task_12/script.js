/*   JavaScript   */

import * as THREE from './node_modules/three/src/Three.js';

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

// renderers
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x4d4d4d, 0);
document.body.appendChild( renderer.domElement );

// lighting
const ambientLight = new THREE.AmbientLight(0x4d4d4d);
scene.add(ambientLight);

// cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x900000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

// cube's rotation
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.003;
    cube.rotation.y += 0.006;
    cube.rotation.z += 0.009;
    renderer.render( scene, camera );
}
animate();