import { getUnvisitedNeighbors, getAllNodes } from './dijkstras' 

export function astar(grid, startNode, endNode) {

    // Initialize
    const closedList = [];
    startNode.distance = 0;
    startNode.gCost = 0;
    endNode.hCost = 0
    const openList = [startNode];

    while(!!openList.length) {
        sortByFCost(openList)
        const closestNode = openList.shift();

        closestNode.isVisited = true;
        closedList.push(closestNode)

        if (closestNode.isWall) continue;

        // check for trap?
        // if (closestNode.distance = Infinity) return closedList; 

        if (currentNode === endNode) return closedList; 

        updateUnvisitedNeighbors(closestNode, grid)
    }
}

function updateUnvisitedNeighbors(node, grid, startNode, endNode) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid)
    for (const neighbor of unvisitedNeighbors) {
        if (closedList.includes(neighbor)) continue; 

        neighbor.gCost = node.gCost + 1
        neighbor.hCost = manhattanHeuristic(startNode.x, startNode.y, endNode.x, endNode.y)
        neighbor.fCost = neighbor.gCost + neighbor.hCost
        neighbor.previousNode = node
    }
}

function manhattanHeuristic(startX, startY, endX, endY) {
    // Utilize the Manhattan Distance -- allows for 4 directional movement (up, down, left, right)
    return Math.abs(startX - endX) + Math.abs(startY - endY)
}

function sortByFCost(unvisitedNodes) {
    unvisitedNodes.sort((nodeA,nodeB) => nodeA.fCost - nodeB.fCost)
}
