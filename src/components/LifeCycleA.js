import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rajesh'
        }
        console.log('LifecycleA construcutor')  //1
    }
    
    //This method is called every time a component is re rendered
    static getDerivedStateFromProps(props,state){      //------>static has to be included   //2
        console.log('LifecycleA getDerivedStateFromProps')
        return null                //----->it has to return new state or null
    }

    componentDidMount(){
        console.log('LifecycleA component did mount')   //8
    }


    shouldComponentUpdate(){
        console.log('LifecycleA shoudComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevStates){
        console.log('lifecycyleA getsnapshotbeforeupdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'state changed'
        })
    }

    render() {

        console.log('LifecycleA render')   //3
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />    {/*4-7*/}
            </div>
        )
    }
}

export default LifeCycleA
