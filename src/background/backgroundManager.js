import * as THREE from 'three';

export default canvas => {
  //* Scene Section *//

  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  let fieldWidth = window.innerWidth;
  let fieldHeight = window.innerHeight;

  //* Camera Section *//

  let cameraAngle = 40;
  let cameraAspect = fieldWidth / fieldHeight;
  let cameraNear = 0.1;
  let cameraFar = 100000;

  let camera = new THREE.PerspectiveCamera(
    cameraAngle,
    cameraAspect,
    cameraNear,
    cameraFar
  );

  camera.position.z = 100;

  let pointLight = new THREE.PointLight(0xf8d898);

  pointLight.position.x = -500;
  pointLight.position.y = 500;
  pointLight.position.z = 1000;
  pointLight.intensity = 3;
  pointLight.distance = 10000;

  scene.add(pointLight);

  //* Renderer Section *//
  let renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setSize(fieldWidth, fieldHeight);
  const onWindowResize = () => {
    let width = fieldWidth;
    let height = fieldHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  let OctahedronBufferGeometry = new THREE.OctahedronBufferGeometry(10);

  let octahedronArray = [];

  for (let i = 0; i < 1000; i++) {
    let octahedron = new THREE.Mesh(
      OctahedronBufferGeometry,
      new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff
      })
    );
    octahedron.position.x = Math.random() * 800 - 400;
    octahedron.position.y = Math.random() * 800 - 400;
    octahedron.position.z = Math.random() * 800 - 400;
    octahedron.rotation.x = Math.random() * 2 * Math.PI;
    octahedron.rotation.y = Math.random() * 2 * Math.PI;
    octahedron.rotation.z = Math.random() * 2 * Math.PI;
    octahedron.scale.x = Math.random() + 0.5;
    octahedron.scale.y = Math.random() + 0.5;
    octahedron.scale.z = Math.random() + 0.5;
    octahedronArray.push(octahedron);
  }

  octahedronArray.forEach(element => scene.add(element));

  const update = () => {};

  let cameraUpperLimit = 300;

  let zoomingEffect = 0.25;

  const drawScene = () => {
    renderer.render(scene, camera);
    camera.rotation.y += 0.0005;
    camera.rotation.x += 0.0005;
    if (camera.position.z < cameraUpperLimit) {
      camera.position.z += zoomingEffect;
    }

    octahedronArray.forEach(element => {
      element.rotation.x -= 0.01;
      element.rotation.y -= 0.01;
    });
  };

  return { onWindowResize, update, drawScene };
};
