// Import Three.js from a CDN
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

const mobiusData = [
  { letter: "A", word: "Apple", image: "/Users/dhruv.kapur/mobiusMidterm/images/apple.png", definition: "A fruit that grows on apple trees.", descriptor: "Sweet and crunchy." },
  //{ letter: "B", word: "Ball", image: "images/ball.jpg", definition: "A round object used in games.", descriptor: "Bouncy and round." },
  // Add entries for each letter up to Z
];

let currentIndex = 0;

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("mobius") });
renderer.setSize(300, 300);

const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(mobiusData[0].image) });
const mobius = new THREE.Mesh(geometry, material);
scene.add(mobius);
camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  mobius.rotation.x += 0.01;
  mobius.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Function to update display
function updateDisplay() {
  const { letter, word, image, definition, descriptor } = mobiusData[currentIndex];
  document.getElementById("title").textContent = `${letter} is for ${word}`;
  document.getElementById("definition").textContent = `Definition: ${definition}`;
  document.getElementById("descriptor").textContent = `Descriptor: ${descriptor}`;
  material.map = new THREE.TextureLoader().load(image); // Update image texture
  material.needsUpdate = true;
}

// Add event listeners
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % mobiusData.length;
  updateDisplay();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + mobiusData.length) % mobiusData.length;
  updateDisplay();
});

updateDisplay();
