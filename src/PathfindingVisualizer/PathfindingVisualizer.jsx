import React, { Component } from 'react'
import Node from '../Node/Node'

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: []
        }
    }

    componentDidMount() {
        //initialize grid
        const grid = []
        for (let row = 0; row < 20; row++) {
            const currentRow = []
            for (let col = 0; col < 50; col++) {
                currentRow.push([])
            }
            grid.push(currentRow)
        }
        this.setState({grid})
    }
    

    render() {
        const {grid} = this.state
        return (
            <div className='grid'>
                {grid.map((row, rowIdx) => {
                    return (
                        <div>
                            {row.map((node, nodeIdx) => <Node></Node> )}
                        </div>
                    )
                })}
            </div>
        )
    }
}
