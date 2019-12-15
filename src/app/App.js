import React, { useState } from 'react';
import ClientData from '../components/clientsdata'
import Cafe from '../components/breakfast'
import Jantar from '../components/lunchDinner'
// import db from '../../firebase/firebase'
//useRef, useEffect

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
    <ClientData /><br />    

    <Cafe /><br /><br />
    
    <Jantar />
    <p contenteditable="true">{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>Contador</button>
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