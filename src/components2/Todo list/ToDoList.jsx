import React, { useState } from 'react'
import './ToDo.css'
import ToDoitems from './ToDoitems'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


function ToDoList() {

    const [inputList, setInputList] = useState()
    const [items, setItem] = useState([])

    function itemEvent(event) {
        const value = event.target.value
        setInputList(value)
    }

    function listOfItems() {
        setItem((oldValues) => {
            return [...oldValues, inputList]
        })

        setInputList('')
    }



    function deleteItems(id) {
        console.log('deleted')
        console.log(id)

        setItem((oldValue) => {
            return oldValue.filter((arr, index) => {
                return index !== id
            })
        })

    }

    return (
        <>
            <div className='main_div'>
                <div className='container-fluid center_div'>
                    <br />
                    <div className='h2div'>
                        <h2>ToDo List</h2>
                        <hr></hr>

                    </div>
                    <p>THE SIZE OF THE DIV INCREASES AS ITEMS INCREASE</p>
                    <br />
                    <input type='text' placeholder='Add a item' onChange={itemEvent} value={inputList} />
                    <Button variant="contained" onClick={listOfItems} id="mbtn"><span style={{ fontWeight: 'bolder' }}>ADD</span></Button>

                    <ul>
                        {items.map((itemVal, index) => {
                            return <ToDoitems
                                text={itemVal}
                                key={index}
                                id={index}
                                onSelect={deleteItems}
                            />
                        })}

                    </ul>

                </div>

            </div>
        </>
    )
}

export default ToDoList
