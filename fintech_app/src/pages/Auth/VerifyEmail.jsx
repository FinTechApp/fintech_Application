// PAGE: Verify Email
// This is the page where the user types in the 6-digit code
// that was sent to their email after signing up.
// It confirms that the email address belongs to them.
// Route: /verify-email

import React, {useState} from "react";
import "./verifyemail.css";
import image from "./logo.jpg"


const VerifyEmail = () => {
   const [isVerified, setIsVerified] = useState(false);
   const [emailSent, setEmailSent] = useState(true);

   const handleResend = () => {
    setEmailSent(false);

    // simulate API resend
    setTimeout(() => {
        setEmailSent(true);
        alert("Verication email resent!");
    }, 1500);
   };

   const handleNext = () => {
    if (!isVerified) {
        alert("Please verify your email first");
        return;
    }

    alert("Proceeding to upload credentials...");
    // navigate to next page here
   };

   return (
    <div className="verify-container">
        {/*Progress Steps */}
        <div className="steps">
            <div className="step completed"><span className="box3">✔</span> Sign Up</div>
            <div className="step active"><span className="box1">2</span> Verify Email</div>
            <div className="step"><span className="box2">3</span> Upload credentials</div>
        </div>

        <hr /> <br /> 

        {/* Main Content */}
        <div className="content">
            <h2>Verify Email</h2>

            <div className="icon"> <img src={image} alt="" /></div>

            <p>we've sent an email to <strong>Abrahamidoh@gmail.com</strong>. <br /> Please check your inbox to verify.</p>

            {/*Actions*/}
            {/* <div className="actions">
                <button onClick={handleResend}>
                    {emailSent ? "Resend Email" : "Sending..."}
                </button>

                <button className="verify-btn"
                onClick={() => setIsVerified(true)}>
                    I've Verified
                </button>
            </div> */}

            <button className={`next-btn ${isVerified ? "active" : ""}`}
            onClick={handleNext}
            disabled={!isVerified}> Next</button>
        </div>
    </div>
   );
};





export default VerifyEmail;