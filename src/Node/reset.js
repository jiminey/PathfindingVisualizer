export function resetTimeOutEvents(timeOutEvents) {
  //reset set time out events
  for (const events of timeOutEvents) {
    clearTimeout(events);
  }
  timeOutEvents = [];
}

export function clearAll(grid) {
  const newGrid = [];

  for (let row of grid) {
      for (let node of row) {
        const extraClassName = node.isFinish
          ? "node-finish"
          : node.isStart
          ? "node-start"
          : node.isWall
          ? "node-wall"
          : "";

        if (!node.isStart || !node.isFinish) {
          document.getElementById(
            `node-${node.row}-${node.col}`
          ).className = `node ${extraClassName}`;
        }
      }
  }
  return newGrid;
}

export function resetGridWithWalls(grid, type) {
  const newGrid = [];
  for (let row of grid) {
    const currentRow = [];
    for (let node of row) {
        let temp;
        type === 'withWalls' ? temp = node.isWall : temp = false

        currentRow.push({
          row: node.row,
          col: node.col,
          isWall: temp,
          isStart: node.isStart,
          isFinish: node.isFinish,
          distance: Infinity,
          isVisited: false,
          previousNode: null,
          gCost: Infinity,
          hCost: Infinity,
          fCost: Infinity
        });
        const extraClassName = node.isFinish
          ? "node-finish"
          : node.isStart
          ? "node-start"
          : node.isWall
          ? "node-wall"
          : "";

        if (!node.isStart || !node.isFinish){
          document.getElementById(`node-${node.row}-${node.col}`)
          .className = `node ${extraClassName}`;
      }
    }
    newGrid.push(currentRow);
  }
  return newGrid;
}
