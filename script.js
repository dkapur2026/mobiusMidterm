import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/controls/OrbitControls.js';
const mobiusData = [
    {
      letter: "A",
      word: "Arjun",
      image: "images/arjun.png",
      definition: "Youngest Member of the Kapurs",
      descriptor: "Young and Dumb"
    },
    {
      letter: "B",
      word: "Ball",
      image: "images/ball.png",
      definition: "A spherical object used in various games and sports.",
      descriptor: "Typically made of rubber, leather, or other materials, and used for throwing, kicking, or hitting."
    },
    {
      letter: "C",
      word: "Cat",
      image: "images/cat.png",
      definition: "A small domesticated carnivorous mammal (Felis catus) with soft fur, a short snout, and retractable claws.",
      descriptor: "Commonly kept as a pet or for catching mice, and valued for companionship."
    },
    {
      letter: "D",
      word: "Dog",
      image: "images/dog.png",
      definition: "A domesticated carnivorous mammal (Canis lupus familiaris) typically kept as a pet or used for work.",
      descriptor: "Known for loyalty and intelligence, often referred to as 'man's best friend'."
    },
    {
      letter: "E",
      word: "Ephant",
      image: "images/elephant.png",
      definition: "A large mammal with a trunk, native to Africa and Asia (family Elephantidae).",
      descriptor: "Elephants are highly social animals known for their intelligence and strong family bonds."
    },
    {
      letter: "F",
      word: "Fish",
      image: "images/fish.png",
      definition: "A limbless cold-blooded vertebrate animal with gills and fins, living wholly in water.",
      descriptor: "Includes species that inhabit oceans, rivers, and lakes, and vary widely in size and shape."
    },
    {
      letter: "G",
      word: "Grilla",
      image: "images/gorilla.png",
      definition: "A large, powerful, herbivorous primate of tropical African forests (genus Gorilla).",
      descriptor: "Characterized by its robust build and social behavior; known for intelligence and gentle nature."
    },
    {
      letter: "H",
      word: "Hopital",
      image: "images/hospital.png",
      definition: "An institution providing medical and surgical treatment and nursing care for sick or injured people.",
      descriptor: "Hospitals offer a range of healthcare services, including emergency care and specialized treatments."
    },
    {
      letter: "I",
      word: "Igloo",
      image: "images/igloo.png",
      definition: "A dome-shaped Eskimo house, typically built from blocks of solid snow.",
      descriptor: "Igloos are used traditionally by Inuit people and provide insulation in freezing temperatures."
    },
    {
      letter: "J",
      word: "Jus",
      image: "images/juice.png",
      definition: "The liquid that comes from fruits or vegetables.",
      descriptor: "Commonly consumed as a beverage, it is rich in nutrients and vitamins."
    },
    {
      letter: "K",
      word: "Kwala",
      image: "images/koala.png",
      definition: "An arboreal Australian marsupial (Phascolarctos cinereus) with thick gray fur and large ears.",
      descriptor: "Koalas are known for feeding on eucalyptus leaves and sleeping for long hours."
    },
    {
      letter: "L",
      word: "Ladder",
      image: "images/ladder.png",
      definition: "A structure consisting of a series of bars or steps between two upright lengths, used for climbing up or down.",
      descriptor: "Ladders are typically portable and made of wood, metal, or plastic."
    },
    {
      letter: "M",
      word: "Mouse",
      image: "images/mouse.png",
      definition: "A small rodent with a pointed snout, large ears, and a long tail.",
      descriptor: "Known for its agility and adaptability, found in a variety of environments worldwide."
    },
    {
      letter: "N",
      word: "Nest",
      image: "images/nest.png",
      definition: "A structure or place made or chosen by a bird for laying eggs and sheltering its young.",
      descriptor: "Nests are commonly made from twigs, leaves, and other natural materials."
    },
    {
      letter: "O",
      word: "Octopus",
      image: "images/octopus.png",
      definition: "A marine mollusk (order Octopoda) with eight arms and a soft body, known for its intelligence.",
      descriptor: "Octopuses are highly skilled at camouflage and can change color to blend into their surroundings."
    },
    {
      letter: "P",
      word: "Pig",
      image: "images/pig.png",
      definition: "A domesticated mammal (Sus scrofa domesticus) with a stout body, short legs, and a flat snout.",
      descriptor: "Pigs are intelligent, social animals raised for their meat and other products."
    },
    {
      letter: "Q",
      word: "Kale",
      image: "images/quail.png",
      definition: "A small ground-dwelling bird of the pheasant family, often kept for its meat or eggs.",
      descriptor: "Known for its short tail and distinctive call, quails are common in both wild and domestic settings."
    },
    {
      letter: "R",
      word: "Wabbit",
      image: "images/rabbit.png",
      definition: "A small burrowing mammal (family Leporidae) with long ears and a short tail.",
      descriptor: "Rabbits are herbivorous, known for their agility and are often kept as pets."
    },
    {
      letter: "S",
      word: "Sunfower",
      image: "images/sunflower.png",
      definition: "A tall plant of the daisy family, with a large yellow flower head (Helianthus annuus).",
      descriptor: "Sunflowers are grown for their seeds and oil, and are known to turn towards the sun."
    },
    {
      letter: "T",
      word: "Tee",
      image: "images/tree.png",
      definition: "A perennial plant with an elongated stem, or trunk, supporting branches and leaves.",
      descriptor: "Trees play a vital role in the ecosystem by providing oxygen, shelter, and resources."
    },
    {
      letter: "U",
      word: "Umbella",
      image: "images/umbrella.png",
      definition: "A device consisting of a circular canopy of cloth on a folding metal frame, used as protection against rain or sun.",
      descriptor: "Umbrellas are portable, often colorful, and essential in wet or sunny weather."
    },
    {
      letter: "V",
      word: "Volcano",
      image: "images/volcano.png",
      definition: "A mountain or hill with a crater through which lava, rock fragments, and gas are erupted from the Earth's crust.",
      descriptor: "Volcanoes shape landscapes and impact ecosystems, with both destructive and constructive forces."
    },
    {
      letter: "W",
      word: "Watch",
      image: "images/watch.png",
      definition: "A small timepiece worn typically on the wrist or carried in a pocket.",
      descriptor: "Watches come in various styles and may display the time through mechanical or digital means."
    },
    {
      letter: "X",
      word: "Xylophone",
      image: "images/xylophone.png",
      definition: "A musical instrument consisting of a row of wooden bars of different lengths, struck by mallets to produce sounds.",
      descriptor: "The xylophone is often used in orchestras and produces a clear, resonant tone."
    },
    {
      letter: "Y",
      word: "Yoyo",
      image: "images/yoyo.png",
      definition: "A toy consisting of a pair of joined discs with a deep groove, through which a string is tied.",
      descriptor: "Yoyos are used for tricks, with a history spanning various cultures around the world."
    },
    {
      letter: "Z",
      word: "Zebra",
      image: "images/zebra.png",
      definition: "A wild horse with black-and-white stripes, native to Africa.",
      descriptor: "Zebras live in herds and are known for their unique striping patterns."
    }
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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; // Smooth control movement
// controls.dampingFactor = 0.1;
// controls.enableZoom = true;
// controls.minDistance = 2;
// controls.maxDistance = 10;

// Create Möbius strip geometry
const mobiusGeometry = new THREE.ParametricGeometry(function(u, v, target) {
  u *= Math.PI * 2;
  v = v  * 2 - 1;
  const a = 2;
  const x = Math.cos(u) + v * Math.sin(u / 2) * Math.cos(u);
  const y = Math.sin(u) + v * Math.sin(u / 2) * Math.sin(u);
  const z = v * Math.cos(u / 2);

  target.set(x, y, z);
}, 100, 20);

// Create canvas texture
const canvas = document.createElement('canvas');
canvas.width = 2048;
canvas.height = 1024;
const context = canvas.getContext('2d');

const texture = new THREE.CanvasTexture(canvas);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);

