import React, { Component } from "react";
import Node from "../Node/Node";

import "./PathfindingVisualizer.css";
import { getNodesInShortestPathOrder } from "../Node/Node";
import { dijkstra } from "../Algorithms/dijkstras";
import { astar } from "../Algorithms/astar";
import { resetGrid, resetTimeOutEvents, clearAll } from "../Node/reset"


// Constants for start and end nodes
const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const END_NODE_ROW = 10;
const END_NODE_COL = 35;

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      isMousePressed: false
    };
    this.timeOutEvents = [];
  }

  componentDidMount() {
    // Initialize grid
    const grid = this.initializeGrid();
    this.setState({ grid });
  }

  handleVisualize(typeOfAlgorithm) {
    // Stops all current animation
    resetTimeOutEvents(this.timeOutEvents);
    const { grid } = this.state;

    // Reset grid but keep walls
    const newGrid = resetGrid(grid, 'withWalls');

    const startNode = newGrid[START_NODE_ROW][START_NODE_COL];
    const endNode = newGrid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder =
      typeOfAlgorithm === "dijkstra"
        ? dijkstra(newGrid, startNode, endNode)
        : astar(newGrid, startNode, endNode);

    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    this.animate(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  animate(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 1; i <= visitedNodesInOrder.length - 1; i++) {
      if (i === visitedNodesInOrder.length - 1) {
        this.timeOutEvents.push(setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 12 * i));
      } else {
        this.timeOutEvents.push(setTimeout(() => {
          const node = visitedNodesInOrder[i];
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }, 12 * i));
      }
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 1; i < nodesInShortestPathOrder.length - 1; i++) {
        this.timeOutEvents.push(setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i));
    }
  }

  createNode(row, col) {
    return {
      row,
      col,
      isWall: false,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === END_NODE_ROW && col === END_NODE_COL,
      distance: Infinity,
      isVisited: false,
      previousNode: null,
      gCost: Infinity,
      hCost: Infinity,
      fCost: Infinity
    };
  }

  initializeGrid() {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(this.createNode(row, col));
      }
      grid.push(currentRow);
    }
    return grid;
  }

  handleMouseDown(row, col) {
    const newGrid = this.setWalls(this.state.grid, row, col);
    this.setState({ grid: newGrid, isMousePressed: true });
  }

  handleMouseUp() {
    this.setState({ isMousePressed: false });
  }

  handleMouseEnter(row, col) {
    if (!this.state.isMousePressed) return;
    const newGrid = this.setWalls(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  setWalls = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    let newNode = {
      ...node,
      isWall: !node.isWall
    };
    newGrid[row][col] = newNode;

    // Case walls on start and end nodes
    newGrid[START_NODE_ROW][START_NODE_COL].isWall = false;
    newGrid[END_NODE_ROW][END_NODE_COL].isWall = false;

    return newGrid;
  };

  handleClearAll(grid) {
    // Clear everything on grid
    resetTimeOutEvents(this.timeOutEvents)
    let newGrid = resetGrid(grid, 'withoutWalls')
    this.setState({grid: newGrid})
    clearAll(newGrid)
  }

  render() {
    const { grid, isMousePressed } = this.state;
    return (
      <div className='content-container'>
        <div className='button-container'>
          <button onClick={() => this.handleVisualize("dijkstra")}>
            Visualize Dijkstra's Algorithm
          </button>
          <button onClick={() => this.handleVisualize("astar")}>
            Visualize A* Search Algorithm
          </button>
          <button onClick={() => this.handleClearAll(grid)}>
            Clear All
          </button>
        </div>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { isStart, isFinish, isWall, col, row } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      row={row}
                      isStart={isStart}
                      isFinish={isFinish}
                      isWall={isWall}
                      isMousePressed={isMousePressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={(row, col) => this.handleMouseUp(row, col)}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
