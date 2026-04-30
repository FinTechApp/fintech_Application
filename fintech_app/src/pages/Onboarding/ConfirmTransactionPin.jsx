// PAGE: Confirm Transaction PIN
// This is the page where the user types their new PIN a second time to confirm it.
// If both PINs match, the setup is complete and they are taken to the dashboard.
// This is Step 5 of the identity verification process.
// Route: /onboarding/confirm-pin

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RED = "#E8402A"
const FONT = "'DM Sans', sans-serif"

// ── PinInput Component ──────────────────────────────
function PinInput({ value, setValue }) {
  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/, "");
    const arr = value.split("");
    arr[index] = val;
    setValue(arr.join("").slice(0, 4));
    if (val && index < 3) {
      document.getElementById(`confirm-pin-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      document.getElementById(`confirm-pin-${index - 1}`).focus();
    }
  };

  return (
    <div style={{
      display: "flex", gap: 16,
      justifyContent: "center",
      margin: "32px 0",
    }}>
      {[0, 1, 2, 3].map((index) => (
        <input
          key={index}
          id={`confirm-pin-${index}`}
          type="password"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: 64, height: 64,
            textAlign: "center",
            fontSize: 28, fontWeight: 700,
            fontFamily: FONT,
            backgroundColor: "#F0F0F0",
            border: value[index] ? `2px solid ${RED}` : "2px solid transparent",
            borderRadius: 10, outline: "none",
            color: "#111",
            transition: "border 0.2s",
          }}
        />
      ))}
    </div>
  )
}

// ── ConfirmTransactionPin Page ──────────────────────
export default function ConfirmTransactionPin() {
  const navigate = useNavigate()
  const [confirmPin, setConfirmPin] = useState("")

  const handleSubmit = () => {
    if (confirmPin.length < 4) {
      alert("Please enter a complete 4-digit PIN")
      return
    }

    // Get the PIN saved from SetTransactionPin page
    const savedPin = sessionStorage.getItem("transactionPin")

    if (confirmPin === savedPin) {
      // PINs match — clear sessionStorage and go to dashboard
      sessionStorage.removeItem("transactionPin")
      navigate("/home")
    } else {
      alert("PINs do not match ❌ Please try again")
      setConfirmPin("")
      document.getElementById("confirm-pin-0")?.focus()
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: FONT,
      padding: "0 20px 60px",
    }}>

      {/* ── Step Indicator ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 700,
        padding: "24px 0 16px",
      }}>

        {/* Step 1 — Completed */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 7,
            backgroundColor: "#E0E0E0",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, color: "#999", fontFamily: FONT,
          }}>✔</div>
          <span style={{ fontSize: 14, color: "#999", fontFamily: FONT }}>Sign up</span>
        </div>

        <div style={{ flex: 1, height: 1, backgroundColor: "#E0E0E0", margin: "0 16px" }} />

        {/* Step 2 — Completed */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 7,
            backgroundColor: "#E0E0E0",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, color: "#999", fontFamily: FONT,
          }}>✔</div>
          <span style={{ fontSize: 14, color: "#999", fontFamily: FONT }}>Verify Email</span>
        </div>

        <div style={{ flex: 1, height: 1, backgroundColor: "#E0E0E0", margin: "0 16px" }} />

        {/* Step 3 — Active */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 7,
            backgroundColor: RED,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, color: "#fff", fontFamily: FONT,
          }}>3</div>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#111", fontFamily: FONT }}>
            Upload credentials
          </span>
        </div>

      </div>

      {/* Divider */}
      <div style={{
        width: "100%", maxWidth: 700,
        height: 1, backgroundColor: "#E8E8E8",
        marginBottom: 40,
      }} />

      {/* ── Main Content ── */}
      <div style={{ width: "100%", maxWidth: 440, textAlign: "center" }}>

        {/* Title */}
        <h1 style={{
          fontSize: 24, fontWeight: 700, color: "#111",
          margin: "0 0 12px", fontFamily: FONT,
        }}>
          Confirm Transaction PIN
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 14, color: "#777",
          lineHeight: 1.6, margin: "0 0 8px",
          fontFamily: FONT,
        }}>
          Re-enter your 4-digit PIN to confirm it.
        </p>

        {/* PIN Input */}
        <PinInput value={confirmPin} setValue={setConfirmPin} />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            height: 52,
            backgroundColor: RED,
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            fontFamily: FONT,
            cursor: "pointer",
            transition: "opacity 0.2s",
            marginTop: 8,
          }}
        >
          Submit
        </button>

      </div>
    </div>
  )
}
