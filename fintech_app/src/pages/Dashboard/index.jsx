// PAGE: Dashboard (Home)
// This is the main home page after the user logs in.
// It shows the user's account balance, quick action buttons like 'Send Money',
// and a list of their most recent transactions.
// Route: /home

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const RED = "#E8402A"
const FONT = "'DM Sans', sans-serif"

// ── Transfer Row ──────────────────────────────────
const TransferRow = ({ name, amount }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    backgroundColor: "#F0FAF0",
    borderRadius: 8,
    marginBottom: 8,
  }}>
    <div style={{
      width: 38, height: 38, borderRadius: "50%",
      backgroundColor: "#D0E8D0",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14, fontWeight: 700, color: "#2a7a2a",
      flexShrink: 0,
    }}>
      {name.charAt(0)}
    </div>
    <span style={{ fontSize: 13, fontWeight: 500, color: "#111", fontFamily: FONT, flex: 1 }}>
      {name}
    </span>
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <span style={{ fontSize: 14 }}>🇳🇬</span>
      <span style={{ fontSize: 13, fontWeight: 500, color: "#111", fontFamily: FONT }}>
        NGN {amount}
      </span>
    </div>
    <span style={{ fontSize: 12, fontWeight: 600, color: "#28a745", fontFamily: FONT, marginLeft: 8 }}>
      Successful
    </span>
    <span style={{ fontSize: 12, fontWeight: 600, color: RED, cursor: "pointer", fontFamily: FONT, marginLeft: 4 }}>
      View
    </span>
  </div>
)

// ── Dashboard ─────────────────────────────────────
const Dashboard = () => {
  const navigate = useNavigate()
  const [sendAmount, setSendAmount] = useState("500")
  const [paymentMethod, setPaymentMethod] = useState("Bank transfer")

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 360px",
      gap: 20,
      alignItems: "start",
      fontFamily: FONT,
    }}>

      {/* ── LEFT COLUMN ── */}
      <div>

        {/* Welcome */}
        <h2 style={{
          fontSize: 20, fontWeight: 700, color: "#111",
          margin: "0 0 16px", fontFamily: FONT,
        }}>
          Welcome
        </h2>

        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>

          {/* Transfers made */}
          <div style={{
            backgroundColor: "#fff", borderRadius: 12,
            padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                backgroundColor: RED,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span style={{ fontSize: 26, fontWeight: 700, color: "#111", fontFamily: FONT }}>20</span>
            </div>
            <p style={{ fontSize: 13, color: "#888", margin: 0, fontFamily: FONT }}>Transfers made</p>
          </div>

          {/* Beneficiaries */}
          <div style={{
            backgroundColor: "#fff", borderRadius: 12,
            padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                backgroundColor: RED,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span style={{ fontSize: 26, fontWeight: 700, color: "#111", fontFamily: FONT }}>5</span>
            </div>
            <p style={{ fontSize: 13, color: "#888", margin: 0, fontFamily: FONT }}>Beneficiaries</p>
          </div>

        </div>

        {/* Recent Transfers */}
        <div style={{
          backgroundColor: "#fff", borderRadius: 12,
          padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          marginBottom: 20,
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: "0 0 14px", fontFamily: FONT }}>
            Recent transfers
          </h3>
          <TransferRow name="Elizabeth Moses" amount="650, 000" />
          <TransferRow name="Aisha Ibrahim" amount="850, 000" />
          <TransferRow name="Murtala Muktar" amount="850, 000" />
        </div>

        {/* Current Limits */}
        <div style={{
          backgroundColor: "#fff", borderRadius: 12,
          padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: "0 0 14px", fontFamily: FONT }}>
            Current limits
          </h3>
          <div style={{ display: "flex", gap: 48, marginBottom: 12 }}>
            <div>
              <p style={{ fontSize: 12, color: "#999", margin: "0 0 4px", fontFamily: FONT }}>Daily limit</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#111", margin: 0, fontFamily: FONT }}>20,000 UK</p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#999", margin: "0 0 4px", fontFamily: FONT }}>Yearly limit</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#111", margin: 0, fontFamily: FONT }}>1,000,000 UK</p>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#777", margin: 0, fontFamily: FONT }}>
            If you want higher limits, temporarily or permanently,{" "}
            <Link to="/limits" style={{ color: RED, fontWeight: 600, textDecoration: "none" }}>
              click here
            </Link>
          </p>
        </div>

      </div>

      {/* ── RIGHT COLUMN — Make a Transfer ── */}
      <div style={{
        backgroundColor: "#fff", borderRadius: 12,
        padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}>

        <h3 style={{
          fontSize: 18, fontWeight: 700, color: "#111",
          margin: "0 0 20px", fontFamily: FONT, textAlign: "center",
        }}>
          Make a Transfer
        </h3>

        {/* You send */}
        <div style={{ backgroundColor: "#F5F5F5", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
          <p style={{ fontSize: 11, color: "#999", margin: "0 0 4px", fontFamily: FONT }}>You send</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <input
              type="number"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              style={{
                border: "none", background: "none",
                fontSize: 18, fontWeight: 600, color: "#111",
                fontFamily: FONT, outline: "none", width: "55%",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16 }}>🇬🇧</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#111", fontFamily: FONT }}>UK</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#888" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div style={{ backgroundColor: "#F5F5F5", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
          <p style={{ fontSize: 11, color: "#999", margin: "0 0 4px", fontFamily: FONT }}>Payment method</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{
                border: "none", background: "none",
                fontSize: 14, fontWeight: 500, color: "#111",
                fontFamily: FONT, outline: "none", width: "100%", cursor: "pointer",
              }}
            >
              <option>Bank transfer</option>
              <option>Card payment</option>
            </select>
          </div>
        </div>

        {/* Empty recipient input */}
        <div style={{ backgroundColor: "#F5F5F5", borderRadius: 8, padding: "12px 14px", marginBottom: 10, height: 52 }} />

        {/* Recipient gets */}
        <div style={{ backgroundColor: "#F5F5F5", borderRadius: 8, padding: "12px 14px", marginBottom: 16 }}>
          <p style={{ fontSize: 11, color: "#999", margin: "0 0 4px", fontFamily: FONT }}>Recipient gets</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 18, fontWeight: 600, color: "#111", fontFamily: FONT }}>850,000</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16 }}>🇳🇬</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#111", fontFamily: FONT }}>NGN</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#888" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Rate & Charges */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: RED }} />
              <span style={{ fontSize: 13, color: "#555", fontFamily: FONT }}>Rate</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#111", fontFamily: FONT }}>1 UK = 1700 NGN</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: RED }} />
              <span style={{ fontSize: 13, color: "#555", fontFamily: FONT }}>Charges</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#111", fontFamily: FONT }}>0</span>
          </div>
        </div>

        {/* Send Button */}
        <button
          onClick={() => navigate("/transfer")}
          style={{
            width: "100%", height: 50,
            backgroundColor: RED,
            color: "#fff", border: "none",
            borderRadius: 8, fontSize: 15,
            fontWeight: 600, fontFamily: FONT,
            cursor: "pointer",
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: 8,
          }}
        >
          Send
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>

      </div>

    </div>
  )
}

export default Dashboard
