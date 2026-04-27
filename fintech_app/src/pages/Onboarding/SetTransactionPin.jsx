<<<<<<< feature/ConfirmPin
// PAGE: Set Transaction PIN
// This is the page where the user creates a 4-digit PIN
// that they will use to authorize every money transfer.
// This is Step 4 of the identity verification process.
// Route: /onboarding/set-pin


import React, { useRef } from "react";

export default function PinInput({ value, setValue }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/[^0-9]/g, "");

    if (!val) return;

    const newValue = value.split("");
    newValue[index] = val[0];
    const updated = newValue.join("").slice(0, 4);

    setValue(updated);

    // Move to next input
    if (index < 3 && val) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newValue = value.split("");
      newValue[index] = "";
      setValue(newValue.join(""));

      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
    
  };

  return (
    <div className="pin-container">
      {[0, 1, 2, 3].map((i) => (
        <input
          key={i}
          type="password"
          maxLength="1"
          className="pin-box"
          value={value[i] || ""}
          ref={(el) => (inputsRef.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
}
=======
const SetTransactionPin = () => {
  return (
    <div style={{ padding: 40, fontFamily: 'DM Sans, sans-serif' }}>
      <h1>SetTransactionPin</h1>
    </div>
  )
}

export default SetTransactionPin
>>>>>>> dev
