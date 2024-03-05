import React, { useState } from 'react'

function Form1() {

    const [name, setName] = useState('')
    const [fullname, setFullName] = useState('')

    // const inputEvent = (event) => {
    //     // console.log(eventobj)
    //     console.log(event.target.value)
    // }

    function inputEvent(eventobj) {
        setName(eventobj.target.value)
    }


    function clicked() {
        document.getElementById('namesubmit').innerHTML = `Thank You ${name}`
    }

    //----------------------------------------

    // return (
    //     <>
    //         <h1>HELLO, {name}</h1>
    //         {/* <input type='text' placeholder='Enter Your Name' defaultValue="ef" /> */}

    //         <input type='text' placeholder='Enter Your Name' onChange={inputEvent} />
    //         <button onClick={clicked}>Click Me</button>
    //         <h2 id="namesubmit"></h2>

    //     </>
    // )

    //-------------------OR------------------- USING FORM TAG

    function afterSubmit(event){
        setFullName(name)
        event.preventDefault()     //<-----------------------------TO AVOID RELOADING OF PAGE AFTER SUBMIT AS RELOADING WILL SET THE STATES WITH DEFAULT VALUE

    }



    return (
        <>
            <h1>HELLO, {name}</h1>
            {/* <input type='text' placeholder='Enter Your Name' defaultValue="ef" /> */}
            <form onSubmit={afterSubmit}>
                <input type='text' placeholder='Enter Your Name' onChange={inputEvent} value={name} />
                <button type='submit' onClick={clicked}>Click Me</button>
            </form>
            <h2 id="namesubmit"></h2>


        </>
    )


}

export default Form1
