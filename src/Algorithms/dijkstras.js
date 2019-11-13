const node = {
    row,
    col,
    isVisited,
    distance
}

function dijkstra(grid, startNode, endNode) {
    if (!startNode || !endNode || startNode === endNode) return false

    const visitedNodes = []
    startNode.distance = 0

    const unvistedNode = getAllNodes(grid)

    while (!!unvistedNode.length){
        const sortedUnvisitedNodes = sortNodesByDistance(unvistedNodes)
        const closestNode = sortedUnvisitedNodes.shift();

        //if encounter a wall we skip it aka move around
        //maybe add a isWall

        //if surronding nodes is infinity then just return visitedNodes
        if (closestNode.distance === Infinity) return visitedNodes

        closestNode.isVisited = true;
        visitedNodes.push(closestNode)

        if (closestNode === finishNode) return visitedNodes;
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
}

function getUnvisitedNeighbors(node, grid) {
    const neighbors = []
    const {row, col} = node

    if (row > 0) neighbors.push(grid[row - 1][col]) //top
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]) // bottom
    if (col > 0) neighbors.push(grid[row][col - 1])
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