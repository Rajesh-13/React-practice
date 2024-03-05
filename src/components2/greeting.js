import React from 'react'
import './greetingcss.css'

function greeting() {
    let curDate = new Date(2020,12,12,13)  //year,month,date,hour
    let curHour = curDate.getHours()
    let greeting = ''

    const cssColor = {};
    let classname = '';

    if (curHour > 1 && curHour < 12) {
        greeting = 'Good Morning'
        cssColor.color = 'black'
        classname = 'morning'
    }
    else if (curHour >= 12 && curHour < 16) {
        greeting = 'Good Afternoon'
        cssColor.color = 'black'
        classname = 'afternoon'
    }
    else if (curHour >= 16 && curHour < 19) {
        greeting = 'Good Evening'
        cssColor.color = 'black'
        classname = 'evening'
    }
    else {
        greeting = 'Good Night'
        cssColor.color = 'black'
        classname = 'night'
    }



    function myFunction(){
        var element=document.getElementById("background");
        element.classList.add(classname);
    }

    // let ele=getElementById("background")
    // ele.classList.add(classname)


    return (
        <>
            <div className='greet' id="background" onClick={myFunction} >
                <h2 id="tag"><span style={cssColor}>{greeting}</span></h2>
            </div>
        </>
    )
}

export default greeting



