import { getUnvisitedNeighbors, getAllNodes } from './dijkstras' 

export function astar(grid, startNode, endNode) {
   const visitedNodes = []
   startNode.distance = 0;
   const unvisitedNodes = getAllNodes(grid);

   while(!!unvisitedNodes.length) {
       const sortedUnvisitedNodesByFCost = sortByFCost(unvisitedNodes)
       const closestNode = sortedUnvisitedNodesByFCost.shift();

       if (closestNode.isWall) contine;

       if (closestNode.distance = Infinity) return visitedNodes;

       closestNode.isVisted = true;
       visitedNodes.push(closestNode)

       if (closestNode === endNode) return visitedNodes;

       updateUnvisitedNeighbors(closestNode, grid)
   }
}

function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid)
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1 //central node + 1 for surronding nodes
        neighbor.previousNode = node //set point to backtrack
    }
}

function manhattanHeuristic(startX, startY, endX, endY) {
    // Utilize the Manhattan Distance -- allows for 4 directional movement (up, down, left, right)
    return Math.abs(startX - endX) + Math.abs(startY - endY)
}

function sortByFCost(unvisitedNodes) {
    return unvisitedNodes.sort((nodeA,nodeB) => nodeA.fCost - nodeB.fCost)
}
