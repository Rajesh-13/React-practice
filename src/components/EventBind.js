import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        this.clickHandler=this.clickHandler.bind(this)  //Binding happens once in the constructor so this is a better method than using it in render method
    }
    
    clickHandler(){
        if (this.state.message=='Hello')
        this.setState({
            message:'Good bye'
        })
        else
        this.setState({
            message:'Hello'
        })
    }

    clickHandler1=()=>{                          //Class property as arrow function
        if (this.state.message=='Hello')
        this.setState({
            message:'Good bye'
        })
        else
        this.setState({
            message:'Hello'
        })
    }





    render() {
        return (
            <div>
                <div>{this.state.message} ,Using bind(this)</div>           {/*Not recommended*/}
                <button onClick={this.clickHandler.bind(this)}>Click</button>

                <div>{this.state.message} ,Using Arrow Function</div>       {/*Not recommended*/}
                <button onClick={()=>this.clickHandler()}>Click</button>

                <div>{this.state.message} ,Binding in the class constructor</div>
                <button onClick={this.clickHandler}>Click</button>

                <div>{this.state.message} ,Class property as arrow function(diff function is used for now)</div>
                <button onClick={this.clickHandler1}>Click</button>
            </div>
        )
    }
}

export default EventBind
