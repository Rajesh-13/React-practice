import React from 'react'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import User from './User'
import Search from './Search'

function Main() {
    return (
        <>
            <Home />
            <Switch>
                <Route exact path='/' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/service' component={Service} />
                <Route path='/search' component={Search} />
                <Route path='/user/:fname/:lname' component={User} />
                <Route component={Error} />
            </Switch>
            {/* FOR PASSING PROPS */}

            {/* <Switch>
                <Route path='/service' render={()=>{
                    <Service name="service"/>
                }}  />
            </Switch> */}



        </>
    )
}

export default Main
