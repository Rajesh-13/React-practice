import React from 'react'

function person({personprop}) {
    return (
        <div>
           <h2>i am {personprop.name} I am {personprop.age} years old ,I know {personprop.skill}</h2> 
        </div>
    )
}

export default person
