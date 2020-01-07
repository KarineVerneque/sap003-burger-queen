import { useEffect, useState } from 'react';
import firebaseInitialize from '../utils/firebase'


export default function Data() {
    const [data, setDatas] = useState([]);

    useEffect(() => {
        firebaseInitialize
        .firestore()
        .collection('menu')
        .onSnapshot((snapshot) => {
        //.get()
        //.then((snapshot) => { //console.log('snapshot',snapshot.docs)
            const newDatas = snapshot.docs.map((doc) => ({
                // id: doc.id,
                ...doc.data()
            }))            
            setDatas(newDatas)            
        })
    }, [])
    return data
};