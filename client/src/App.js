import React,{Fragment} from 'react';
import './App.css';

// componets

import InputTodo from './componets/inputTodo';
import ListTodo from './componets/ListTodo';

function App() {
  return (
   
    <Fragment>
     <div className='container'>
      <InputTodo/>
      <ListTodo/>
     </div>
    </Fragment>
  );
}

export default App;
