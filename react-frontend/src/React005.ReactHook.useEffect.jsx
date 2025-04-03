import React, {useEffect, useState} from "react";

export default function UseEffectApp() {
    const [name, setName] = useState('');

    // syntax: useEffect(callback, [dependencies])
    // cach hoat dong: moi khi component duoc render lan dau or re-render (do cac dependencies thay doi),
    // ham callback() se duoc goi tu dong, sau khi UI hien thi
    useEffect(() => {
        document.getElementById('hola').style.visibility = name? 'visible' : 'hidden';

    }, [name]);

    return (
        <div>
          <h2 id='hola' style={{color:'skyblue', textAlign: 'center', fontSize: '100px'}}>Hola {name}</h2>
          <label htmlFor="usrn" style={{display: 'flex', justifyContent:'center'}}>Your name: 
            <input type="text" id="usrn" onChange={(event) => setName(event.target.value)}/></label>
        </div>
      )
}