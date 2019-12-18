import React from 'react';
import Waiters from './waiters'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cozinha from '../pages/cozinha'
import Garcon from '../pages/garcon'
import NavBar from '../components/navBar'


function App() {

  return (
    <>
    <Waiters /><br />

    <Router>
      <div>
        <NavBar />
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/garcon">
            {/* <div>Menu</div> */}
            <Garcon />
          </Route>
          <Route path="/cozinha" component={Cozinha}/>
          {/* <Cozinha /> */}
            {/* <Cozinha title="Cozinhaaaa"/> */}
            {/* <div>Pedidos</div> */}
          {/* </Route> */}
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default App;











/*
  // Similar a componentDidMount e componentDidUpdate:
   useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `You clicked ${counter} times`;
  });

*/













// function PrintName() {  

// //  firebaseInitialize.firestore().collection('frutas').add({
// //    cor: 'amarelo',
// //    peso: 'médio',
// //    forma: 'redonda'
// //  })

//   const [name, setName] = useState('') //state hook
//   const inputRef = useRef(null) //ref hook
  
//   const [age, setAge] = useState(42)

//   useEffect(() => {
//     inputRef.current.value = ''
//   })

// return(
//   <>
//   <input type='text' ref={inputRef} placeholder='Nome'/>
//   <button onClick={() => setName(inputRef.current.value)}>Printa</button>
//   <p>{name}</p>
//   </>
// )
// }

// export default PrintName;