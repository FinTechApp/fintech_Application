// PAGE: Confirm Transaction PIN
// This is the page where the user types their new PIN a second time to confirm it.
// If both PINs match, the setup is complete and they are taken to the dashboard.
// This is Step 5 of the identity verification process.
// Route: /onboarding/confirm-pin

import React, { useState } from "react";
import "../../styles/variables.css";

function PinInput({ value, setValue }) {
  const digits = Array(4).fill("");

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/, "");
    const arr = value.split("");
    arr[index] = val;
    setValue(arr.join("").slice(0, 4));
    if (val && index < 3) {
      document.getElementById(`pin-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      document.getElementById(`pin-${index - 1}`).focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", margin: "20px 0" }}>
      {digits.map((_, index) => (
        <input
          key={index}
          id={`pin-${index}`}
          type="password"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: 52, height: 56,
            textAlign: "center",
            fontSize: 22, fontWeight: 700,
            backgroundColor: "#F0F0F0",
            border: value[index] ? "2px solid #E8402A" : "2px solid transparent",
            borderRadius: 8, outline: "none",
          }}
        />
      ))}
    </div>
  );
}

export default function ConfirmTransactionPin() {
  const [step, setStep] = useState("set");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleSetSubmit = () => {
    if (pin.length === 4) {
      setStep("confirm");
    } else {
      alert("Please enter a 4-digit PIN");
    }
  };

  const handleConfirmSubmit = () => {
    if (confirmPin === pin) {
      alert("PIN set successfully ✅");
      // TODO: navigate to dashboard
    } else {
      alert("PINs do not match ❌ Please try again");
      setConfirmPin("");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
      padding: 20,
    }}>
      <div style={{ width: "100%", maxWidth: 400, textAlign: "center" }}>
        {step === "set" && (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 8 }}>
              Set Transaction PIN
            </h2>
            <p style={{ color: "#777", fontSize: 14, marginBottom: 8 }}>
              Enter a 4-digit PIN to secure your transactions
            </p>
            <PinInput value={pin} setValue={setPin} />
            <button
              onClick={handleSetSubmit}
              style={{
                width: "100%", height: 50,
                backgroundColor: "#E8402A",
                color: "#fff", border: "none",
                borderRadius: 8, fontSize: 15,
                fontWeight: 600, cursor: "pointer",
                marginTop: 16,
              }}
            >
              Submit
            </button>
          </>
        )}

        {step === "confirm" && (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 8 }}>
              Confirm Transaction PIN
            </h2>
            <p style={{ color: "#777", fontSize: 14, marginBottom: 8 }}>
              Re-enter your PIN to confirm
            </p>
            <PinInput value={confirmPin} setValue={setConfirmPin} />
            <button
              onClick={handleConfirmSubmit}
              style={{
                width: "100%", height: 50,
                backgroundColor: "#E8402A",
                color: "#fff", border: "none",
                borderRadius: 8, fontSize: 15,
                fontWeight: 600, cursor: "pointer",
                marginTop: 16,
              }}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}