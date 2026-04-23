// PAGE: Confirm Transaction PIN
// This is the page where the user types their new PIN a second time to confirm it.
// If both PINs match, the setup is complete and they are taken to the dashboard.
// This is Step 5 of the identity verification process.
// Route: /onboarding/confirm-pin

import React, { useState } from "react";
import SetTransactionPin from "./onboarding/SetTransactionPin";
import  "../../styles/variables.css";

export default function App() {
  const [step, setStep] = useState("set"); // "set" | "confirm"
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  

  const handleSetSubmit = () => {
    if (pin.length === 4) {
      setStep("confirm");
    } else {
      alert("Enter 4-digit PIN");
    }
  };

  const handleConfirmSubmit = () => {
    if (confirmPin === pin) {
      alert("PIN set successfully ✅");
    } else {
      alert("PINs do not match ❌");
    }
  };

  
  return (
    <div className="container">
      {step === "set" && (
        <>
          <h2>Set Transaction Pin</h2>
          <p>Enter Pin</p>

          <PinInput value={pin} setValue={setPin} />

          <button className="btn" onClick={handleSetSubmit}>
            Submit
          </button>
        </>
      )}

      {step === "confirm" && (
        <>
          <h2>Confirm Pin</h2>

          <PinInput value={confirmPin} setValue={setConfirmPin} />

          <button className="btn" onClick={handleConfirmSubmit}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
