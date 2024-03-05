import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Web from './bg1.jpg'
import Web1 from './image1.svg'
import Button from '@material-ui/core/Button';
import Common from './Common'


function Home() {
    return (
        <>
            <Common title='Welcome to About page' btn='Contact Us'/>
        </>
    )
}

export default Home