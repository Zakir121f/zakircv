export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#020617",
        position: "sticky",
        top: 0,
      }}
    >
      <h2>Zakir Rahimi</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#skills">Skills</a>
        <a href="#projects">Projecten</a>
        <a href="#experience">Ervaring</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}