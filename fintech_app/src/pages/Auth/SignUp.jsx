// PAGE: Sign Up
// This is the page where a new user creates their account.
// It has fields for first name, last name, country of residence,
// email, phone number, password and confirm password.
// After submitting, the user is taken to the Verify Email page.
// Route: /signup

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RED = "#E8402A";
const FONT = "'DM Sans', sans-serif";

const loadFont = () => {
  if (!document.getElementById("dm-sans-font")) {
    const link = document.createElement("link");
    link.id = "dm-sans-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap";
    document.head.appendChild(link);
  }
};

const EyeOpen = () => (
  <svg
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#999"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeOff = () => (
  <svg
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#999"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    />
  </svg>
);

const Field = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  isPassword,
  show,
  onToggle,
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <label
      style={{ fontSize: 13, fontWeight: 400, color: "#444", fontFamily: FONT }}
    >
      {label}
    </label>
    <div style={{ position: "relative" }}>
      <input
        type={isPassword ? (show ? "text" : "password") : type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        style={{
          width: "100%",
          height: 44,
          padding: isPassword ? "0 40px 0 12px" : "0 12px",
          backgroundColor: "#EBEBEB",
          border: "none",
          borderRadius: 5,
          fontSize: 14,
          fontFamily: FONT,
          fontWeight: 400,
          color: "#333",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      {isPassword && (
        <button
          type="button"
          onClick={onToggle}
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          {show ? <EyeOpen /> : <EyeOff />}
        </button>
      )}
    </div>
  </div>
);

const SignUp = () => {
  useEffect(() => {
    loadFont();
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // TODO: navigate to /verify-email
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: FONT }}>
      {/* ════════════════ LEFT PANEL ════════════════ */}
      {/* ════════════════ LEFT PANEL ════════════════ */}
<div style={{
  width: 255,
  minHeight: "100vh",
  flexShrink: 0,
  position: "relative",
  backgroundColor: "#180900",
  backgroundImage: "url('/assets/auth-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "80px 16px 0px",
  gap: 180,
}}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            
          }}
        />

        {/* Tagline — TOP */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              color: "#fff",
              fontSize: 23,
              fontWeight: 600,
              lineHeight: 1.4,
              margin: 0,
              fontFamily: FONT,
            }}
          >
            The fastest way to{" "}
            <span style={{ color: RED }}>send money abroad</span>
          </p>
        </div>

        {/* Logo — BOTTOM */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: 20,
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 20,
              fontFamily: FONT,
            }}
          >
            Logo
          </span>
        </div>
      </div>

      {/* ════════════════ RIGHT PANEL ════════════════ */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          overflowY: "auto",
        }}
      >
        {/* Logo top right */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "22px 36px 0",
          }}
        >
          <span
            style={{
              fontWeight: 1000,
              fontSize: 22,
              color: "#111",
              fontFamily: FONT,
            }}
          >
            Logo
          </span>
        </div>

        {/* ── Step Indicator — full width spread ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "18px 36px 16px",
            borderBottom: "1px solid #E8E8E8",
          }}
        >
          {/* Step 1 — Active */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 7,
                backgroundColor: RED,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 14,
                color: "#fff",
              }}
            >
              1
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#111",
                fontFamily: FONT,
              }}
            >
              Sign up
            </span>
          </div>

          {/* Connector line — stretches to fill space */}
          <div
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#E0E0E0",
              margin: "0 16px",
            }}
          />

          {/* Step 2 — Inactive */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 7,
                backgroundColor: "#E0E0E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 14,
                color: "#999",
              }}
            >
              2
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#999",
                fontFamily: FONT,
              }}
            >
              Verify Email
            </span>
          </div>

          {/* Connector line */}
          <div
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#E0E0E0",
              margin: "0 16px",
            }}
          />

          {/* Step 3 — Inactive */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 7,
                backgroundColor: "#E0E0E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: 14,
                color: "#999",
              }}
            >
              3
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#999",
                fontFamily: FONT,
              }}
            >
              Upload credentials
            </span>
          </div>
        </div>

        {/* ── Form Area ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "28px 36px 40px",
          }}
        >
          <div style={{ width: "100%", maxWidth: 600 }}>
            {/* Title */}
            <h1
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#111",
                textAlign: "center",
                margin: "0 0 8px",
                fontFamily: FONT,
              }}
            >
              Sign up
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: "#777",
                textAlign: "center",
                lineHeight: 1.65,
                margin: "0 0 24px",
                fontFamily: FONT,
              }}
            >
              Please fill in your name as it appears on your official documents
              and government IDs
              <br />
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{
                  color: RED,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: FONT,
                }}
              >
                Log in here
              </Link>
            </p>

            {/* Blue border form box */}
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  border: "1.5px solid #5B9BD5",
                  borderRadius: 8,
                  padding: "22px 20px 18px",
                  marginBottom: 18,
                }}
              >
                {/* Row 1 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 18,
                  }}
                >
                  <Field
                    label="First name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <Field
                    label="Last name"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>

                {/* Row 2 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 18,
                  }}
                >
                  <Field
                    label="Country of residence"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Row 3 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 18,
                  }}
                >
                  <Field
                    label="Phone number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <Field
                    label="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    isPassword
                    show={showPassword}
                    onToggle={() => setShowPassword(!showPassword)}
                  />
                </div>

                {/* Row 4 — Confirm password half width */}
                <div style={{ width: "calc(50% - 8px)" }}>
                  <Field
                    label="Confirm password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    isPassword
                    show={showConfirm}
                    onToggle={() => setShowConfirm(!showConfirm)}
                  />
                </div>
              </div>

              {/* Checkbox & Next Button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#555",
                    cursor: "pointer",
                    fontFamily: FONT,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    style={{
                      width: 14,
                      height: 14,
                      accentColor: RED,
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  />
                  I agree to the{" "}
                  <span
                    style={{
                      color: RED,
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    terms & conditions
                  </span>{" "}
                  and{" "}
                  <span
                    style={{
                      color: RED,
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    privacy policy
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed}
                  style={{
                    backgroundColor: RED,
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "13px 48px",
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: FONT,
                    cursor: agreed ? "pointer" : "not-allowed",
                    opacity: agreed ? 1 : 0.6,
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
