// COMPONENT: Navbar
// This is the top bar shown on mobile screens.
// It shows the current page name and a menu icon
// that opens the sidebar when tapped.
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Logo</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;