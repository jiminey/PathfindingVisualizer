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
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === 10 && col === 5, //isStart return boolean if row=10 col=5
          isFinish: row === 15 && col === 45
        };
        currentRow.push(currentNode);
      }
      grid.push(currentRow);
    }
    this.setState({ grid });
  }


  visualizeDijkstra() {
    const {grid} = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL]
    const endNode = grid[END_NODE_ROW][END_NODE_COL]
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode)
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode)
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder)
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
                <div>
              {row.map((node, nodeIdx) => {
                  const { isStart, isFinish } = node;
                  return (
                      <Node
                      key={nodeIdx}
                      isStart={isStart}
                      isFinish={isFinish}
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
