import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            btn: 'Log In',
            name: 'User'
        }
        this.btnState = this.btnState.bind(this)
    }

    btnState() {
        if (this.state.btn == "Log In")
            this.setState({
                btn: "Log Out",
                name: "Rajesh",
                isLoggedIn: true

            })
        else
            this.setState({
                btn: "Log In",
                name: "Guest",
                isLoggedIn: false
            })
    }

    render() {

        // Using if-else

        // if (this.state.isLoggedIn)
        // return (
        //     <div>
        //         <div>Welcome {this.state.name}</div>
        //         <button onClick={this.btnState}>{this.state.btn}</button>
        //     </div>
        // )
        // else
        // return (
        //     <div>
        //         <div>Welcome {this.state.name}</div>
        //         <button onClick={this.btnState}>{this.state.btn}</button>
        //     </div>
        // )

        //OR
        //Using Element variable approach

        // let message
        // if (this.state.isLoggedIn)
        //     message=<div>Welcome Rajesh</div>
        // else
        //     message=<div>Welcome Guest</div>

        // return (
        //     <div>
        //     {message}
        //     <button onClick={this.btnState}>{this.state.btn}</button>
        //     </div>
        // )

        //OR
        //Using Ternary operator  ---->This can be used inside jsx i.e. inside the return statement

        return (this.state.isLoggedIn ?
            <div>
                <div>Welcome Rajesh</div>
                <button onClick={this.btnState}>{this.state.btn}</button>
            </div> :
            <div>
                <div>Welcome Guest</div>
                <button onClick={this.btnState}>{this.state.btn}</button>
            </div>
        )

        //OR
        //Short-circuit approach

        // return this.state.btn.isLoggedIn && <div>Welcome Rajesh</div>
        







        // return (
        //     <div>
        //         <div>Welcome {this.state.name}</div>
        //         <button onClick={this.btnState}>{this.state.btn}</button>
        //     </div>
        // )

    }
}

export default UserGreeting
