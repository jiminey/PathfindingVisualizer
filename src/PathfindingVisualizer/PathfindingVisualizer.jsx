import React, { Component } from "react";
import Node from "../Node/Node";

import "./PathfindingVisualizer.css";
import { getNodesInShortestPathOrder, dijkstra } from "../Algorithms/dijkstras";

const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const END_NODE_ROW = 15;
const END_NODE_COL = 45;

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: []
    };
  }

  componentDidMount() {
    //initialize grid
    const grid = this.initializeGrid()
    this.setState({grid: grid})
  }


  visualizeDijkstra() {
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL]
    const endNode = grid[END_NODE_ROW][END_NODE_COL]
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode)
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode)
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder)
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
            setTimeout(() => {
                this.animateShortestPath(nodesInShortestPathOrder)
            }, 10 * i)
            return
        } else {
            setTimeout(() => {
                const node = visitedNodesInOrder[i]
                // document.getElementById
            })
        }
    }
  }

  initializeGrid() {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(row, col));
      }
      grid.push(currentRow);
    }
    return grid
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
    }
  }

  render() {
    const { grid } = this.state;
    return (

    <div>
        <button onClick={() => this.visualizeDijkstra()}>
            Visualize Dijkstra's Algorithm
        </button>
      <div className="grid">
        {grid.map((row, rowIdx) => {
            return (
                <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                  const { isStart, isFinish, isWall } = node;
                  return (
                      <Node
                      key={nodeIdx}
                      col={col}
                      row={row}
                      isStart={isStart}
                      isFinish={isFinish}
                      isWall={isWall}
                      isPressed={isPressed}
                      isMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      isMouseClick={(row, col) => this.handleMouseClick(row, col)}
                      isMouseUp={(row, col) => this.handleMouseUp(row, col)}
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
