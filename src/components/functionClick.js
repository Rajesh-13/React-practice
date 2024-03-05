import React from 'react'

function functionClick() {
    function clickHandler(){
        console.log("Function button clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>function click</button>   Here the event handler should be a function and not a function call, here it is clickHandler(function) and not clickHandler()(functioncall)  
        </div>
    )
}

export default functionClick;
