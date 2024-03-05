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
        // const value = eventobj.target.value
        // const name = eventobj.target.name

        const { value, name } = eventobj.target

        setFullName((preValue) => {
            if (name === "fname") {
                return {
                    fname: value,
                    lname: preValue.lname,   //<------get the previous value
                    email:preValue.email,
                    phone:preValue.phone
                }
            }

            else if (name === 'lname') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email:preValue.email,
                    phone:preValue.phone

                }
            }

            else if (name === 'email') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email:value,
                    phone:preValue.phone

                }
            }

            else if (name === 'phone') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email:preValue.email,
                    phone:value

                }
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



