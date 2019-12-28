import React, { useState } from 'react';
//import firebaseInitialize from '../utils/firebase'

function ClientData(props) {
    const [name, setName] = useState('')
    const [table, setTable] = useState('')

    function sendClientData(e) {
        e.preventDefault()

        // firebaseInitialize
        // .firestore()
        // .collection('clients')
        // .add({
        //     name: clientName,
        //     tableNumber: parseInt(table),
        //     order
        // }).then(
        //     console.log('acabouuuuu')
        //     //setName(''),
        //     //setTable('')
        // )
        
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
                <div>
                    {   /*             
                        props.order.map(item => <p>{item.name}</p>)
                    */}
                </div>
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