import React from 'react';

const hello=(props)=>{
    console.log(props)
    return (                                            //it can return only one html tag so we used div tag
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}


export default hello