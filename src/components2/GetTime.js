import React,{useState} from 'react'




function Hooks() {
    let ntime=new Date().toLocaleTimeString();
    const [ctime,settimes]=useState(ntime)
    const [dtime,settime]=useState(ntime)
    
    function Gettime(){
        ntime=new Date().toLocaleTimeString();
        settime(ntime)
    }
    
    function Gettimes(){
        ntime=new Date().toLocaleTimeString();
        settimes(ntime)
    }

    setInterval(Gettime,1000)

    
    return (
        <>
          <h1>{ctime}</h1>  
          <button onClick={Gettimes} >get time</button>
          <h1>{dtime}</h1>
        </>
    )
}

export default Hooks
