import React ,{ Component } from 'react';

class Class_comp extends Component{
    render(){
        return <p>Using Class component and 'this' keyword<h1>{this.props.name}</h1></p>

    }
}

export default Class_comp;