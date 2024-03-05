import React, { useState } from 'react'

function Form2() {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    });

    function inputEvent(eventobj) {
        console.log(eventobj.target.value)
        console.log(eventobj.target.name)
        const value = eventobj.target.value
        const name = eventobj.target.name

        setFullName((preValue)=>{
            if (name === "fname") {
                return {
                    fname: value,
                    lname: preValue.lname   //<------get the previous value
                }
            }
            else if(name==='lname'){
                return {
                    fname: preValue.fname,
                    lname: value
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
            <form onSubmit={afterSubmit}>
                <input type='text' placeholder='Enter Your Name' onChange={inputEvent} name='fname' value={fullName.fname} />
                <br />
                <input type='text' placeholder='Enter Your last Name' onChange={inputEvent} name='lname' value={fullName.lname} />
                <button type='Submit' onClick={clicked}>Click Me</button>
            </form>
            <h2 id="namesubmit"></h2>
        </>
    )
}

export default Form2




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