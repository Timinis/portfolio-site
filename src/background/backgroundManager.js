import * as THREE from 'three';

export default canvas => {
  //* Scene Section *//

  let scene = new THREE.Scene();
  let circle = new THREE.Object3D();
  let skelet = new THREE.Object3D();
  let particle = new THREE.Object3D();
  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

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

  let lights = [];
  lights[0] = new THREE.DirectionalLight(0xffffff, 1);
  lights[0].position.set(1, 0, 0);
  lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
  lights[2].position.set(-0.75, -1, 0.5);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  //* Renderer Section *//
  let renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.autoClear = false;
  renderer.setClearColor(0xffffff, 0);
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
  let geom = new THREE.IcosahedronGeometry(7, 1);
  let geom2 = new THREE.IcosahedronGeometry(15, 1);
  let planet = new THREE.Mesh(
    geom,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true
    })
  );
  planet.scale.x = planet.scale.y = planet.scale.z = 2;

  let planet2 = new THREE.Mesh(
    geom2,
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide
    })
  );
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 1.2;

  circle.add(planet);
  skelet.add(planet2);

  for (let i = 0; i < 1000; i++) {
    let octahedron = new THREE.Mesh(
      OctahedronBufferGeometry,
      new THREE.MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true
      })
    );
    octahedron.position.x = Math.random() * 800 - 400;
    octahedron.position.y = Math.random() * 800 - 400;
    octahedron.position.z = Math.random() * 800 - 400;
    octahedron.rotation.x = Math.random() * 2 * Math.PI;
    octahedron.rotation.y = Math.random() * 2 * Math.PI;
    octahedron.rotation.z = Math.random() * 2 * Math.PI;
    octahedron.scale.x = Math.random() * 0.2;
    octahedron.scale.y = Math.random() * 0.2;
    octahedron.scale.z = Math.random() * 0.2;
    octahedronArray.push(octahedron);
  }

  octahedronArray.forEach(element => particle.add(element));

  const update = () => {
    renderer.render(scene, camera);

    particle.rotation.x += 0.0;
    particle.rotation.y -= 0.004;
    circle.rotation.x -= 0.002;
    circle.rotation.y -= 0.003;
    skelet.rotation.x -= 0.001;
    skelet.rotation.y += 0.002;

    octahedronArray.forEach(element => {
      element.rotation.x -= 0.01;
      element.rotation.y -= 0.01;
    });
  };

  const drawScene = () => {};

  return { onWindowResize, update, drawScene };
};
