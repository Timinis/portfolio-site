//this function is the starting function to generate a field

const createField = size => {
  let field = [];
  for (let i = 0; i < size; i++) {
    field[i] = [];

    for (let j = 0; j < size; j++) {
      field[i][j] = 0;
    }
  }
  return field;
};

//this function determines the neighbors of each grid

const getNeighbor = inputField => {
  let fieldSize = inputField.length;
  let neighborList = [];
  inputField.forEach((row, indexOfRow) => {
    row.forEach((grid, indexOfGrid) => {
      //this checks the neighbor of the existing grid
      let neighborCount = 0;

      //this checks top left corner
      if (indexOfRow - 1 >= 0 && indexOfGrid - 1 >= 0) {
        if (inputField[indexOfRow - 1][indexOfGrid - 1] === 1) {
          neighborCount += 1;
        }
      }
      //this checks top neighbor
      if (indexOfRow - 1 >= 0) {
        if (inputField[indexOfRow - 1][indexOfGrid] === 1) {
          neighborCount += 1;
        }
      }
      //this checks top right corner
      if (indexOfRow - 1 >= 0 && indexOfGrid + 1 < fieldSize) {
        if (inputField[indexOfRow - 1][indexOfGrid + 1] === 1) {
          neighborCount += 1;
        }
      }
      //this checks left neighbor
      if (indexOfGrid - 1 >= 0) {
        if (inputField[indexOfRow][indexOfGrid - 1] === 1) {
          neighborCount += 1;
        }
      }
      //this checks right neighbor
      if (indexOfGrid + 1 < fieldSize) {
        if (inputField[indexOfRow][indexOfGrid + 1] === 1) {
          neighborCount += 1;
        }
      }

      //this checks bottom left corner
      if (indexOfRow + 1 < fieldSize && indexOfGrid - 1 >= 0) {
        if (inputField[indexOfRow + 1][indexOfGrid - 1] === 1) {
          neighborCount += 1;
        }
      }

      //this checks bottom neighbor
      if (indexOfRow + 1 < fieldSize) {
        if (inputField[indexOfRow + 1][indexOfGrid] === 1) {
          neighborCount += 1;
        }
      }

      //this checks bottom right corner
      if (indexOfRow + 1 < fieldSize && indexOfGrid + 1 < fieldSize) {
        if (inputField[indexOfRow + 1][indexOfGrid + 1] === 1) {
          neighborCount += 1;
        }
      }

      neighborList = [
        ...neighborList,
        {
          y: indexOfRow,
          x: indexOfGrid,
          value: grid,
          neighborCount: neighborCount
        }
      ];
    });
  });
  //returns an array of objects that holds the coordinates and the new values to be updated
  return neighborList;
};

//this function determines the life or death of the organism based on neighbor list

const lifeOrDeathLogic = neighborList => {
  let newTurnList = [];

  neighborList.forEach(list => {
    //this is the logic for determening life or death

    //this is when organisms die of underpopulation
    if (list.value === 1 && list.neighborCount < 2) {
      newTurnList = [
        ...newTurnList,
        { newY: list.y, newX: list.x, newValue: 0 }
      ];
    }
    //this is when organisms die of overpopulation
    if (list.value === 1 && list.neighborCount > 3) {
      newTurnList = [
        ...newTurnList,
        { newY: list.y, newX: list.x, newValue: 0 }
      ];
    }
    //this is when organisms surive
    if (
      list.value === 1 &&
      list.neighborCount >= 2 &&
      list.neighborCount <= 3
    ) {
      newTurnList = [
        ...newTurnList,
        { newY: list.y, newX: list.x, newValue: 1 }
      ];
    }

    //this is when organism gets born under the right condition
    if (list.value === 0 && list.neighborCount === 3) {
      newTurnList = [
        ...newTurnList,
        { newY: list.y, newX: list.x, newValue: 1 }
      ];
    }

    //this is to represent the empty field
    if (list.value === 0 && list.neighborCount !== 3) {
      newTurnList = [
        ...newTurnList,
        { newY: list.y, newX: list.x, newValue: 0 }
      ];
    }
  });

  return newTurnList;
};

//this function generate a new field based on previous input
const updateBoard = newList => {
  let rowCount = Math.sqrt(newList.length);
  let newField = [];
  for (let i = 0; i < rowCount; i++) {
    newField[i] = [];
    for (let j = 0; j < rowCount; j++) {
      newField[i][j] = null;
    }
  }
  newList.forEach(gridInfo => {
    newField[gridInfo.newY][gridInfo.newX] = gridInfo.newValue;
  });

  return newField;
};

let inputKey;

window.addEventListener('keydown', event => {
  inputKey = event.keyCode;
});

window.addEventListener('keyup', event => {
  inputKey = undefined;
});

export default canvasComponent => {
  let boardSize = 40;
  let board = createField(boardSize);
  const Model = {
    board: board,
    gamePaused: true
  };

  setInterval(() => {
    if (!Model.gamePaused) {
      Model.board = updateBoard(lifeOrDeathLogic(getNeighbor(Model.board)));
    }
  }, 500);

  const bindEventListeners = () => {
    window.onresize = resizeCanvas;
    resizeCanvas();
  };

  const resizeCanvas = () => {
    canvasComponent.style.width = `60vw`;
    canvasComponent.style.height = `100vh`;
    canvasComponent.width = canvasComponent.offsetWidth;
    canvasComponent.height = canvasComponent.offsetHeight;
  };

  let canvasContext = canvasComponent.getContext('2d');

  canvasComponent.addEventListener('click', event => {
    let mouseXPos = Math.floor((event.clientX - 11.5) / 11.5);
    let mouseYPos = Math.floor((event.clientY - 30) / 11.5);

    if (Model.board[mouseYPos][mouseXPos] === 0) {
      Model.board[mouseYPos][mouseXPos] = 1;
    } else if (Model.board[mouseYPos][mouseXPos] === 1) {
      Model.board[mouseYPos][mouseXPos] = 0;
    }
  });

  //use this portion to draw the board
  const boardUpdater = () => {
    canvasContext.font = '20pt Arial';
    //this is to draw the board on the canvase
    canvasContext.fillStyle = 'gray';
    canvasContext.fillRect(
      10,
      10,
      boardSize * 11.5 + 1.5,
      boardSize * 11.5 + 1.5
    );
    canvasContext.fillStyle = 'gray';

    Model.board.forEach((row, rowIndex) => {
      row.forEach((grid, gridIndex) => {
        let gridcolor;
        if (grid === 0) {
          gridcolor = 'white';
        } else {
          gridcolor = 'cyan';
        }
        canvasContext.fillStyle = gridcolor;
        canvasContext.fillRect(
          11.5 * (gridIndex + 1),
          11.5 * (rowIndex + 1),
          10,
          10
        );
      });
    });
  };

  const gamePauser = inputKey => {
    if (inputKey === 80) {
      Model.gamePaused = true;
    }
    if (inputKey === 82) {
      Model.gamePaused = false;
    }
  };

  const render = time => {
    requestAnimationFrame(render);
    boardUpdater();
    gamePauser(inputKey);
  };

  bindEventListeners();
  render();
};
