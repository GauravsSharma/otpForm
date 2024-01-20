import React, { useEffect, useRef, useState } from 'react'

const OTPFrom = ({length=4, onSubmit=()=>{}}) => {
  const [otp,setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([])
  
  const handelChange = (index,e)=>{
    let val = e.target.value;
    const newOtp = [...otp];

     newOtp[index] = val.substring(val.length-1);
     setOtp(newOtp); 
     const joinedOtp = newOtp.join("");
    
     if(val&&index<length-1){
      inputRefs.current[index+1].focus()  
     }
     if(val&&newOtp[index+1] && newOtp.indexOf("")){
      inputRefs.current[newOtp.indexOf("")].focus();
     }
     if(joinedOtp.length===length){
       onSubmit(joinedOtp)
     }
  }
  const handelClick=(index)=>{
    inputRefs.current[index].setSelectionRange(1,1);
    if(index>0&&!otp[index-1]){
      inputRefs.current[otp.indexOf("")].focus();
    }
  }
  const handelKeyDown=(index,e)=>{

  if(e.key==="Backspace"&& !otp[index] &&index>0){
    inputRefs.current[index-1].focus()
  }
  }
  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  },[])
  return (
    <div>
        {
          otp.map((val,idx)=>{
            return <input className='otpInput' value={val} type="text" key={idx} 
            onChange={(e)=>handelChange(idx,e)}
            onKeyDown={(e)=>handelKeyDown(idx,e)}
            onClick={()=>handelClick(idx)}
            ref={(input)=>(inputRefs.current[idx]=input)}
            />
          })
        }
    </div>
  )
}

export default OTPFrom