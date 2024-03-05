import React, { Component } from 'react';   //------> type rce and enter to create this class template

class counter extends Component {
    constructor(props) {      //-----> type rconst to get this constructor
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('This is callback value', this.state.count) })     //----->this callback is used when we want to perform some action after the setState method is executed 

        // console.log(this.state.count)     //---->react is asynchronous which means this line gets executed first and the the setState is executed, to avoid this callback method is used 

        this.setState((prevState) => ({      //--->if prevstate is not used then when inc five is called then all five increment function will be executed at the same time due to which the value will not be changed           
            count: prevState.count + 1
        }), console.log('callback', this.state.count))


    }

    reset() {
        this.setState({
            count: 0
        })
        console.clear()          //------>Clears the console
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


    render() {
        return (
            <div>
                <div>Count={this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>

                <button onClick={() => this.reset()}>Reset</button>
                <button onMouseOver={() => this.increment()}>Mouseover</button>
                <button onClick={()=>this.incrementFive()}>inc+5</button>
            </div>
        )
    }
}

export default counter