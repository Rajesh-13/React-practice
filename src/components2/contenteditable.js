import React from 'react'
import './mycss1.css'

function contenteditable() {

    const headingcss={
    fontFamily:'"Dancing Script", cursive',
    color: 'black',
    fontWeight: 'bolder',
    fontSize: '35px',
    textTransform: 'capitalize',
    margin: 'auto',
    padding:'5px',
    textShadow:' 2px 2px 5px'
    }




    return (
        <div>
            <h2 className='heading'>Hello my name is <span contentEditable="true">Rajesh</span></h2>
            <h2 style={headingcss}>Hello my name is Rajesh(using external css)</h2>

            <h2 style={{color:"black",TextTransform:"capitalize"}}>Hello my name is Rajesh(inline css where the styles are given as objects)</h2>

            <h2 className='heading'>Hello my name is Rajesh</h2>
            <div className="image_div">
                <img className="image" src="https://picsum.photos/200/300?random=1" alt="'LOREM PICSUM'" />
                <img className="image" src="https://picsum.photos/200/300?random=2&blur=5" alt="'LOREM PICSUM'" />
                <img className="image" src="https://picsum.photos/200/300?random=3&blur=1&grayscale" alt="'LOREM PICSUM'" />
                <a href="https://picsum.photos/" target="_lkjlj">
                    <img className="image" src="https://picsum.photos/200/300?random=5" alt="'LOREM PICSUM'" /></a>
            </div>
        </div>
    )
}

export default contenteditable
