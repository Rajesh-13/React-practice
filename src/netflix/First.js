import React from 'react'
// import Sdata from 'sdata'



function First(props) {
    console.log();
    return (
        <div class="card" style={{width:'18rem'}}>
            <img src={props.imgsrc} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.sname}</p>
                    <a href={props.link} class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        // {sdata.map(netflixcard)}


    )
}

export default First
            {/* 
<div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt="poster" className="card__img" />    
                    
                    <div className='card__info'>
                        <span className="card__catagory"> A Netflix Original Series </span>
                        <h3 className="card__title">{props.title}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div> */}