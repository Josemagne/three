export default function createDoor() {
  const geometry = new THREE.BoxBufferGeometry(10, 20, 3);

  const material = new THREE.MeshLambertMaterial({
    color: 0x808080
  })

  const door = new THREE.Mesh(geometry, material);

  return door;
}
