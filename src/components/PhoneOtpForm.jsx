import React, { useState } from 'react'
import OTPFrom from './OTPFrom';

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isOtpFormShow, setOtpFormShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /[^0-9]/g;
        console.log(phoneNumber);
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid phone number !!")
            return;
        }
        setOtpFormShow(true);
    }
    return (
        <div>
            {
                !isOtpFormShow ?
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="phonenumber" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                        <button type='submit'>Get Otp</button>
                    </form> : <div>
                        <OTPFrom length={4} onSubmit={() => {}} />
                    </div>}
        </div>
    )
}

export default PhoneOtpForm