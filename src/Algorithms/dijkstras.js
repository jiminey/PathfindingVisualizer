import { getUnvisitedNeighbors } from "../Node/Node"

//set distance to every node to infinity -- too far away
//start node is distance of zero
//pick closest node of all nodes aka start node -> 0
//update all neighboring node (up down left right) -> change node's distance to current distance + 1 ie.[0 + 1]
//grab closest node of all remaing node, repeat

export function dijkstra(grid, startNode, endNode) {
    const visitedNodes = []
    startNode.distance = 0
    const unvistedNodes = getAllNodes(grid)
    
    //grab closest unvisited node and set it to visited and push to visitedNode until closest node 
    while (!!unvistedNodes.length){
        sortNodesByDistance(unvistedNodes)
        const closestNode = unvistedNodes.shift();

        //if encounter a wall we skip it aka move around
        if (closestNode.isWall) continue;

        //case of being trapped
        if (closestNode.distance === Infinity) {
            //edge case: add extra item to animate last obj when trapped
            visitedNodes.push({})
            return visitedNodes;
        }

        closestNode.isVisited = true;
        visitedNodes.push(closestNode)

        if (closestNode === endNode) return visitedNodes;
        updateUnvisitedNeighbors(closestNode, grid);
    }
}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid)
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1 //central node + 1 for surronding nodes
    neighbor.previousNode = node //set point to backtrack
  }
}

function sortNodesByDistance(unvistedNodes) {
    unvistedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance)
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

