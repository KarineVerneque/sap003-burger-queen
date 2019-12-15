import React, { useState } from 'react';
import firebaseInitialize from '../firebase/firebase'

function ClientData() {
    const [name, setName] = useState('')
    const [table, setTable] = useState('')

    function sendClientData(e) {
        e.preventDefault()

        firebaseInitialize
        .firestore()
        .collection('clients')
        .add({
            name,
            tableNumber: parseInt(table)
        }).then(
            console.log('acabouuuuu')
            //setName(''),
            //setTable('')
        )
        
    }

    return(
        <>
        <section>
            <form onSubmit={sendClientData}>
                <fieldset>
                    <legend>Dados do cliente:</legend>
                    Nome: <input type="text" value={name} onChange={event => setName(event.target.value)}/><br/>
                    Mesa: <input type="number" value={table} onChange={event => setTable(event.target.value)}/><br/>
                    <button>Selecionar</button>
                </fieldset>
            </form>
        </section>

        <section>
            <h2>Pedido da {name}</h2>
        </section>
        </>
    )    
}
export default ClientData





/*
function PrintName() {
    const [name, setName] = useState('') //state hook
    const inputRef = useRef(null) //ref hook

    useEffect(() => {
        inputRef.current.value = ''
    })
    return(
        <>
        <input type='text' ref={inputRef} placeholder='Nome'/>
        <button onClick={() => setName(inputRef.current.value)}>Printa</button>
        <p>{name}</p>
        </>
    )
}*/