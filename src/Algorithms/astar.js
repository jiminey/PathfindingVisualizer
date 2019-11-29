export function astar(grid, startNode, endNode) {
    const openList = [];
    const closedList = [];
    openList.push(startNode)

    while (!!openList.length) {
        //currentNode = lowest f in openList
            //let currentNode = openList.shift() 

        // push currentNode onto closedList and remove from openList
            closedList.push(currentNode)


        let nodeNeighbors = this.getNodeNeighbors()

        for (let neighbor of nodeNeighbors) {
            if (!openList.includes(neighbor)) {
                //save g, h, f then save the currentParent
                openList.push(neighbor)
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

function getNodeNeighbors() {
    return;
}

