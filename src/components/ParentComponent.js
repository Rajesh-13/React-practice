import React, { Component } from 'react'
import PureComp from './pureComp';
import RegularComp from './RegularComp';

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Rajesh',
            flag: 0
        }
    }

    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState({
    //             name:'rajesh'
    //         })
    //     }, 2000);
    // }

    componentDidMount() {
        setInterval(() => {
            if (this.name === 'Rajesh')
                this.setState({
                    name: 'rajesh',
                    flag: 1
                })
            else {
                this.setState({
                    name: 'Rajesh',
                    flag: 0
                })
            }
        }, 2000);
    }

    render() {
        console.log('**********Parent Component************')
        return (
            <div>
                ParentComponent
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComponent
