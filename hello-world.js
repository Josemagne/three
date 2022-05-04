let camera, scene, renderer;
let geometry, mesh, material;
let clock;


function init() {
renderer = new THREE.WebGLRenderer;
  renderer.setSize(window.innerWidth, window.innerHeight)
  // We append the renderer to the DOM
  // The renderer has a dom property for the DOM
  document.body.appendChild(renderer.domElement)

  // The scene is what we will see
  scene = new THREE.Scene();

  // We are creating a cube
  geometry = new THREE.BoxGeometry(1,1,1);

  // With wireframes we will see wireframes on the material
  material = new THREE.MeshBasicMaterial({color: 'blue', wireframe: true})

  // The mesh combines the geometry and material
  mesh = new THREE.Mesh(geometry,material)

  // We want to see the mesh! So let'kkj]s add it
  scene.add(mesh)

  camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,100  )

  // The camera is somewhere. Where do we want to put it?
  camera.position.set(0,0,-3)

  // At which point should the camera look at?
  // It should look at the position of our cube mesh
  camera.lookAt(mesh.position)

  // What is a clock?
  clock = new THREE.Clock();

  // When we resize the window we call the fn
  window.addEventListener("resize", onResizeWindow, false)
}

let dir = 1;

function animate() {
  // Recursion is at work here
  requestAnimationFrame(animate);

  let delta = clock.getDelta();
  mesh.rotation.x += delta * 0.5; mesh.rotation.y += delta * 2; mesh.position.x += dir*delta; if (mesh.position.x > 2) {
dir=-1;
} else if (mesh.position.x < - 2) {
dir=1; }
renderer.render( scene, camera );




}

function onResizeWindow() { windowHalfX = window.innerWidth / 2; windowHalfY = window.innerHeight / 2;



  camera.aspect = window.innerWidth /window.innerHeight;
  camera.updateProjectionMatrix();
renderer.setSize( window.innerWidth, window.innerHeight );
}
init(); animate();
