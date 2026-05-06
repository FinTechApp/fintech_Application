import React from "react";
import "./transfer.css";

const TransferReceipt = () => {
  return (
    <div className="container">
      <div className="header">
        <span className="back">← Go home</span>
      </div>

      <div className="card">
        <h2 className="amount">500 UK Sent</h2>
        <p className="subtitle">Transfer to Musa Ibrahim</p>

        <div className="details">
          <Row label="Reference No" value="89578833456593334" />
          <Row label="Status" value={<span className="success">Success</span>} />
          <Row label="Transaction date" value="24th August, 2024" />
          <Row label="Recipient" value="Musa Ibrahim" />
          <Row label="Amount sent" value="500 UK" />
          <Row label="Completed on" value="24th August, 2024, 9:00am" />
          <Row label="Fee" value="0" />
          <Row label="Payment method" value="Bank transfer" />
        </div>

        <h3 className="sectionTitle">Receiver details</h3>

        <div className="details">
          <Row label="Amount received" value="NGN 850,000" />
          <Row label="Bank name" value="United Bank For Africa" />
          <Row label="Account number" value="2345236xxx" />
        </div>

        <div className="buttons">
          <button className="btn light">Download PDF</button>
          <button className="btn primary">Share PDF</button>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value }) => {
  return (
    <div className="row">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default TransferReceipt;