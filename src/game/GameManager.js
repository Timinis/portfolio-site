import * as THREE from 'three';

export default canvas => {
  //* Scene Section *//

  let scene = new THREE.Scene();

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

  camera.position.z = 70;
  camera.position.x = -600;
  camera.lookAt(900, 0, 0);
  camera.rotation.x = (90 * Math.PI) / 180;

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

  let ballRadius = 7;
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

  ball.position.z = ballRadius;
  scene.add(ball);

  //Board in game

  let boardWidth = fieldWidth * 0.4;

  let boardQuality = 10;
  let boardMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });
  let boardGeometry = new THREE.PlaneGeometry(
    boardWidth,
    fieldHeight * 0.3,
    boardQuality,
    boardQuality
  );
  let board = new THREE.Mesh(boardGeometry, boardMaterial);

  scene.add(board);

  // Light in game
  let pointLight = new THREE.PointLight(0xf8d898);

  pointLight.position.x = -500;
  pointLight.position.y = 500;
  pointLight.position.z = 1000;
  pointLight.intensity = 3;
  pointLight.distance = 10000;

  scene.add(pointLight);

  //Paddles in game
  let paddleWidth = 10;
  let paddleHeight = 50;
  let paddleDepth = 15;
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

  let paddle1UpperRange = paddle1.position.y + paddleHeight / 2;
  let paddle1LowerRange = paddle1.position.y - paddleHeight / 2;

  paddle1.position.x = -boardWidth / 2 + paddleWidth;
  paddle2.position.x = boardWidth / 2 - paddleWidth;
  paddle1.position.z = paddleDepth - 8;
  paddle2.position.z = paddleDepth - 8;

  scene.add(paddle1);
  scene.add(paddle2);

  //* Game Physics *//

  let ballXDirection = 1;
  let ballYDirection = 1;
  let ballSpeed = 3;

  const ballPhysics = () => {
    ball.position.x += ballXDirection * ballSpeed;
    ball.position.y += ballYDirection * ballSpeed;

    if (ball.position.y >= (fieldHeight * 0.3) / 2 - ballRadius) {
      ballYDirection = -ballYDirection;
    }

    if (ball.position.y <= (-fieldHeight * 0.3) / 2 + ballRadius) {
      ballYDirection = -ballYDirection;
    }
    if (ball.position.x >= boardWidth / 2) {
      ballXDirection = -ballXDirection;
    }

    if (
      ball.position.x <= -boardWidth / 2 + paddleWidth + ballRadius &&
      ball.position.y < paddle1UpperRange &&
      ball.position.y > paddle1LowerRange
    ) {
      ballXDirection = -ballXDirection;
    }
    if (ball.position.x < -boardWidth / 2) {
      ball.position.x = 0;
      ball.position.y = 0;
      ballXDirection = 1;
      ballYDirection = 1;
    }
  };

  const update = inputKey => {
    ballPhysics();
    if (
      paddle1UpperRange <= (fieldHeight * 0.3) / 2 - ballRadius &&
      paddle1LowerRange >= (-fieldHeight * 0.3) / 2 + ballRadius
    ) {
      if (inputKey === 37) {
        paddle1.position.y += 4;
        paddle1UpperRange += 4;
        paddle1LowerRange += 4;
      }
      if (inputKey === 39) {
        paddle1.position.y -= 4;
        paddle1UpperRange -= 4;
        paddle1LowerRange -= 4;
      }
    } else if (paddle1UpperRange > (fieldHeight * 0.3) / 2 - ballRadius) {
      if (inputKey === 39) {
        paddle1.position.y -= 4;
        paddle1UpperRange -= 4;
        paddle1LowerRange -= 4;
      }
    } else if (paddle1LowerRange < (-fieldHeight * 0.3) / 2 + ballRadius) {
      if (inputKey === 37) {
        paddle1.position.y += 4;
        paddle1UpperRange += 4;
        paddle1LowerRange += 4;
      }
    }
  };

  const drawScene = () => {
    renderer.render(scene, camera);
  };

  return { onWindowResize, update, drawScene };
};
