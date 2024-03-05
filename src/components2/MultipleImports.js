import React from 'react'
// import var1,{var2,myName,myName2} from './MultipleExport'
import * as obj from './MultipleExport'

function MultipleImports() {
    return (
            // <ol>
            //     <li>{var1}</li>
            //     <li>{var2}</li>
            //     <li>{myName()}</li>
            //     <li>{myName2()}</li>
            // </ol>
            <ol>
                <li>{obj.default}</li> 
                {/* default export should be written as obj.default */}
                <li>{obj.var2}</li>
                <li>{obj.myName()}</li>
                <li>{obj.myName2()}</li>
            </ol>
    )
}


export default MultipleImports