const mobiusMaterial = new THREE.MeshStandardMaterial({
  map: texture,
  color: 0x6D6D6D,  // Light grey base color
  side: THREE.DoubleSide,
  roughness: 1,
  metalness: 0.1,
//   opacity: 0.2,      // Adjust opacity to let color show through

});

const mobiusMesh = new THREE.Mesh(mobiusGeometry, mobiusMaterial);
mobiusMesh.castShadow = true;
mobiusMesh.receiveShadow = true;
mobiusMesh.rotation.x = (1.1);
mobiusMesh.rotation.y = (-Math.PI);
mobiusMesh.rotation.z = (0);
scene.add(mobiusMesh);



// Ambient and directional lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(-5, -5, 5);
pointLight.castShadow = true;
scene.add(pointLight);

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    let lines = [];
  
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
  
      if (testWidth > maxWidth && i > 0) {
        lines.push(line);
        line = words[i] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line); // Push the last line
  
    // Draw each line on the canvas
    for (let j = 0; j < lines.length; j++) {
      context.fillText(lines[j], x, y + j * lineHeight);
    }
  }
  
function drawCanvasContent(imageSrc, definition, descriptor) {
    // Set the canvas background color to grey
    context.fillStyle = "#6D6D6D";
    context.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with grey
  
    const image = new Image();
    image.src = imageSrc;
    image.onload = function() {
      // Draw the image in the first third of the canvas
      context.drawImage(image, 0, 0, canvas.width / 3, canvas.height);
  
      // Set text style and color
      context.font = '48px Arial';
      context.fillStyle = 'white'; // White text for contrast
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      const maxWidth = canvas.width / 3;
      const lineHeight = 50;
  
      // Draw wrapped definition text in the center third of the canvas
     wrapText(context, definition, canvas.width / 2, canvas.height / 2 - lineHeight, maxWidth, lineHeight);
     context.fillText('Definition:', canvas.width / 2, canvas.height / 2 * 0.7)
     context.fillText("Description:", canvas.width * (5/6), canvas.height / 2 * 0.7)
     wrapText(context, descriptor, canvas.width * (5/6), canvas.height /2 - lineHeight, maxWidth, lineHeight);
      // Update the texture to apply changes
      texture.needsUpdate = true;
    };
  
    image.onerror = function() {
      console.error("Failed to load image:", imageSrc);
    };
  }
  

