import { useState } from "react";

// ── icons (inline SVG so no extra deps needed) ──────────────────────────────
const HomeIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12L12 3l9 9M4.5 10.5V20a.5.5 0 00.5.5h5v-5h4v5h5a.5.5 0 00.5-.5v-9.5" />
  </svg>
);
const TxIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
);
const BenefIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const LimitIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
  </svg>
);
const ProfileIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const BellIcon = () => (
  <svg width="20" height="20" fill="#e02020" viewBox="0 0 24 24">
    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="#e02020" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronDown = () => (
  <svg width="14" height="14" fill="none" stroke="#555" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

// ── nav items ────────────────────────────────────────────────────────────────
const navItems = [
  { label: "Home",               icon: <HomeIcon /> },
  { label: "Transaction History",icon: <TxIcon /> },
  { label: "Beneficiaries",      icon: <BenefIcon /> },
  { label: "Account limits",     icon: <LimitIcon />, active: true },
  { label: "Profile",            icon: <ProfileIcon /> },
];

// ── styles (scoped object) ───────────────────────────────────────────────────
const S = {
  shell: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
    background: "#f4f4f4",
    color: "#111",
  },
  sidebar: {
    width: 200,
    background: "#fff",
    borderRight: "1px solid #e8e8e8",
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    flexShrink: 0,
  },
  logo: {
    padding: "22px 24px 24px",
    fontWeight: 900,
    fontSize: 22,
    letterSpacing: "-0.5px",
    borderBottom: "1px solid #f0f0f0",
  },
  navList: {
    listStyle: "none",
    margin: "12px 0",
    padding: 0,
  },
  navItem: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 22px",
    fontSize: 13.5,
    fontWeight: active ? 600 : 400,
    color: active ? "#fff" : "#444",
    background: active ? "#e02020" : "transparent",
    cursor: "pointer",
    borderRadius: 0,
    transition: "background 0.15s",
  }),
  topbar: {
    height: 60,
    background: "#fff",
    borderBottom: "1px solid #e8e8e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 32px",
    gap: 12,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "#c8b8a2",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 700,
    color: "#fff",
  },
  userName: {
    fontSize: 14,
    fontWeight: 500,
    color: "#222",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  content: {
    padding: "40px 48px",
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 28,
    color: "#111",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 16,
    color: "#222",
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: "28px 32px",
    display: "flex",
    alignItems: "center",
    gap: 48,
    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
    maxWidth: 660,
  },
  limitBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  limitLabel: {
    fontSize: 12.5,
    color: "#888",
  },
  limitValue: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111",
  },
  spacer: { flex: 1 },
  btn: {
    background: "#e02020",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "12px 24px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
  },
};

// ── component ────────────────────────────────────────────────────────────────
export default function AccountLimits() {
  const [active, setActive] = useState("Account limits");

  return (
    <div style={S.shell}>
      {/* ── Sidebar ── */}
      <aside style={S.sidebar}>
        <div style={S.logo}>Logo</div>
        <ul style={S.navList}>
          {navItems.map((item) => (
            <li
              key={item.label}
              style={S.navItem(active === item.label)}
              onClick={() => setActive(item.label)}
            >
              <span style={{ opacity: active === item.label ? 1 : 0.7 }}>
                {item.icon}
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* ── Right panel ── */}
      <div style={S.main}>
        {/* Topbar */}
        <header style={S.topbar}>
          <div style={S.avatar}>KA</div>
          <span style={S.userName}>Kabir Akinola</span>
          <ChevronDown />
          <BellIcon />
        </header>

        {/* Page content */}
        <div style={S.content}>
          <div style={S.pageTitle}>Account limits</div>
          <div style={S.sectionTitle}>Current limits</div>

          <div style={S.card}>
            <div style={S.limitBlock}>
              <span style={S.limitLabel}>Daily limit</span>
              <span style={S.limitValue}>20,000 UK</span>
            </div>
            <div style={S.limitBlock}>
              <span style={S.limitLabel}>Yearly limit</span>
              <span style={S.limitValue}>1,000,000 UK</span>
            </div>
            <div style={S.spacer} />
            <button style={S.btn}>Increase Limits</button>
          </div>
        </div>
      </div>
    </div>
  );
}
