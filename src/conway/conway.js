const createField = fieldSize => {
  let fieldRows = new Array(fieldSize);
  let fieldColumn = new Array(fieldSize);
  fieldColumn.fill(fieldRows);
  fieldRows.fill(0);
  return fieldColumn;
};

const gameLogic = field => {
  let fieldSize = field.length;
  let newField = [...field];
  let newFieldLocations = [];
  field.forEach((row, indexOfRow) => {
    row.forEach((grid, indexOfGrid) => {
      //this checks the neighbor of the existing grid
      let neighborCount = 0;

      //this checks top left corner
      if (indexOfRow - 1 >= 0 && indexOfGrid - 1 >= 0) {
        if (field[indexOfRow - 1][indexOfGrid - 1] === 1) {
          neighborCount += 1;
        }
      }
      //this checks top neighbor
      if (indexOfRow - 1 >= 0) {
        if (field[indexOfRow - 1][indexOfGrid] === 1) {
          neighborCount += 1;
        }
      }
      //this checks top right corner
      if (indexOfRow - 1 >= 0 && indexOfGrid + 1 < fieldSize) {
        if (field[indexOfRow - 1][indexOfGrid + 1] === 1) {
          neighborCount += 1;
        }
      }
      //this checks left neighbor
      if (indexOfGrid - 1 >= 0) {
        if (field[indexOfRow][indexOfGrid - 1] === 1) {
          neighborCount += 1;
        }
      }
      //this checks right neighbor
      if (indexOfGrid + 1 < fieldSize) {
        if (field[indexOfRow][indexOfGrid + 1] === 1) {
          neighborCount += 1;
        }
      }

      //this checks bottom left corner
      if (indexOfRow + 1 < fieldSize && indexOfGrid - 1 >= 0) {
        if (field[indexOfRow + 1][indexOfGrid - 1] === 1) {
          neighborCount += 1;
        }
      }

      //this checks bottom neighbor
      if (indexOfRow + 1 < fieldSize) {
        if (field[indexOfRow + 1][indexOfGrid] === 1) {
          neighborCount += 1;
        }
      }
      //this checks bottom right corner
      if (indexOfRow + 1 < fieldSize && indexOfGrid + 1 < fieldSize) {
        if (field[indexOfRow + 1][indexOfGrid + 1] === 1) {
          neighborCount += 1;
        }
      }
      //this is the logic for determening life or death
      if (grid === 1 && neighborCount < 2) {
        console.log(`i died at ${indexOfRow},${indexOfGrid}`);
        newFieldLocations = [
          ...newFieldLocations,
          { y: indexOfRow, x: indexOfGrid, value: 0 }
        ];
      }
      if (grid === 1 && neighborCount > 3) {
        console.log(`i died at ${indexOfRow},${indexOfGrid}`);
        newFieldLocations = [
          ...newFieldLocations,
          { y: indexOfRow, x: indexOfGrid, value: 0 }
        ];
      }

      if (grid === 0 && neighborCount === 3) {
        console.log(`I am born at ${indexOfRow}, ${indexOfGrid}`);
        newFieldLocations = [
          ...newFieldLocations,
          { y: indexOfRow, x: indexOfGrid, value: 1 }
        ];
      }
    });
  });
  newFieldLocations.forEach(element => {
    newField[element.y][element.x] = element.value;
  });
  return newField;
};
