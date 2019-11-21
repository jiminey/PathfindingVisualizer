export function dijkstra(grid, startNode, endNode) {
    const visitedNodes = []
    startNode.distance = 0

    const unvistedNodes = getAllNodes(grid)
    

    //grab closest unvisited node and set it to visited and push to visitedNode until closest node 
    while (!!unvistedNodes.length){
        const sortedUnvisitedNodes = sortNodesByDistance(unvistedNodes)
        const closestNode = sortedUnvisitedNodes.shift();

        //if encounter a wall we skip it aka move around
        if (closestNode.isWall) continue;

        //case of being trapped
        if (closestNode.distance === Infinity) return visitedNode;

        closestNode.isVisited = true;
        visitedNodes.push(closestNode)

        if (closestNode === endNode) return visitedNodes;
        updateUnvisitedNeighbors(closestNode, grid);
    }

    //set distance to every node to infinity -- too far away
    //start node is distance of zero
    //pick closest node of all nodes aka start node -> 0
    //update all neighboring node (up down left right) -> change node's distance to current distance + 1 ie.[0 + 1]
    //grab closest node of all remaing node, pick one of the 4 and keep doing this process 


}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid)
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1 //central node + 1 for surronding nodes
    neightbor.previousNode = node //set point to backtrack
  }
}

function getUnvisitedNeighbors(node, grid) {
    const neighbors = []
    const {row, col} = node

    if (row > 0) neighbors.push(grid[row - 1][col]) //top
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]) // bottom
    if (col > 0) neighbors.push(grid[row][col - 1]) // left
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]) // right, grid[0] = row to access col
    return neighbors.filter(node => !node.isVisited)
}

function sortNodesByDistance(unvistedNodes) {
    return unvistedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance)
}



function getAllNodes(grid) {
    const nodes = []; 
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node)
        }
    }
    return nodes
}


export function getNodesInShortestPathOrder(endNode) {
    const nodesInShortestPathOrder = []
    let currentNode = endNode
    while (currentNode) {
        nodesInShortestPathOrder.unshift(currentNode)
        currentNode = currentNode.previousNode
    }

    return nodesInShortestPathOrder
}


