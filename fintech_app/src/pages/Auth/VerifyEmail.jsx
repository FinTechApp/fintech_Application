// PAGE: Verify Email
// This is the page where the user types in the 6-digit code
// that was sent to their email after signing up.
// It confirms that the email address belongs to them.
// Route: /verify-email

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./verifyemail.css";
import image from "./image.jpg";

const VerifyEmail = () => {
   const navigate = useNavigate();
   const [isVerified, setIsVerified] = useState(false);
   const [emailSent, setEmailSent] = useState(true);

   const handleResend = () => {
    setEmailSent(false);
    setTimeout(() => {
        setEmailSent(true);
        alert("Verification email resent!");
    }, 1500);
   };

   const handleNext = () => {
    if (!isVerified) {
        alert("Please verify your email first");
        return;
    }
    navigate("/onboarding/upload-id");
   };

   return (
    <div className="verify-container">

        {/* Progress Steps */}
        <div className="steps">
            <div className="step completed">
                <span className="box3">✔</span> Sign Up
            </div>
            <div className="step active">
                <span className="box1">2</span> Verify Email
            </div>
            <div className="step">
                <span className="box2">3</span> Upload credentials
            </div>
        </div>

        <hr />

        {/* Blue border box */}
        <div style={{ padding: "40px 20px 32px" }}>
    {/* Illustration image */}
    <div className="icon">
        <img src={image} alt="verify email illustration" />
    </div>
</div>

        {/* Text below box */}
        <p className="verify-text">
            We've sent an Email to you <strong>Abrahamidoh@gmail.com.</strong>
            <br /> Please check your inbox to verify
        </p>

        {/* Actions */}
        <div className="actions">
            <button className="resend-btn" onClick={handleResend}>
                {emailSent ? "Resend Email" : "Sending..."}
            </button>

            <button
                className="verify-btn"
                onClick={() => setIsVerified(true)}>
                I've Verified
            </button>
        </div>

        {/* Next Button */}
        <button
            className={`next-btn ${isVerified ? "active" : ""}`}
            onClick={handleNext}
            disabled={!isVerified}>
            Next
        </button>

    </div>
   );
};

export default VerifyEmail;
