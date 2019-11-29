import { getNodesInShortestPathOrder, getUnvisitedNeighbors } from './dijkstras' 

export function astar(grid, startNode, endNode) {
    const openList = [];
    const closedList = [];
    openList.push(startNode)

    while (!!openList.length) {
    
       const  sortedOpenListByFCost = sortOpenListByFCost(openList)        
        // get minimum f-cost node
       const currentNode = sortedOpenListByFCost.shift();

        //end case
       if (currentNode === endNode) return closedList
       
        //currentNode = lowest f in openList
            //let currentNode = openList.shift() 

        // push currentNode onto closedList and remove from openList
        closedList.push(currentNode)

        let unvistedNeighbors = getUnvisitedNeighbors()

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
        // foreach neighbor of currentNode {
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

export function getNodesInShortestPathOrder(endNode) {
    const nodesInShortestPathOrder = []
    let currentNode = endNode
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode)
        currentNode = currentNode.previousNode
    }

    return nodesInShortestPathOrder
}
