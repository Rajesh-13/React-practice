import React from 'react'

function Search_result(props) {
    const image=`https://source.unsplash.com/400x300/?${props.result}`
    return (
        <>
            <div>
                <img src={image} alt="search" />
            </div>
        </>
    )
}

export default Search_result
