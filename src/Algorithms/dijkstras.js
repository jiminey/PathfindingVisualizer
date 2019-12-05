import { getUnvisitedNeighbors } from "../Node/Node";

export function dijkstra(grid, startNode, endNode) {
  const visitedNodes = [];
  startNode.distance = 0;
  const unvistedNodes = getAllNodes(grid);

  while (!!unvistedNodes.length) {
    sortNodesByDistance(unvistedNodes);
    // Grab closest distanced node
    const closestNode = unvistedNodes.shift();

    // Case node is wall
    if (closestNode.isWall) continue;

    // Case trapped
    if (closestNode.distance === Infinity) {
      // Animate last node by adding extra object
      visitedNodes.push({});
      return visitedNodes;
    }

    closestNode.isVisited = true;
    visitedNodes.push(closestNode);

    if (closestNode === endNode) return visitedNodes;
    updateUnvisitedNeighbors(closestNode, grid);
  }
}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1; // Central node + 1 for surronding nodes
    neighbor.previousNode = node; // Set point to backtrack
  }
}

function sortNodesByDistance(unvistedNodes) {
  unvistedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}
