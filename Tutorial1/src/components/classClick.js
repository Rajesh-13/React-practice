import React, { Component } from 'react'

export class classClick extends Component {

    clickHandler(){
        console.log('Class button clicked')
    }


    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>class click</button>
            </div>
        )
    }
}

export default classClick
