import React ,{ Component } from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={        //state is a reserved keyword and react will automatically know that we are changing ths state here
            message:"Welcome Visitor"
        }
        
    }

    changeMessage(){
        this.setState({                        //This setState method is called to alter the state of a class component
            message:"Thank u for subscribing How to change button text to subscribed?"
        })
    }

    render(){
        return( 
            <div>
                <h1>{this.state.message}</h1>
                <button id="btn" onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;