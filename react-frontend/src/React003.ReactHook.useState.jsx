import React, {useState} from 'react';

export default function UseStateApp () {
  const [name, setName] = useState("");
  // syntax: const[state, setState] = useState(initialValue)
  // explain: (like Class component state object)
  // 1. this.state = {state: initialValue}
  // 2. setState(newValue) ~ this.setState({state, newValue})
  
  return (
    <div>
      {name && <h2 style={{display:'block', color:'skyblue', textAlign: 'center', fontSize: '100px'}}>
        Hola {name}</h2>}
      <label htmlFor="usrn" style={{display: 'flex', justifyContent:'center'}}>
        Your name: <input type="text" id="usrn" onChange={(event) => setName(event.target.value)}/></label>
    </div>
  )
}