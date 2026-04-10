import profile from "../assets/WhatsApp Image 2026-04-10 at 12.15.20.jpeg";

export default function Home() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", paddingTop: "100px" }}
    >
      {/* FOTO */}
      <img
  src={profile}
  alt="Zakir Rahimi"
  style={{
    width: "160px",
    height: "160px",
    borderRadius: "50%", // fix van 200% → 50%
    objectFit: "cover",
    objectPosition: "center 80%", // 👈 KEY FIX
    marginBottom: "20px",
  }}
/>

      <h1>Zakir Rahimi</h1>
      <h2>Software Engineering Student</h2>

      <p>
        Welkom op mijn portfolio. Via de navigatie kun je meer bekijken over mijn
        skills, projecten en werkervaring.
      </p>
    </div>
  );
}