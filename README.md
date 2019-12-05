# Pathfinding Visualizer
This is a shortest pathfinding visualizer utilizing Dijkstra's and A* search algorithms. This A* search algorithm utilizes the Manhattan distance for it's heuristic function -- this allows for only up, down, left, right movements. This project is built using React.  

## Getting Started

```
run npm install
```

```
run npm start
```

### Implementation with minimum heap

The heap implementation allows for constant time insertion and removal. Without using a heap the array of nodes will be sorted each time a node is inserted -- thus creating a time complexity of O(logn). Heap implementation won't matter in this case as there are not enough nodes to make a difference.

```js
function astar(grid, startNode, endNode) {

  // Initialize
  const closedList = [];
  startNode.gCost = 0;

  // Create Heap
  const openList = newHeap([])

  // Push startnode 
  openList.insert(startNode);

  while (!!openList.count) {

    // Remove lowest fCost node
    const closestNode = openList.remove();

    closedList.push(closestNode);
    closestNode.isVisited = true;

    // End case
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

    // Set costs
    neighbor.gCost = node.gCost + 1;
    neighbor.hCost = manhattanHeuristic(neighbor, endNode);
    neighbor.fCost = neighbor.gCost + neighbor.hCost;
    neighbor.previousNode = node;

    // neighbor is in openList
    if (openList.search(neighbor)) continue;
    openList.insert(neighbor);
  }
}
```

### Manhattan Heuristic Function

```js
 function manhattanHeuristic(node, endNode) {
  // Utilized the Manhattan Distance -- allows for 4 directional movement (up, down, left, right)

  return Math.abs(node.row - endNode.row) + Math.abs(node.col - endNode.col);
}
```

## Authors

* **Jimmy Nguyen* - *Portfolio* - [PurpleBooth](https://jimmynguyen.dev/)