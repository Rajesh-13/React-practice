import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';import './ToDo.css'
function ToDoitems(props) {

    const [line,setLine]=useState(false)


    function cutIt(){
        setLine(true)
    }
    
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', margin: '2px' }}>


                {/* <DeleteIcon id="deletebtn" onClick={()=>{
                    props.onSelect(props.id)
                }} /> */}

                <DeleteIcon id="deletebtn" onClick={cutIt} />



                <li style={{textDecoration:line?'line-through':'none',color: '#aaaaaa'}}>{props.text}</li>

            </div>

        </>
    )
}

export default ToDoitems
