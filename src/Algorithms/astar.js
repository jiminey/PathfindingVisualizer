import { getUnvisitedNeighbors, getAllNodes } from './dijkstras' 

export function astar(grid, startNode, endNode) {
   const visitedNodes = []
   startNode.distance = 0;
   startNode.fCost = 0;
   const unvisitedNodes = getAllNodes(grid);

   while(!!unvisitedNodes.length) {
       const sortedUnvisitedNodesByFCost = sortByFCost(unvisitedNodes)
       const closestNode = sortedUnvisitedNodesByFCost.shift();

       if (closestNode.isWall) contine;

       if (closestNode.distance = Infinity) return visitedNodes;

       closestNode.isVisted = true;
       visitedNodes.push(closestNode)

       if (closestNode === endNode) return visitedNodes;

       updateUnvisitedNeighbors(closestNode, grid, startNode, endNode)
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
