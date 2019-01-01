import * as THREE from 'three';

export default canvas => {
  //* Scene Section *//

  let scene = new THREE.Scene();

  let fieldWidth = window.innerWidth;
  let fieldHeight = window.innerHeight;

  //* Camera Section *//

  let cameraAngle = 75;
  let cameraAspect = fieldWidth / fieldHeight;
  let cameraNear = 0.1;
  let cameraFar = 1000;

  let camera = new THREE.PerspectiveCamera(
    cameraAngle,
    cameraAspect,
    cameraNear,
    cameraFar
  );

  camera.position.z = 700;

  //* Renderer Section *//
  let renderer = new THREE.WebGLRenderer({ canvas: canvas });

  renderer.setSize(fieldWidth, fieldHeight);
  const onWindowResize = () => {
    let width = fieldWidth;
    let height = fieldHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  //* Parts in Game *//

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

  //Paddles in game
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

  paddle1.position.x = -fieldWidth / 2 + 50 + paddleWidth;
  paddle2.position.x = fieldWidth / 2 - 50 - paddleWidth;
  paddle1.position.z = paddleDepth;
  paddle2.position.z = paddleDepth;

  scene.add(paddle1);
  scene.add(paddle2);

  //Board in game
  let boardQuality = 10;
  let boardMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });
  let boardGeometry = new THREE.PlaneGeometry(
    fieldWidth * 0.95,
    fieldHeight,
    boardQuality,
    boardQuality
  );
  let board = new THREE.Mesh(boardGeometry, boardMaterial);

  scene.add(board);

  //* Game Physics *//

  let ballXDirection = 1;
  let ballYDirection = 1;
  let ballSpeed = 4;

  const ballPhysics = () => {
    ball.position.x += ballXDirection * ballSpeed;
    ball.position.y += ballYDirection * ballSpeed;

    if (ball.position.y >= fieldHeight / 2 - ballRadius) {
      ballYDirection = -ballYDirection;
    }

    if (ball.position.y <= -fieldHeight / 2 + ballRadius) {
      ballYDirection = -ballYDirection;
    }
  };

  const update = inputKey => {
    ballPhysics();
    if (inputKey === 38) {
      paddle1.position.y += 5;
    }
    if (inputKey === 40) {
      paddle1.position.y -= 5;
    }
  };

  const drawScene = () => {
    renderer.render(scene, camera);
  };

  return { onWindowResize, update, drawScene };
};
