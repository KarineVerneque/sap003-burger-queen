import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hall from '../pages/hall'
import Kitchen from '../pages/kitchen'
import NavBar from '../components/navBar'

export default function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/hall" component={Hall}/>
            <Route path="/kitchen" component={Kitchen}/>
          </Switch>
        </div>
      </Router>
    </>
  )
};






















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