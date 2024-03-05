import React from 'react';
// function Greet(){
//     return <h2>Hello Welcome to functional component</h2>
// }

const Greet=()=><h2>Hello!! welcome to functional component</h2>  //Arrow function

export default Greet;  // default means when we import it in any other file then we can use any name other Greet ex: import Mycomponent from './components/Greet.js'; and <Mycomponent>

// export const Greet=()=><h2>Hello!! welcome to functional component</h2>  -->This is called name export and we cannot change in the name in other files

