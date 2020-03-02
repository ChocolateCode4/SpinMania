//import * as THREE from 'three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//sandbox testing for rendering:
const geomBox = new THREE.BoxGeometry(2,2,2,2);
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const box = THREE.Mesh(geomBox, boxMaterial);
scene.add(box);

camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 0;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();