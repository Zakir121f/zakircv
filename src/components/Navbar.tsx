export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <h2 style={{ color: "#0f172a" }}>Zakir Rahimi</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/skills">Skills</a>
        <a href="/projects">Projecten</a>
        <a href="/experience">Ervaring</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}