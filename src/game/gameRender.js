import GameManager from './GameManager.js';

export default canvasComponent => {
  const gameManager = new GameManager(canvasComponent);

  const bindEventListeners = () => {
    window.onresize = resizeCanvas;
    resizeCanvas();
  };

  const resizeCanvas = () => {
    canvasComponent.style.width = `100%`;
    canvasComponent.style.height = `100%`;
    canvasComponent.width = canvasComponent.offsetWidth;
    canvasComponent.height = canvasComponent.offsetHeight;
    gameManager.onWindowResize();
  };

  let inputKey;

  window.addEventListener('keydown', event => {
    inputKey = event.keyCode;
  });

  window.addEventListener('keyup', event => {
    inputKey = undefined;
  });

  const render = time => {
    requestAnimationFrame(render);
    gameManager.update(inputKey);
    gameManager.drawScene();
  };

  bindEventListeners();
  render();
};
