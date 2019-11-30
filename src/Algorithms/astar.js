import { getUnvisitedNeighbors } from './dijkstras' 

export function astar(grid, startNode, endNode) {
    // Initialize
    const closedList = [];
    startNode.gCost = 0;
    startNode.fCost = 0;
    startNode.hCost = 0;
    endNode.hCost = 0
    const openList = [startNode];

    while(!!openList.length) {
        sortNodesByFCost(openList)

        const closestNode = openList.shift();
        closestNode.isVisited = true;
        closedList.push(closestNode)
        // if (closestNode.fCost = Infinity) return closedList; 

        if (closestNode === endNode) return closedList; 
        updateUnvisitedNeighbors(closestNode, grid, endNode, closedList, openList)
    }
}

function updateUnvisitedNeighbors(node, grid, endNode, closedList, openList) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid)
    for (const neighbor of unvisitedNeighbors) {
        // neighbor is in closedList


        if (closedList.includes(neighbor) || neighbor.isWall) continue; 
        
        // if neighbor is already in openList
        
        let isBestPath = false;
        let tempF = node.gCost + 1
        
        if (openList.includes(neighbor)) {
            if (tempF <= neighbor.fCost) {
                neighbor.fCost = tempF
                isBestPath = true
            }
        }  else {
            neighbor.gCost = node.gCost + 1
            neighbor.hCost = manhattanHeuristic(neighbor, endNode)
            neighbor.fCost = neighbor.gCost + neighbor.hCost
            isBestPath = true
            openList.push(neighbor);
        }
        // set g, h , and f 

        // append neighbor to open list
        if (isBestPath) neighbor.previousNode = node
        // console.log(neighbor.fCost, neighbor.gCost, neighbor.hCost)
    }
}

function manhattanHeuristic(node, endNode) {
    // h-cost = distance from node to endNode
    // Utilize the Manhattan Distance -- allows for 4 directional movement (up, down, left, right)
    return Math.abs(node.row - endNode.row) + Math.abs(node.col - endNode.col)
    
}

function sortNodesByFCost(openList) {
    openList.sort((nodeA,nodeB) => nodeA.fCost - nodeB.fCost)
}
