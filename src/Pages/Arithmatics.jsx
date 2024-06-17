import React, { useState } from 'react'

function Arithmatics() {
    const [number1,setNumber1] = useState("");
    const [number2,setNumber2] = useState("");
    const [total,setTotal] = useState("");
    const add = ()=>{
        setTotal(parseInt(number1)+parseInt(number2))
    }

    return (
        <div>
        <input type="text" onChange={e=>setNumber1(e.target.value)} />
        <input type="text"  onChange={e=>setNumber2(e.target.value)}/>
        <button onClick={add}>ADD</button>
        <h2>{total}</h2>
        </div>
    )
}

export default Arithmatics
