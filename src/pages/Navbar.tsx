import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <h2>Zakir Rahimi</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projecten</Link>
        <Link to="/experience">Ervaring</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}