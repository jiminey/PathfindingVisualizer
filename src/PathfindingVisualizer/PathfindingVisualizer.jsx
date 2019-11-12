import React, { Component } from 'react'
import Node from '../Node/Node'

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nodes: []
        }
    }

    componentDidMount() {
        //initialize board
        const nodes = []
        for (let row = 0; row < 15; row++) {
            const currentRow = []
            for (let col = 0; col < 50; col++) {
                currentRow.push([])
            }
            nodes.push(currentRow)
        }
        this.setState({nodes})
    }
    

    render() {
        return (
            <div>
                <p>this is pfv jsx</p>
                <Node></Node>
            </div>
        )
    }
}
