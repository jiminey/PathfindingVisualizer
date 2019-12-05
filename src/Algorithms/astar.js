import { getUnvisitedNeighbors } from "../Node/Node";


export function astar(grid, startNode, endNode) {
  // Initialize
  const closedList = [];
  startNode.gCost = 0;
  const openList = [];

  // Push startnode
  openList.push(startNode);

  while (!!openList.length) {
    sortNodesByFCost(openList)
    // Get lowest fCost node
    const closestNode = openList.shift();

    // Save order of nodes
    closedList.push(closestNode);
    closestNode.isVisited = true;

    if (closestNode === endNode) return closedList;
    updateUnvisitedNeighbors(closestNode, grid, endNode, closedList, openList);
  }
  closedList.push({});
  return closedList;
}

function updateUnvisitedNeighbors(node, grid, endNode, closedList, openList) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    // Neighbor is in closedList
    if (closedList.includes(neighbor) || neighbor.isWall) continue;

    // Set g, h, f costs
    neighbor.gCost = node.gCost + 1;
    neighbor.hCost = manhattanHeuristic(neighbor, endNode);
    neighbor.fCost = neighbor.gCost + neighbor.hCost;
    neighbor.previousNode = node;

    // Neighbor is in openList
    if (openList.includes(neighbor)) continue;
    openList.push(neighbor);
  }
}

function manhattanHeuristic(node, endNode) {
  // Utilize the Manhattan Distance -- allows for 4 directional movement (up, down, left, right)
  return Math.abs(node.row - endNode.row) + Math.abs(node.col - endNode.col);
}

function sortNodesByFCost(nodes) {
    nodes.sort((nodeA, nodeB) => nodeA.fCost - nodeB.fCost)
}