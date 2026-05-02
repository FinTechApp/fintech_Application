import React from "react";
import "./styles.css";

const ReviewTransfer = ({ onBack }) => {
  return (
    <div className="containerr">
      <div className="top-bar" onClick={onBack}>
        <span className="back-arrow">←</span>
        <span className="go-home">Go home</span>
      </div>

      <div className="content">
        <div className="icon pending">⟳</div>

        <h1 className="title">Limit increase under review</h1>
        <p className="subtitle">
          Your request to upgrade account limits is currently being processed.
          Please check back later
        </p>
      </div>
    </div>
  );
};

export default ReviewTransfer;
