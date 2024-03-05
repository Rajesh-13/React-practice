import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Home.css'



function Home() {
    return (
        <>
            <div className="nav_style">
                <NavLink exact activeClassName="active_class" to="/" > About Us</NavLink>
                <NavLink exact activeClassName="active_class" to="/service" > Service </NavLink>
                <NavLink exact activeClassName="active_class" to="/search" > Search </NavLink>
                <NavLink exact activeClassName="active_class" to='/user/Rajesh/Web'  >User</NavLink>   {/* : is given to access useParams*/}
                <NavLink exact activeClassName="active_class" to="/contact" > Contact Us</NavLink>
            </div>

            <p>Page will not reload while navigating</p>
            <p>"Link to" works similar to "a href"</p>




            {/* <Link to="/" > About Us</Link>
            <br />
            <Link to="/contact" > Contact Us</Link> */}
        </>
    )
}

export default Home
