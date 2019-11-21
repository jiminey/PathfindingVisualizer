import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      col,
      row,
      isStart,
      isFinish,
      isWall,
      isMousePressed,
      onMouseDown,
      onMouseClick,
      onMouseUp,
    } = this.props;
    //triple ternary
    const endPointNode = 
    isFinish ? "node-finish" 
    : isStart ? "node-start" 
    : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseClick={() => onMouseClick(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    )
  }
}