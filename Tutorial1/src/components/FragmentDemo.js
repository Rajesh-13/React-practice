import React from 'react'

function Fragment() {
    // const items=[]
    return (
        // we can use short hand syntax for react.fragment by just putting <> and </> but the limitation is we cannot use key attribute
        <React.Fragment>     
            {/* {
                items.map(item=>(
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <h2>React fragment</h2>
            <p>Here we can return multiple html tags using "react.fragment" , when div is used then there will be two div as by default a div will be created in app.js</p>
        </React.Fragment>
            
        
    )
}

export default Fragment
