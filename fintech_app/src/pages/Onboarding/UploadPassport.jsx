import { useState, useRef } from "react";
import "./UploadPassport.css";

export default function UploadPassport() {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCircleClick = () => {
    fileInputRef.current.click();
  };

  const handleNext = () => {
    if (!photo) {
      alert("Please take or upload a passport photograph.");
      return;
    }
    alert("Proceeding to next step...");
  };

  return (
    <div className="passport-page">
      <div className="passport-card">
        <div className="passport-header">
          <button className="passport-back-btn" aria-label="Go back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
        </div>

        <div className="passport-body">
          <h1 className="passport-title">Take a passport photograph</h1>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="user"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <div className="passport-circle" onClick={handleCircleClick}>
            {preview ? (
              <img src={preview} alt="Passport" className="passport-preview" />
            ) : (
              <div className="passport-placeholder">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span>Tap to upload</span>
              </div>
            )}
          </div>
        </div>

        <button className="passport-next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}