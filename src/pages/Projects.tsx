export default function Projects() {
  return (
    <div className="container">
      <h2>Projecten</h2>

      {/* EU Dashboard */}
      <div className="card">
        <h3>EU Sales Dashboard</h3>
        <p>
          Tijdens mijn stage heb ik gewerkt aan een dashboard voor Europese
          salesdata.
        </p>

        <p><b>Wat ik heb gedaan:</b></p>
        <ul>
          <li>Data analyseren met SQL en Python</li>
          <li>Data validatie en kwaliteitscontroles uitvoeren</li>
          <li>Queries schrijven voor KPI-data</li>
          <li>Samenwerken met verschillende teams</li>
        </ul>
      </div>

      {/* Web dev */}
      <div className="card">
        <h3>Webapplicaties</h3>
        <p>
          Tijdens mijn studie heb ik meerdere webapplicaties gebouwd met React
          en TypeScript.
        </p>

        <p><b>Wat ik heb gedaan:</b></p>
        <ul>
          <li>Frontend bouwen met React</li>
          <li>Werken met component structuur</li>
          <li>API’s koppelen met fetch</li>
          <li>Gebruik van TypeScript</li>
        </ul>
      </div>

      {/* Eigen project */}
      <div className="card">
        <h3>AI Fitness App (eigen project)</h3>
        <p>
          Momenteel ben ik bezig met het ontwikkelen van een eigen fitness app
          waarin ik mijn voeding en calorieën kan bijhouden.
        </p>

        <p><b>Wat ik doe:</b></p>
        <ul>
          <li>Werken met React en TypeScript</li>
          <li>Zelf functionaliteiten bedenken en bouwen</li>
          <li>Structuur opzetten zoals echte applicaties</li>
          <li>Focus op gebruiksvriendelijke UI</li>
        </ul>
      </div>
    </div>
  );
}