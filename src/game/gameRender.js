import GameManager from './GameManager.js';

export default canvasComponent => {
  const gameManager = new GameManager(canvasComponent);
  console.log(gameManager);

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
    gameManager.testMessage();
  };
  const render = time => {
    requestAnimationFrame(render);
    gameManager.update();
    gameManager.drawScene();
  };
  bindEventListeners();
  render();
};
