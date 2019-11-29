import { getUnvisitedNeighbors } from './dijkstras' 

export function astar(grid, startNode, endNode) {
    const openList = [];
    const closedList = [];
    openList.push(startNode)

    while (!!openList.length) {
    
       const  sortedOpenListByFCost = sortOpenListByFCost(openList)        
        // get minimum f-cost node
       const closestNode = sortedOpenListByFCost.shift();

        //end case
       if (closestNode === endNode) return closedList
       
        //closestNode = lowest f in openList
            //let closestNode = openList.shift() 

        // push closestNode onto closedList and remove from openList
        closedList.push(closestNode)

        let unvistedNeighbors = getUnvisitedNeighbors(closestNode, grid)

        for (let neighbor of unvistedNeighbors) {
            if (!openList.includes(neighbor)) {
                //save g, h, f then save the currentParent
                openList.push(neighbor)
            }
            if (openList.includes(neighbor) 
            // && current g is better than previous g
            ) {
                 //save g  and f , then save the currentParent
            }
            

        }
        // foreach neighbor of closestNode {
        //     if neighbor is not in openList {
        //         save g, h, and f then save the current parent
        //         add neighbor to openList
        //     }
        //     if neighbor is in openList but the current g is better than previous g {
        //         save g and f, then save the current parent
        //     }
        // }

    }
}



function sortOpenListByFCost(openListArray) {
    return openListArray.sort((nodeA,nodeB) => nodeA.fCost - nodeB.fCost)
}
