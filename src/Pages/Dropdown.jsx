import React, { useState } from 'react'

function Dropdown() {
    const [countryVal,setcountryVal] = useState("")
     
  return (
    <div> 
        <select onChange={e=>setcountryVal(e.target.value)}>
            <option value="INDIA">INDIA</option>
            <option value="AUSTRALIA">AUSTRALIA</option>
            <option value="NEWZLAND">NEWZLAND</option>
            <option value="PAKISTAN">PAKISTAN</option>
            <option value="SOUTH AFRICA">SOUTH AFRICA</option>
            <option value="NEPAL">NEPAL</option>
        </select>
        <h2>{countryVal}</h2>
    </div>
  )
}

export default Dropdown
