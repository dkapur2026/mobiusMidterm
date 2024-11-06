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
}, 1000, 200);

// Create canvas texture
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 256;
const context = canvas.getContext('2d');

const texture = new THREE.CanvasTexture(canvas);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);

const mobiusMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide
});

const mobiusMesh = new THREE.Mesh(mobiusGeometry, mobiusMaterial);
camera.position.set(0, 0, 3); // Adjust the z-axis as needed to zoom in/out
mobiusMesh.rotation.set(Math.PI / 2, 0, Math.PI / 6); // Adjust rotation for best angle
scene.add(mobiusMesh);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Draw initial content
function drawCanvasContent(imageSrc, definition, descriptor) {
  context.clearRect(0, 0, canvas.width, canvas.height);


  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#0000FF");
  gradient.addColorStop(0.5, "#00FF00");
  gradient.addColorStop(1, "#FF00FF");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  console.log(imageSrc);
  const image = new Image();
  image.src = imageSrc;

  
  image.onload = function() {
    context.drawImage(image, 0, 0, canvas.width / 3, canvas.height);

    context.font = '12px Arial';
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
  /*
  mobiusMesh.rotation.x += 0.005;
  mobiusMesh.rotation.y += 0.005;

  texture.offset.x -= 0.002;
  if (texture.offset.x < -1) {
    texture.offset.x = 0;
  }*/


  // Update texture offset to make the content move across the strip surface
  texture.offset.x -= 0.0005; // Adjust speed as needed
  if (texture.offset.x < -1) {
    texture.offset.x = 0; // Reset offset to create a seamless loop
  }
  renderer.render(scene, camera);
}
animate();
