import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
        this.usereventhandler=this.usereventhandler.bind(this)
    }
    
    usereventhandler=(event)=>{            //when we assign a value to the onchange method the event itself is passed as parameter to the eventhandler
        this.setState({
            username:event.target.value
        })
    }

    usercommentshandler=(event)=>{            
        this.setState({
            comments:event.target.value
        })
    }

    usertopichandler=(event)=>{            
        this.setState({
            topic:event.target.value
        })
    }

    usersubmithandler=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()  //------------>To AVOID refresh of the page after submit
    }

    render() {
        // If this line is included then there is no need to write this.state.username .. anywhere we can directly write username
        // const{username,comments,topic}=this.state 
        return (
            <form onSubmit={this.usersubmithandler}>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange={this.usereventhandler}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea type='textarea' value={this.state.comments} onChange={this.usercommentshandler}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.usertopichandler}>
                        <option value='react'>react</option>
                        <option value='angular'>angular</option>
                        <option value='vue'>vue</option>

                    </select>

                </div>
                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default Form
