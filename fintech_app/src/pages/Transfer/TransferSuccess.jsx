import React from "react";
import "./styles.css";

const TransferSuccess = ({ onDone }) => {
  return (
    <div className="containerr">
      <div className="content">
        <div className="icon success">✓</div>

        <h1 className="title">Limit increased successfully</h1>
        <p className="subtitle">
          Your account limit has been increased!
        </p>

        <button className="done-btn" onClick={onDone}>
          Done
        </button>
      </div>
    </div>
  );
};

export default TransferSuccess;