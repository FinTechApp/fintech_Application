// PAGE: Transfer Receipt (Step 4)
// This is the receipt page shown after a transfer is completed.
// It shows all the details of the transfer including reference number,
// recipient, amount, bank details and download/share options.
// Route: /transfer/receipt

import { useNavigate } from "react-router-dom"

const RED = "#E8402A"
const FONT = "'DM Sans', sans-serif"

// ── Static receipt data ───────────────────────────
// In a real app this would come from the transfer response
const receiptData = {
  referenceNo: "89578833456593334",
  status: "Success",
  transactionDate: "24th August, 2024",
  recipient: "Musa Ibrahim",
  amountSent: "500 UK",
  completedOn: "24th August, 2024. 9:00am",
  fee: "0",
  paymentMethod: "Bank transfer",
  amountReceived: "NGN 850,000",
  bankName: "United Bank For Africa",
  accountNumber: "2345236xxx",
}

// ── Detail Row ────────────────────────────────────
const DetailRow = ({ label, value, isStatus }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 0",
    borderBottom: "1px solid #F5F5F5",
  }}>
    <span style={{
      fontSize: 14, color: "#555",
      fontFamily: FONT, fontWeight: 400,
    }}>
      {label}
    </span>

    {isStatus ? (
      <span style={{
        backgroundColor: "#28a745",
        color: "#fff",
        fontSize: 12,
        fontWeight: 600,
        padding: "4px 14px",
        borderRadius: 20,
        fontFamily: FONT,
      }}>
        {value}
      </span>
    ) : (
      <span style={{
        fontSize: 14, color: "#111",
        fontFamily: FONT, fontWeight: 500,
        textAlign: "right",
      }}>
        {value}
      </span>
    )}
  </div>
)

// ── TransferReceipt ───────────────────────────────
const TransferReceipt = () => {
  const navigate = useNavigate()

  const handleDownloadPDF = () => {
    alert("Download PDF feature coming soon!")
  }

  const handleSharePDF = () => {
    alert("Share PDF feature coming soon!")
  }

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#fff",
      fontFamily: FONT,
      padding: "32px 20px 60px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>

      {/* ── Content wrapper ── */}
      <div style={{ width: "100%", maxWidth: 560, position: "relative" }}>

        {/* ── Go home ── */}
        <div
          onClick={() => navigate("/home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            cursor: "pointer",
            marginBottom: 24,
            width: "fit-content",
          }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={RED} strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span style={{
            fontSize: 14, fontWeight: 600,
            color: RED, fontFamily: FONT,
          }}>
            Go home
          </span>
        </div>

        {/* ── Title ── */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{
            fontSize: 22, fontWeight: 700,
            color: "#111", margin: "0 0 6px",
            fontFamily: FONT,
          }}>
            {receiptData.amountSent} Sent
          </h1>
          <p style={{
            fontSize: 14, color: "#555",
            margin: 0, fontFamily: FONT,
          }}>
            Transfer to {receiptData.recipient}
          </p>
        </div>

        {/* ── Transaction Details ── */}
        <div style={{ marginBottom: 32 }}>
          <DetailRow label="Reference No" value={receiptData.referenceNo} />
          <DetailRow label="Status" value={receiptData.status} isStatus />
          <DetailRow label="Transaction date" value={receiptData.transactionDate} />
          <DetailRow label="Recipient" value={receiptData.recipient} />
          <DetailRow label="Amount sent" value={receiptData.amountSent} />
          <DetailRow label="Completed on" value={receiptData.completedOn} />
          <DetailRow label="Fee" value={receiptData.fee} />
          <DetailRow label="Payment method" value={receiptData.paymentMethod} />
        </div>

        {/* ── Receiver Details ── */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{
            fontSize: 16, fontWeight: 700,
            color: "#111", margin: "0 0 4px",
            fontFamily: FONT,
          }}>
            Receiver details
          </h3>
          <DetailRow label="Amount received" value={receiptData.amountReceived} />
          <DetailRow label="Bank name" value={receiptData.bankName} />
          <DetailRow label="Account number" value={receiptData.accountNumber} />
        </div>

        {/* ── Buttons ── */}
        <div style={{
          display: "flex",
          gap: 16,
        }}>
          {/* Download PDF */}
          <button
            onClick={handleDownloadPDF}
            style={{
              flex: 1,
              height: 48,
              backgroundColor: "#E8E8E8",
              color: "#111",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: FONT,
              cursor: "pointer",
            }}
          >
            Download PDF
          </button>

          {/* Share PDF */}
          <button
            onClick={handleSharePDF}
            style={{
              flex: 1,
              height: 48,
              backgroundColor: RED,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: FONT,
              cursor: "pointer",
            }}
          >
            Share PDF
          </button>
        </div>

      </div>
    </div>
  )
}

export default TransferReceipt
