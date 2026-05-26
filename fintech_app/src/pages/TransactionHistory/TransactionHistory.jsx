import { useState } from "react";
import homeIcon from "../../assets/transactionpage/homeIcon.svg";
import arrowDownIcon from "../../assets/transactionpage/arrowDownIcon.svg";
import bellIcon from "../../assets/transactionpage/bellIcon.svg";
import beneficiariesIcon from "../../assets/transactionpage/beneficiariesIcon.svg";
import historyIcon from "../../assets/transactionpage/historyIcon.svg";
import limitsIcon from "../../assets/transactionpage/limitsIcon.svg";
import picIcon from "../../assets/transactionpage/picIcon.svg";
import profileIcon from "../../assets/transactionpage/profileIcon.svg";
import searchIcon from "../../assets/transactionpage/searchIcon.svg"; 


const transactions = [
  { id: 1, reference: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 2, reference: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 3, reference: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 4, reference: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 5, reference: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 6, reference: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 7, reference: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
];

const navItems = [
  { label: "Home", icon: homeIcon },
  { label: "Transaction History", icon: historyIcon },
  { label: "Beneficiaries", icon: beneficiariesIcon },
  { label: "Account limits", icon: limitsIcon },
  { label: "Profile", icon: profileIcon },
];

const S = {
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    background: "#f4f5f7",
    boxSizing: "border-box",
  },
  sidebar: {
    width: "220px",
    minWidth: "220px",
    maxWidth: "220px",
    height: "100vh",
    position: "sticky",
    top: 0,
    background: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    padding: "28px 0 24px",
    boxSizing: "border-box",
    flexShrink: 0,
  },
  logo: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#1a1a1a",
    padding: "0 24px 32px",
    display: "block",
    fontFamily: "'DM Sans', sans-serif",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    padding: "0 12px",
  },
  navItem: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "none",
    background: active ? "#e8001c" : "transparent",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    color: active ? "#ffffff" : "#6b7280",
    boxSizing: "border-box",
    transition: "background 0.15s, color 0.15s",
  }),
  navIcon: (active) => ({
  fontSize: "16px",
  flexShrink: 0,
  filter: active ? "brightness(0) invert(1)" : "brightness(0) invert(0.4)",
}),

  body: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  topbar: {
    height: "64px",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 32px",
    boxSizing: "border-box",
  },
  topbarUser: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#e8001c",
    color: "#fff",
    fontSize: "13px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
  username: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#1a1a1a",
    fontFamily: "'DM Sans', sans-serif",
  },
  chevron: {
    fontSize: "12px",
    color: "#6b7280",
  },
  bell: {
    fontSize: "18px",
    color: "#e8001c",
    marginLeft: "4px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    padding: "32px",
    boxSizing: "border-box",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "28px 28px 16px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: "0 0 20px",
    letterSpacing: "-0.4px",
    fontFamily: "'DM Sans', sans-serif",
  },
  filters: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  searchWrap: {
    position: "relative",
    flex: 1,
    minWidth: "180px",
    maxWidth: "360px",
  },
  search: {
    width: "100%",
    height: "40px",
    padding: "0 40px 0 14px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    background: "#f9fafb",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#1a1a1a",
    outline: "none",
    boxSizing: "border-box",
  },
  searchIcon: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "14px",
    color: "#9ca3af",
    pointerEvents: "none",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    height: "40px",
    padding: "0 16px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    background: "#f9fafb",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#6b7280",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 6px",
    boxSizing: "border-box",
  },
  th: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#6b7280",
    textAlign: "left",
    padding: "4px 16px 10px",
    background: "transparent",
    border: "none",
    fontFamily: "'DM Sans', sans-serif",
  },
  thFirst: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#6b7280",
    textAlign: "left",
    padding: "4px 20px 10px",
    background: "transparent",
    border: "none",
    fontFamily: "'DM Sans', sans-serif",
  },
  td: {
    padding: "14px 16px",
    fontSize: "14px",
    color: "#1a1a1a",
    border: "none",
    background: "#f9fafb",
    fontFamily: "'DM Sans', sans-serif",
  },
  tdFirst: {
    padding: "14px 16px 14px 20px",
    fontSize: "14px",
    color: "#1a1a1a",
    border: "none",
    background: "#f9fafb",
    borderRadius: "10px 0 0 10px",
    fontFamily: "'DM Sans', sans-serif",
  },
  tdLast: {
    padding: "14px 20px 14px 16px",
    fontSize: "14px",
    color: "#1a1a1a",
    border: "none",
    background: "#f9fafb",
    borderRadius: "0 10px 10px 0",
    fontFamily: "'DM Sans', sans-serif",
  },
  statusSuccess: {
    color: "#16a34a",
    fontWeight: 600,
    fontSize: "13px",
  },
};

export default function TransactionHistory() {
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("Transaction History");

return (
    <div style={S.root}>
      {/* Sidebar */}
      <aside style={S.sidebar}>
        <span style={S.logo}>Logo</span>
        <div style={S.nav}>
          {navItems.map((item) => (
            <button
              key={item.label}
              style={S.navItem(activeNav === item.label)}
              onClick={() => setActiveNav(item.label)}
            >
              <img src={item.icon} alt={item.label} width={24} height={24} style={S.navIcon(activeNav === item.label)} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Right body */}
      <div style={S.body}>
        {/* Topbar */}
        <header style={S.topbar}>
          <div style={S.topbarUser}>
            <div style={S.avatar}><img src={picIcon} alt="Profile" width={34} height={34} style={{ borderRadius: "50%", objectFit: "cover" }} /></div>
            <span style={S.username}>Kabir Akinola</span>
            <span style={S.chevron}>▾</span>
            <img src={bellIcon} alt="Notifications" width={24} height={24} />
          </div>
        </header>

        {/* Main */}
        <main style={S.main}>
          <div style={S.card}>
            <h1 style={S.title}>Transactions</h1>

            <div style={S.filters}>
              <div style={S.searchWrap}>
                <input
                  style={S.search}
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <img src={searchIcon} alt="Search" width={18} height={18} style={S.searchIcon} />
              </div>
              <button style={S.btn}>Select date 📅</button>
              <button style={S.btn}>Filter ⇅</button>
            </div>

            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.thFirst}>Reference</th>
                  <th style={S.th}>Amount Sent</th>
                  <th style={S.th}>Rate</th>
                  <th style={S.th}>Channel</th>
                  <th style={S.th}>Recipient</th>
                  <th style={S.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions
                  .filter(tx =>
                    tx.reference.includes(search) ||
                    tx.recipient.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(tx => (
                    <tr key={tx.id}>
                      <td style={S.tdFirst}>{tx.reference}</td>
                      <td style={S.td}>{tx.amount}</td>
                      <td style={S.td}>{tx.rate}</td>
                      <td style={S.td}>{tx.channel}</td>
                      <td style={S.td}>{tx.recipient}</td>
                      <td style={S.tdLast}><span style={S.statusSuccess}>{tx.status}</span></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}