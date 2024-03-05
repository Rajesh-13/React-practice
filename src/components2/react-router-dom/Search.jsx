import React, { useState } from 'react'
import Search_result from './Search_result'

function Search() {

    const [img, setImg] = useState('')

    function inputEvent(event){
        setImg(event.target.value)
    }

    return (
        <>
            <h2>Hii</h2>
            <input type='text' placeholder='search here' value={img} onChange={inputEvent} ></input>
            <p>{img}</p>
            {img===""?null:<Search_result result={img}/>}
            {/* // <Search_result result={img}/>     */}
        </>
    )
}

export default Search
