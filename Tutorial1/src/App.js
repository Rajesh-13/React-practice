import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';


// import Greet from './components/Functional_comp.js';
// import Welcome from './components/Class_comp';
// import No_Jsx fr om './components/jsx';
// import Props from './components/props';
// import Message from './components/Message'
// import Counter from './components/counter';
// import Functionclick from './components/functionClick';
// import Classclick from './components/classClick';
// import EventBind from './components/EventBind'
// import ParentComp from './components/parentcomp'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import StyleSheets from './components/styleSheets'
// import Inline from './components/inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'
// import LifeCycleA from './components/LifeCycleA';
// import FragmentDemo from './components/FragmentDemo'
// import PureComponent from './components/pureComp'
import ParentComponent from './components/ParentComponent'
function App() {
  
  return (
    
    <div className="App">
      {/* <Greet />
      <Welcome />      
      <No_Jsx /> */}

      {/* <Props name='Bruce'><p>this is children tag accessed by props.children</p></Props>
      <Props name='James'><button>Action</button></Props>
      <Props name='Carl'/>
      <Welcome name='Bruce' /> */}

      {/* <Message /> */}


      {/* <Counter /> */}

      {/* <Functionclick />
      <Classclick /> */}

      {/* <EventBind /> */}

      {/* <ParentComp /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <StyleSheets primary={false} />  */}

      {/* <Inline /> */}

      {/* <h2 className='error'>Error</h2>           */}
      {/*This is usually not used because they could be used in every child component without importing them which causes confusion*/}
      
      {/* <h2 className={styles.success}>Success</h2>    */}
      {/* This has local scope which means we can use them after importing */}

      {/* <Form /> */}

      {/* <LifeCycleA /> */}

      {/* <FragmentDemo /> */}

      {/* <PureComponent /> */}

      <ParentComponent />







    </div>
  );
}

export default App;
