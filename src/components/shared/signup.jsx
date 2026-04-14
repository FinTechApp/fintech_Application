import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill in all fields");
    } else {
      setMessage("Signup successful 🚀");
    }
  };

  return (
    <div className="mobile-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span>10:00AM</span>
        <div className="icons">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <h2>Welcome back</h2>
        <p className="sub-text">New to CosmoRemit? <a href="/signup" className="sign">Sign up</a></p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export { Signup };