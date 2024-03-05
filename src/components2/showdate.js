import React from 'react'

function showdate() {
    const currentDate=new Date().toLocaleDateString();
    const currentTime=new Date().toLocaleTimeString();
    return (
        <>
          <h1>Hi Todays date is</h1>
          <p>current date is={currentDate}</p>  
          <p>current date is={currentTime}</p>  
        </>
    )
}

export default showdate

