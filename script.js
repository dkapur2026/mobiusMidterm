import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128/build/three.module.js';

const mobiusData = [
  {
    letter: "A",
    word: "Apple",
    image: "images/apple.jpg",
    definition: "A fruit that grows on apple trees.",
    descriptor: "Sweet and crunchy."
  },
  // Add entries for each letter up to Z
];

let currentIndex = 0;

// Initialize the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
camera.position.z = 5;

// Initialize the renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('mobius'), antialias: true });
renderer.setSize(600, 600);
renderer.setClearColor(0xffffff, 1);
// Create Möbius strip geometry
const mobiusGeometry = new THREE.ParametricGeometry(function(u, v, target) {
  u *= Math.PI * 2;
  v = v * 2 - 1;
  const a = 1;

  const x = (a + v * Math.cos(u / 2)) * Math.cos(u);
  const y = (a + v * Math.cos(u / 2)) * Math.sin(u);
  const z = v * Math.sin(u / 2);

  target.set(x, y, z);
}, 100, 20);

// Create canvas texture
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 256;
const context = canvas.getContext('2d');

const texture = new THREE.CanvasTexture(canvas);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2, 1);

const mobiusMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide
});

const mobiusMesh = new THREE.Mesh(mobiusGeometry, mobiusMaterial);
scene.add(mobiusMesh);

// Draw initial content
function drawCanvasContent(imageSrc, definition, descriptor) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  console.log(imageSrc);
  const image = new Image();
  image.src = imageSrc;

  
  image.onload = function() {
    context.drawImage(image, 0, 0, canvas.width / 3, canvas.height);

    context.font = '16px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'left';

    context.fillText(definition, canvas.width * 0.6, canvas.height * 0.4,);
    context.fillText(descriptor, canvas.width * 0.6, canvas.height * 0.6);

    //texture.needsUpdate = true;
    setTimeout(() => {
        texture.needsUpdate = true;
      }, 50);
  };
  image.onerror = function() {
    console.error("Failed to load image:", imageSrc);
  };
}

function updateDisplay() {
  const { letter, word, image, definition, descriptor } = mobiusData[currentIndex];
  document.getElementById('title').textContent = `${letter} is for ${word}`;
  drawCanvasContent(image, definition, descriptor);
}

// Navigation event listeners
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % mobiusData.length;
  updateDisplay();
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + mobiusData.length) % mobiusData.length;
  updateDisplay();
});

// Start with the first letter
updateDisplay();

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  mobiusMesh.rotation.x += 0.005;
  mobiusMesh.rotation.y += 0.005;

  texture.offset.x -= 0.002;
  if (texture.offset.x < -1) {
    texture.offset.x = 0;
  }

  renderer.render(scene, camera);
}
animate();
