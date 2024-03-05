import React from 'react'
import Person from './person.js'

function NameList() {
    const names = ['Clark', 'Bruce', 'Diana', 'Bruce']
    const persondetails = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 20,
            skill: 'Vue'
        }
    ]
    //     return (

    //         <div>
    //             {/* <h2>{names[0]}</h2>
    //             <h2>{names[1]}</h2>
    //             <h2>{names[2]}</h2> */}

    //             {/* Using Map method */}

    //             {/* {
    //                 names.map(name => <h2>{name}</h2>)
    //             } */}



    //         </div>
    //     )
    // }

    // const personList=persondetails.map(personvar=><Person key={personvar.id} personprop={personvar}></Person>)   //------>DOUBT---------------------------------------------
    // return <div>{personList}</div>
    
    // const NameList=names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    // return NameList

    return names.map((name, indexofname) => <h2 key={indexofname}>{indexofname} {name}</h2>)  //map takes (value:string,index:number,array:string[])
    //The second element i.e. indexofname will store the index of the array 
    //index is used as key when there is no other unique value in array

    //WHEN TO USE INDEX AS KEY??????
    //when the list do not have unique id
    //the list is static and will not change
    //The list will never be reordered or filtered
}
export default NameList
