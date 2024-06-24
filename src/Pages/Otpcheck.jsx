import React, { useState } from 'react'

function Otpcheck() {
    const [genotpval,setgenotpVal]= useState();
    const [otpVal,setOtpVal]= useState();
    const [finalOptval,setfinalotpVal] = useState();
    const [msg,setMsg] = useState("")
    const generateOTP = ()=>{
        setgenotpVal(Math.floor(Math.random()*99299))
    }
    const validateOTP = ()=>{
           setfinalotpVal(otpVal);
           if(genotpval == otpVal){
                 setMsg("OTP Is success..!!!")
           }else{
            setMsg("OTP Is Faliure..!!!")
           }
    }
    const getOtpVal = (e)=>{
        setOtpVal(e.target.value);
    }
  return (
    <div>
       <div className="container">
        <div className="row">
            <h2>d;lkds;kdsmWELCOME</h2>
        <div className="col-md-4"></div>
         <div className="col-md-4">
              <input type="text"className='form-control' placeholder='type number' onChange={getOtpVal} />
              <button className='btn btn-primary' onClick={generateOTP}>GENERATE OTP</button>
              <button className='btn btn-success' onClick={validateOTP}>VALIDATE OTP</button>
              <h2>{genotpval}</h2>
              <h2>{msg}</h2>
         </div>
         <div className="col-md-4"></div>
        </div>
     
       </div>
    </div>
  )
}

export default Otpcheck
