import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Improvement Center
      </Link>
      <ul>
        <li>
          <Link to="/features">Features</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      {/* Dark theme 
        User profile icon
        Search bar */}
    </nav>
  );
}
