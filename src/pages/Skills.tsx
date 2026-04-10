export default function Skills() {
  return (
    <div className="container">
      <h2>Skills</h2>

      {/* Java */}
      <div className="skill">
        <div className="skill-name">Java</div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "60%" }}></div>
        </div>
      </div>

      {/* TypeScript */}
      <div className="skill">
        <div className="skill-name">TypeScript</div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "75%" }}></div>
        </div>
      </div>

      {/* JavaScript */}
      <div className="skill">
        <div className="skill-name">JavaScript</div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "75%" }}></div>
        </div>
      </div>

      {/* Python */}
      <div className="skill">
        <div className="skill-name">Python</div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "79%" }}></div>
        </div>
      </div>

      {/* SQL */}
      <div className="skill">
        <div className="skill-name">SQL</div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "79%" }}></div>
        </div>
      </div>

      {/* HTML/CSS */}
      <div className="skill">
        <div className="skill-name">HTML & CSS</div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "70%" }}></div>
        </div>
      </div>
    </div>
  );
}