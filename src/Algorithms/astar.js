import { getUnvisitedNeighbors, getAllNodes } from './dijkstras' 

export function astar(grid, startNode, endNode) {

    // Initialize
    const closedList = [];
    startNode.distance = 0;
    const openList = [startNode];

    while(!!openList.length) {
        const sortedOpenList = sortByFCost(openList)
        const closedNode = sortedOpenList.shift();
    }
    
}

function updateUnvisitedNeighbors(node, grid, startNode, endNode) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid)
    for (const neighbor of unvisitedNeighbors) {
        gCost = node.distance + 1
        neighbor.hCost = manhattanHeuristic(startNode.x, startNode.y, endNode.x, endNode.y)

    }
}

function manhattanHeuristic(startX, startY, endX, endY) {
    // Utilize the Manhattan Distance -- allows for 4 directional movement (up, down, left, right)
    return Math.abs(startX - endX) + Math.abs(startY - endY)
}

function sortByFCost(unvisitedNodes) {
    return unvisitedNodes.sort((nodeA,nodeB) => nodeA.fCost - nodeB.fCost)
}
