import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rajesh'
        }
        console.log('LifecycleB construcutor')    //4
    }
    
    static getDerivedStateFromProps(props,state){      //------>static has to be included   //5
        console.log('LifecycleB getDerivedStateFromProps')
        return null                //----->it has to return new state or null
    }

    componentDidMount(){
        console.log('LifecycleB component did mount')      //7


    }


    shouldComponentUpdate(){
        console.log('LifecycleB shoudComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevStates){
        console.log('lifecycyleB getsnapshotbeforeupdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }



    render() {

        console.log('LifecycleB render')        //6
        return (
            <div>
                LifeCycleB
                
            </div>
        )
    }
}

export default LifeCycleB
