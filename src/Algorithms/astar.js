import { getUnvisitedNeighbors, getAllNodes } from './dijkstras' 


export function astar(grid, startNode, endNode) {
    const closedList = [];
    startNode.fCost = 0
    const openList = [startNode];


    while (!!openList.length) {
       const  sortedOpenListByFCost = sortOpenListByFCost(openList)        
        // get minimum f-cost node
       const closestNode = sortedOpenListByFCost.shift();

        //end case
       if (closestNode === endNode) return closedList

        // push closestNode onto closedList and remove from openList
        closedList.push(closestNode)
        closestNode.isVisted = true

        const unvistedNeighbors = getUnvisitedNeighbors(closestNode, grid)

        for (const neighbor of unvistedNeighbors) {
            if (openList.includes(neighbor) || neighbor.isWall) continue;
            // gCost is the shortest distance from start and closestNode
            let gCost = closestNode.gCost + 1;
            let isGCostBest = false;
            
            if (!openList.includes(neighbor)) {
                //save g, h, f then save the currentParent
                isGCostBest = true;
                neighbor.hCost = manhattanHeuristic(startNode.x, startNode.y, endNode.x, endNode.y)
                openList.push(neighbor)
            } else if (gCost < neighbor.gCost) {
                // We have already seen the node, but last time it had a worse g (distance from start)
                isGCostBest = true; 
            }

            if (isGCostBest) {
                neighbor.gCost = gCost
                neighbor.fCost = neighbor.gCost + neighbor.hCost
                neighbor.previousNode = closestNode;
            }
        }
    }
}

function manhattanHeuristic(startX, startY, endX, endY) {
    // Utilize the Manhattan Distance -- allows for 4 directional movement (up, down, left, right)
    return Math.abs(startX - endX) + Math.abs(startY - endY)
}

function sortOpenListByFCost(openListArray) {
    return openListArray.sort((nodeA,nodeB) => nodeA.fCost - nodeB.fCost)
}
