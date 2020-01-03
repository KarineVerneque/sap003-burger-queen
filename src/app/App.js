import React from 'react';
import Hall from '../pages/hall';

function App() {
  return (
    <>
    <Hall /><br />

    {/*
    <ClientData /><br />
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/Dinner">
            <Dinner />
          </Route>
          <Route path="/breakfast" component={Breakfast}/>
        </Switch>
      </div>
    </Router>
    */}

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