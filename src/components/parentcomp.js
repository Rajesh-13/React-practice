import React, { Component } from 'react'
import Childcomp from './childcomp'

class parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }

        this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <Childcomp greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default parentcomp
