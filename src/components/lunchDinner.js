import React, { useState, useEffect } from 'react';
import firebaseInitialize from '../firebase/firebase'

const Jantar = (props) => {
    return (
        <>        
        <button><h2>Jantar</h2></button><br/>
        {
            props.products.map((item) =>
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

