import React, { useState } from 'react'

function Form3() {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });

    function inputEvent(eventobj) {
        console.log(eventobj.target.value)
        console.log(eventobj.target.name)

        const { value, name } = eventobj.target

        setFullName((preValue) => {
            return {
                ...preValue,          //<--first set all the properties with their previous values
                [name]: value         //<--then check the name and modify that property by assigning value
                //like if name=fname then change the fname in prevalue to value
            }

        })

    }

    function clicked() {
        document.getElementById('namesubmit').innerHTML = `Thank You ${fullName.fname} ${fullName.lname}`
    }


    function afterSubmit(event) {
        // setFullName(fullName)
        event.preventDefault()     //<-----------------------------TO AVOID RELOADING OF PAGE AFTER SUBMIT AS RELOADING WILL SET THE STATES WITH DEFAULT VALUE

    }

    return (
        <>
            <h1>HELLO  {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>

            <form onSubmit={afterSubmit}>
                <input type='text' placeholder='Enter Your Name' onChange={inputEvent} name='fname' value={fullName.fname} />
                <br />

                <input type='text' placeholder='Enter Your last Name' onChange={inputEvent} name='lname' value={fullName.lname} />
                <br />

                <input type='email' placeholder='Enter Your email' onChange={inputEvent} autoComplete="off" name='email' value={fullName.email} />
                <br />

                <input type='number' placeholder='Enter Your phone number' onChange={inputEvent} name='phone' value={fullName.phone} />
                <button type='Submit' onClick={clicked}>Click Me</button>
            </form>
            <h2 id="namesubmit"></h2>
        </>
    )
}

export default Form3



