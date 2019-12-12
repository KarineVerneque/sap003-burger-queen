import React from 'react';
//import './style.css';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home';
import Login from './login';
import SignUp from './signup';


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    </Router>
  )
}

export default App;








/*import React, { useState, useRef, useEffect } from 'react';

function PrintName() {
  const [name, setName] = useState('') //state hook
  const inputRef = useRef(null) //ref hook
  
  const [age, setAge] = useState(42)
  console.log(setAge)

  useEffect(() => {
    inputRef.current.value = ''
  })

return(
  <>
  <input type='text' ref={inputRef} placeholder='Nome'/>
  <button onClick={() => setName(inputRef.current.value)}>Printa</button>
  <p>{name}</p>
  <p>Sua idade: {age}</p>
  </>
)
}

export default PrintName;

*/

/////////////////////////////////

//function App() {
//  return (
//    <div className="App">
//      <h1>Xuxu</h1>
//    </div>
//  );
//}
//
//
//export default App;
