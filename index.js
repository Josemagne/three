import createDoor from "./objects/car/door.js";

// NOTE Creates a scene
const scene = new THREE.Scene();

// NOTE Create ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// NOTE Create directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

// NOTE Set the position of the directional light
directionalLight.position.set(200, 500, 300);

// NOTE Add the directionali light to the scene
scene.add(directionalLight);

/*CAMERA*/
const aspectRatio = window.innerWidth / window.innerHeight;

const cameraWidth = 150;

const cameraHeight = cameraWidth / aspectRatio;

// NOTE Create orthographic camera
const camera = new THREE.OrthographicCamera(
  cameraWidth / -2,
  cameraWidth / 2,
  cameraHeight / 2,
  cameraHeight / -2,
  0,
  1000
);

camera.position.set(200, 200, 200);

camera.lookAt(0, 10, 0);

/* RENDERER */

// NOTE Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

// NOTE Set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// NOTE render
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

function createWheels() {
  const geometry = new THREE.BoxBufferGeometry(12, 12, 33);

  // NOTE Creates the material
const material = new THREE.MeshLambertMaterial({ color: 0x333388, });
  const wheel = new THREE.Mesh(geometry, material);
  return wheel;
}

function createCar() {
  const car = new THREE.Group();

  const backWheel = createWheels();
  backWheel.position.y = 13;
  backWheel.position.x = -30;
  car.add(backWheel);

  const frontWheel = createWheels();
  frontWheel.position.y = 6;
  frontWheel.position.x = 18;
  car.add(frontWheel);

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 15, 30),
    new THREE.MeshLambertMaterial({ color: 0x78b14b })
  );

  main.position.y = 12;
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxBufferGeometry(33, 12, 24),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );

  cabin.position.x = -6;
  cabin.position.y = 25.5;
  car.add(cabin);

  return car;
}

const car = createCar();
scene.add(car);

const door = createDoor();
scene.add(door);


renderer.render(scene, camera);
