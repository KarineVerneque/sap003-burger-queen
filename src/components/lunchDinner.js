import React, { useState, useEffect } from 'react';
import firebaseInitialize from '../firebase/firebase'


function MenuDatas() {
    const [data, setDatas] = useState([])
    //console.log('olha ai',data.map((item) => item.breakfast))
    
    useEffect(() => {
        firebaseInitialize
        .firestore()
        .collection('menu')
        // .onSnapshot((snapshot) => {
        .get()
        .then((snapshot) => {
            const newDatas = snapshot.docs.map((doc) => ({
                // id: doc.id,
                ...doc.data()
            }))            
            setDatas(newDatas)            
        })  
    }, [])  
    return data
}

const Jantar = () => {
    const buttons = MenuDatas()    
    return (
        <>        
        <button><h2>Jantar</h2></button><br/>
        {
        buttons.map((item) =>
        item.breakfast !== "true" ?
            <button>    
                {item.name}
                <p>R$ {item.price},00</p>
            </button> :
            console.log('lunchDinner AQUI')
        )}
        </>
    ) 
}

export default Jantar;

