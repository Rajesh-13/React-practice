import React, { createElement } from 'react';


const welcome=()=>{
    return React.createElement('div',{id:'dummy',className:'dummmyclass'},React.createElement('h1',null,'This was created without jsx'))
}

export default welcome