import React, { useState,useEffect } from 'react'

function UseEffect_hooks() {

    const [num, setNum] = useState(0)
    const [nums, setNums] = useState(0)


    // USEEFFECT ALWAYS TAKES A FUNCTION
    useEffect(() => {
        alert("button 1 is clicked")
        document.title=`You clicked me ${num} times`
    }, [num])   //re-render when num state is changed 


    useEffect(() => {
        alert("button 2 is clicked")
    }, [nums])

    return (
        <>
            <button onClick={() => setNum(num + 1)}>click me {num}</button>
            <br />
            <button onClick={() => setNums(nums + 1)}>click me {nums}</button>
        </>
    )
}

export default UseEffect_hooks