// OG
// Draw initial content
// function drawCanvasContent(imageSrc, definition, descriptor) {
//   context.fillStyle = "#6D6D6D";
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   console.log(imageSrc);
//   const image = new Image();
//   image.src = imageSrc;

  
//   image.onload = function() {
//     context.drawImage(image, 0, 0, canvas.width / 3, canvas.height);

//     context.font = '48px Arial';
//     context.fillStyle = 'white';
//     context.textAlign = 'center';
//     context.textBaseline = 'middle';

//     context.fillText(definition, canvas.width / 2, canvas.height / 2,);
//     context.fillText('Definition:', canvas.width / 2, canvas.height / 2 * 0.7)
//     context.fillText("Description:", canvas.width * (5/6), canvas.height / 2 * 0.7)
//     context.fillText(descriptor, canvas.width * (5/6), canvas.height /2);

//     //texture.needsUpdate = true;
//     setTimeout(() => {
//         texture.needsUpdate = true;
//       }, 50);
//   };
//   image.onerror = function() {
//     console.error("Failed to load image:", imageSrc);
//   };
// }

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

//   controls.update();
  // Update texture offset to make the content move across the strip surface
  texture.offset.x -= 0.0007 // Adjust speed as needed
  if (texture.offset.x < -1) {
    texture.offset.x = 0; // Reset offset to create a seamless loop
  }
  renderer.render(scene, camera);
}
animate();
