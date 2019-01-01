import * as THREE from 'three';

export default canvas => {
  //* Scene Section *//

  let scene = new THREE.Scene();

  //* Camera Section *//

  let cameraAngle = 75;
  let cameraAspect = window.innerWidth / window.innerHeight;
  let cameraNear = 0.1;
  let cameraFar = 1000;

  let camera = new THREE.PerspectiveCamera(
    cameraAngle,
    cameraAspect,
    cameraNear,
    cameraFar
  );

  camera.position.z = 500;

  //* Renderer Section *//
  let renderer = new THREE.WebGLRenderer({ canvas: canvas });

  renderer.setSize(window.innerWidth, window.innerHeight);
  const onWindowResize = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  //Ball in Game

  let ballRadius = 10;
  let ballSegments = 40;
  let ballRings = 40;

  let ballGeometry = new THREE.SphereGeometry(
    ballRadius,
    ballSegments,
    ballRings
  );
  let ballMaterial = new THREE.MeshLambertMaterial({
    color: 0x7ee1e1
  });

  let ball = new THREE.Mesh(ballGeometry, ballMaterial);

  scene.add(ball);

  // Light in game
  let pointLight = new THREE.PointLight(0xf8d898);

  pointLight.position.x = -500;
  pointLight.position.y = 500;
  pointLight.position.z = 1000;
  pointLight.intensity = 2.9;
  pointLight.distance = 10000;

  scene.add(pointLight);

  //Paddle in game
  let paddleWidth = 10;
  let paddleHeight = 100;
  let paddleDepth = 10;
  let paddleQuality = 1;

  let paddleGeometry = new THREE.CubeGeometry(
    paddleWidth,
    paddleHeight,
    paddleDepth,
    paddleQuality,
    paddleQuality,
    paddleQuality
  );

  let paddle1Material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
  let paddle2Material = new THREE.MeshLambertMaterial({ color: 0xff0000 });

  let paddle1 = new THREE.Mesh(paddleGeometry, paddle1Material);
  let paddle2 = new THREE.Mesh(paddleGeometry, paddle2Material);

  paddle1.position.x = -window.innerWidth / 2 + 50 + paddleWidth;
  paddle2.position.x = window.innerWidth / 2 - 50 - paddleWidth;
  paddle1.position.z = paddleDepth;
  paddle2.position.z = paddleDepth;

  scene.add(paddle1);
  scene.add(paddle2);

  //Plane in game
  let planeQuality = 10;
  let planeMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });
  let planeGeometry = new THREE.PlaneGeometry(
    window.innerWidth * 0.95,
    window.innerHeight,
    planeQuality,
    planeQuality
  );
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);

  scene.add(plane);

  const update = () => {
    ball.rotation.y += 0.01;
  };

  const drawScene = () => {
    renderer.render(scene, camera);
  };
  const testMessage = () => {
    console.log('test test');
  };

  return { onWindowResize, update, drawScene, testMessage };
};
