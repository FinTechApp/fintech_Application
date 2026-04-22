// PAGE: Upload ID
// This is the page where the user uploads a photo of their
// government-issued ID card (front and back).
// This is Step 1 of the identity verification process.
// Route: /onboarding/upload-id

import { useState, useRef } from "react";
import "./UploadId.css";

const ID_TYPES = [
  "National Identification Card",
  "Driver's License",
  "Voter's Card",
  "International Passport",
];

export default function UploadId() {
  const [idType, setIdType] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [expDate, setExpDate] = useState("");
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  const handleNext = () => {
    if (!idType || !serialNo || !expDate || !file) {
      alert("Please fill in all fields and upload your ID.");
      return;
    }
    alert("Proceeding to next step...");
  };

  return (
    <div className="upload-id-page">
      <div className="upload-id-card">
        {/* Header */}
        <div className="uid-header">
          <button className="uid-back-btn" aria-label="Go back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <h1 className="uid-title">Upload a valid ID</h1>
          <p className="uid-subtitle">
            Please upload a valid National Identification card,<br />
            driver's license or voter's card
          </p>
        </div>

        {/* Form */}
        <div className="uid-form">
          {/* ID Type */}
          <div className="uid-field">
            <label className="uid-label">Valid ID type</label>
            <div className="uid-select-wrapper">
              <select
                className="uid-select"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
              >
                <option value="">— Select —</option>
                {ID_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <span className="uid-select-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>

          {/* Serial No */}
          <div className="uid-field">
            <label className="uid-label">Serial no</label>
            <input
              className="uid-input"
              type="text"
              placeholder="Enter serial number"
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
            />
          </div>

          {/* Exp Date */}
          <div className="uid-field">
            <label className="uid-label">Exp date</label>
            <input
              className="uid-input"
              type="text"
              placeholder="DD/MM/YYYY"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => { if (!expDate) e.target.type = "text"; }}
            />
          </div>

          {/* Upload Area */}
          <div
            className={`uid-upload-area ${dragOver ? "drag-over" : ""} ${file ? "has-file" : ""}`}
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {file ? (
              <>
                <div className="uid-upload-icon success">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="uid-upload-filename">{file.name}</p>
                <p className="uid-upload-hint">Tap to change file</p>
              </>
            ) : (
              <>
                <div className="uid-upload-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <p className="uid-upload-label">Click to Upload</p>
                <p className="uid-upload-hint">Max. file size: 25 MB</p>
              </>
            )}
          </div>
        </div>

        {/* Next Button */}
        <button className="uid-next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
