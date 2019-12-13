import React, { useState, useRef, useEffect } from 'react';
// import firebaseInitialize from '../../firebase/firebase'
// import db from '../../firebase/firebase'



// firebaseInitialize.firestore().collection('breakfast').get()
//   .then((snap => snap.forEach((doc) => console.log(doc.data().name))))




//   firebaseInitialize.firestore().collection('lunchdinner').get()
//   .then((snap => snap.forEach((doc) => console.log('dinner ', doc.data()))))


function App() {
  const [counter, setCounter] = useState(0)

  // useEffect(() => {
  // firebaseInitialize.firestore().collection('lunchdinner').get()
  // .then((snap => snap.forEach((doc) => console.log('dinner ', doc.data()))))
  // }, [])

  return (
    <>
    <p>{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>Contador</button>
    </>
  )
}


export default App;



// function PrintName() {  

// //  firebaseInitialize.firestore().collection('frutas').add({
// //    cor: 'amarelo',
// //    peso: 'médio',
// //    forma: 'redonda'
// //  })



//   const [name, setName] = useState('') //state hook
//   const inputRef = useRef(null) //ref hook
  
//   const [age, setAge] = useState(42)
//   console.log(setAge)

//   useEffect(() => {
//     inputRef.current.value = ''
//   })

// return(
//   <>
//   <input type='text' ref={inputRef} placeholder='Nome'/>
//   <button onClick={() => setName(inputRef.current.value)}>Printa</button>
//   <p>{name}</p>
//   <p>Sua idade: {age}</p>
//   </>
// )
// }

// export default PrintName;