export function resetGridWithWalls(grid) {
    const newGrid = [];
    for (let row of grid) {
      const currentRow = [];
      for (let node of row) {
        if (node.isWall) {
          currentRow.push({
            row: node.row,
            col: node.col,
            isWall: true,
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

          if (!node.isStart || !node.isFinish)
            document.getElementById(`node-${node.row}-${node.col}`).className =
              `node ${extraClassName}`;
        } else {
          currentRow.push({
            row: node.row,
            col: node.col,
            isWall: false,
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

          if (!node.isStart || !node.isFinish)
            document.getElementById(
              `node-${node.row}-${node.col}`
            ).className = `node ${extraClassName}`;
        }
      }
      newGrid.push(currentRow);
    }
    return newGrid;
  }


  export function resetTimeOutEvents(timeOutEvents) {
    //reset set time out events
    for (const events of timeOutEvents) {
      clearTimeout(events);
    }
    timeOutEvents = [];
  }

  export function clearWalls(grid) {
    const newGrid = []
    for (let row of grid) {
        const currentRow = [];
        for (let node of row) {
            currentRow.push(node = {
              row: node.row,
              col: node.col,
              isWall: false,
              isStart: node.isStart,
              isFinish: node.isFinish,
              distance: Infinity,
              isVisited: false,
              previousNode: null,
              gCost: Infinity,
              hCost: Infinity,
              fCost: Infinity
            });
        }
        newGrid.push(currentRow)
    }
    return newGrid
  }