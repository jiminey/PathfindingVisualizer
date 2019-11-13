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
    }

    //set distance to every node to infinity -- too far away
    //start node is distance of zero
    //pick closest node of all nodes aka start node -> 0
    //update all neighboring node (up down left right) -> change node's distance to current distance + 1 ie.[0 + 1]
    //grab closest node of all remaing node, pick one of the 4 and keep doing this process 


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