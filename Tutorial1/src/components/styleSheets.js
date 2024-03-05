import React from 'react'
import './myStyles.css'

function styleSheets(props) {
    let className=props.primary?'primary':''

    return (
        <div>
            <h2 className={className}>Welcome</h2>
            <h2 className={`${className} fontsize`}>Hello</h2>
        </div>
    )
}

export default styleSheets
