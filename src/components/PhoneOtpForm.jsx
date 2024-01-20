import React, { useState } from 'react'
import OTPFrom from './OTPFrom';
import toast,{ Toaster } from 'react-hot-toast';
const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isOtpFormShow, setOtpFormShow] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handlePhoneNumberSubmit = (e) => {
        e.preventDefault();
        const regex = /[^0-9]/g;
        console.log(phoneNumber);
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid phone number !!")
            return;
        }
        setOtpFormShow(true);
    }
    const handleSubmit = (otp) => {
        setTimeout(() => {
            setIsSignUp(true);
            toast.success("Success");
        }, 3000);
    }
    return (
        <>
          {!isSignUp?<div >
                <h1>Login Form</h1>
                {
                    !isOtpFormShow ?
                        <form onSubmit={handlePhoneNumberSubmit} className='phoneForm'>
                            <input type="text" name="phonenumber" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder='Enter Phone number' />
                            <button type='submit'>GET OTP</button>
                        </form> : <div className='otpForm'>
                            <h3>Enter OTP send to {phoneNumber}</h3>
                            <OTPFrom length={4} onSubmit={handleSubmit} />
                        </div>}
            </div>:<div className='home'>
                Thanks For Using Our App
                </div>}
                <Toaster/>
        </>
    )
}

export default PhoneOtpForm