import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {fname,lname}=useParams()  //Here the object names should be same as passed in main.jsx
    return (
        <>
            <h2>User {fname} {lname} page</h2>
        </>
    )
}

export default User
