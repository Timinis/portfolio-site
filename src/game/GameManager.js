import * as THREE from 'three';
import { SignatureKind } from 'typescript';

export default canvas => {
  //* Scene Section *//

  let scene = new THREE.Scene();

  let fieldWidth = window.innerWidth;
  let fieldHeight = window.innerHeight;
  let gameStarted = false;

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
  camera.position.x = -620;
  camera.lookAt(900, 0, 0);
  camera.rotation.x = Math.PI / 2;

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

  //Buttons for mode

  let loader = new THREE.FontLoader();
  loader.load(`./helvetiker_regular.typeface.json`, response => {
    console.log(response);
  });

  // let textGeometry = new THREE.TextGeometry('Hello three.js!', {
  //   font: font,
  //   size: 80
  // });

  // let textMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });

  // let singlePlayer = new THREE.Mesh(textGeometry, textMaterial);
  // singlePlayer.position.z = 100;

  // scene.add(singlePlayer);

  //Ball in Game

  let ballRadius = 7;
  let ballSegments = 40;
  let ballRings = 40;

  let ballGeometry = new THREE.SphereGeometry(
    ballRadius,
    ballSegments,
    ballRings
  );
  let ballMaterial = new THREE.MeshStandardMaterial({
    color: 0x9effff
  });

  let ball = new THREE.Mesh(ballGeometry, ballMaterial);

  ball.position.z = ballRadius;

  //Board in game

  let boardWidth = fieldWidth * 0.4;
  let boardHeight = fieldHeight * 0.3;

  let boardQuality = 10;
  let boardMaterial = new THREE.MeshLambertMaterial({ color: 0x888888 });
  let boardGeometry = new THREE.PlaneGeometry(
    boardWidth,
    boardHeight,
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

  let spotLight = new THREE.SpotLight(0xf8d898);
  spotLight.position.set(0, 0, 100);
  spotLight.intensity = 0.5;
  spotLight.castShadow = true;
  scene.add(spotLight);

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

  //* Background Items *//

  //Pillar

  let pillarGeometry = new THREE.CylinderGeometry(20, 20, 400, 32);
  let pillarMaterial = new THREE.MeshLambertMaterial({ color: 0x3499a6 });
  let pillar1 = new THREE.Mesh(pillarGeometry, pillarMaterial);
  let pillar2 = new THREE.Mesh(pillarGeometry, pillarMaterial);
  let pillar3 = new THREE.Mesh(pillarGeometry, pillarMaterial);
  let pillar4 = new THREE.Mesh(pillarGeometry, pillarMaterial);
  let pillar5 = new THREE.Mesh(pillarGeometry, pillarMaterial);
  let pillar6 = new THREE.Mesh(pillarGeometry, pillarMaterial);

  scene.add(pillar1);
  scene.add(pillar2);
  scene.add(pillar3);
  scene.add(pillar4);
  scene.add(pillar5);
  scene.add(pillar6);

  pillar1.rotation.x = Math.PI / 2;
  pillar1.position.y = boardHeight / 2 + 100;
  pillar2.rotation.x = Math.PI / 2;
  pillar2.position.y = -boardHeight / 2 - 100;
  pillar3.rotation.x = Math.PI / 2;
  pillar3.position.y = boardHeight / 2 + 100;
  pillar3.position.x = boardWidth / 2 + 100;
  pillar4.rotation.x = Math.PI / 2;
  pillar4.position.y = -boardHeight / 2 - 100;
  pillar4.position.x = boardWidth / 2 + 100;

  pillar5.rotation.x = Math.PI / 2;
  pillar5.position.y = boardHeight / 2 + 100;
  pillar5.position.x = -boardWidth / 2 - 100;

  pillar6.rotation.x = Math.PI / 2;
  pillar6.position.y = -boardHeight / 2 - 100;
  pillar6.position.x = -boardWidth / 2 - 100;

  //Table

  let tableGeometry = new THREE.CubeGeometry(
    boardWidth + 30,
    boardHeight + 30,
    50
  );

  let tableMaterial = new THREE.MeshLambertMaterial({ color: 0x2e2e2e });

  let table = new THREE.Mesh(tableGeometry, tableMaterial);

  scene.add(table);

  table.position.z = -26;

  let floorGeometry = new THREE.PlaneGeometry(1500, 1200);
  let floorMaterial = new THREE.MeshBasicMaterial({ color: 0xfaedc0 });

  let floor = new THREE.Mesh(floorGeometry, floorMaterial);
  scene.add(floor);
  floor.position.z = -200;

  //* Score Keeper *//

  let scoreKeeper = document.createElement('canvas');

  let scoreContext = scoreKeeper.getContext('2d');

  let player1Score = 0;
  let player2Score = 0;
  let downCounter;
  let countDownBool = false;
  let playerNames = `Player 1   Player 2`;

  const countDown = () => {
    downCounter = 3;
    setTimeout(() => {
      downCounter -= 1;
    }, 1000);
    setTimeout(() => {
      downCounter -= 1;
    }, 2000);
    setTimeout(() => {
      downCounter -= 1;
    }, 3000);
    setTimeout(() => {
      downCounter = playerNames;
    }, 3100);
    countDownBool = false;
  };

  const scoreUpdater = () => {
    scoreContext.font = '20pt Arial';

    scoreContext.fillStyle = 'black';
    scoreContext.fillRect(
      10,
      10,
      scoreKeeper.width - 20,
      scoreKeeper.height - 20
    );
    scoreContext.fillStyle = 'white';
    scoreContext.textAlign = 'center';
    scoreContext.textBaseline = 'middle';
    if (!gameStarted) {
      scoreContext.fillText(
        'Press ENTER to Start',
        scoreKeeper.width / 2,
        scoreKeeper.height / 2 - 30
      );
    }
    if (gameStarted) {
      scoreContext.fillText(
        downCounter,
        scoreKeeper.width / 2,
        scoreKeeper.height / 2 - 30
      );
      scoreContext.fillText(
        `${player1Score}  |  ${player2Score}`,
        scoreKeeper.width / 2,
        scoreKeeper.height / 2
      );
    }
  };

  let scoreBoardWidth = 200;
  let scoreBoardHeight = 300;

  let scoreBoardGeometry = new THREE.PlaneGeometry(
    scoreBoardWidth,
    scoreBoardHeight
  );

  let scoreTexture = new THREE.Texture(scoreKeeper);
  scoreTexture.minFilter = THREE.LinearFilter;

  let scoreBoardMaterial = new THREE.MeshBasicMaterial({
    map: scoreTexture
  });
  let scoreBoard = new THREE.Mesh(scoreBoardGeometry, scoreBoardMaterial);

  scene.add(scoreBoard);
  scoreBoard.position.z = 200;
  scoreBoard.position.x = boardWidth / 2;

  scoreBoard.rotation.y = -Math.PI / 2;
  scoreBoard.rotation.x = Math.PI / 2;

  console.log(scene.children);

  //* Game Physics *//

  let ballXDirection = 1;
  let ballYDirection = 1;
  let ballSpeed = 3;
  let startGame = () => {
    if (!gameStarted) {
      setTimeout(() => {
        scene.add(ball);
        ball.position.x = 0;
        ball.position.y = 0;
      }, 3000);
      countDownBool = true;
    }
    gameStarted = true;
  };

  const ballPhysics = () => {
    ball.position.x += ballXDirection * ballSpeed;
    ball.position.y += ballYDirection * ballSpeed;

    if (ball.position.y >= boardHeight / 2 - ballRadius) {
      ballYDirection = -ballYDirection;
    }

    if (ball.position.y <= -boardHeight / 2 + ballRadius) {
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

    if (ball.position.x < -boardWidth / 2 + paddleWidth) {
      player2Score += 1;
      ball.position.x = 0;
      ball.position.y = 0;
      ballXDirection = 0;
      ballYDirection = 0;
      setTimeout(ballDelayStart, 3000);
      countDownBool = true;
    }
  };
  const ballDelayStart = () => {
    ballXDirection = 1;
    ballYDirection = 1;
  };

  const update = inputKey => {
    scoreUpdater();
    scoreTexture.needsUpdate = true;

    if (inputKey === 13) {
      startGame();
    }
    if (gameStarted) {
      ballPhysics();
      if (countDownBool) {
        countDown();
      }
    }
    if (
      paddle1UpperRange <= boardHeight / 2 - ballRadius &&
      paddle1LowerRange >= -boardHeight / 2 + ballRadius
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
    } else if (paddle1UpperRange > boardHeight / 2 - ballRadius) {
      if (inputKey === 39) {
        paddle1.position.y -= 4;
        paddle1UpperRange -= 4;
        paddle1LowerRange -= 4;
      }
    } else if (paddle1LowerRange < -boardHeight / 2 + ballRadius) {
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
