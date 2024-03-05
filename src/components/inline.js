import React from 'react'
//USING INLINE CSS
function inline() {
    
    const inlinecss={
        fontSize:'72px', //--------->The key should be camelCase and the value should be a string
        color:'green'
    }
    
    return (
        <div>
            <h1 style={inlinecss}>Inline</h1>
        </div>
    )
}

export default inline
