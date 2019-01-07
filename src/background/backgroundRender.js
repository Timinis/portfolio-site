import BackgroundManager from './backgroundManager.js';

export default canvasComponent => {
  const backgroundManager = new BackgroundManager(canvasComponent);

  const bindEventListeners = () => {
    window.onresize = resizeCanvas;
    resizeCanvas();
  };

  const resizeCanvas = () => {
    canvasComponent.style.width = `100%`;
    canvasComponent.style.height = `100%`;
    canvasComponent.width = canvasComponent.offsetWidth;
    canvasComponent.height = canvasComponent.offsetHeight;
    backgroundManager.onWindowResize();
  };

  const render = time => {
    requestAnimationFrame(render);
    backgroundManager.update();
    backgroundManager.drawScene();
  };

  bindEventListeners();
  render();
};
