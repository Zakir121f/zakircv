export default function Contact() {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Contact</h2>

      <div className="contact-card">
        <p className="contact-item">
          📧 Email: <br />
          <a href="mailto:rzakir698@gmail.com">
            rzakir698@gmail.com
          </a>
        </p>

        <p className="contact-item">
          📞 Telefoon: <br />
          <a href="tel:0685324262">0685324262</a>
        </p>

        <p className="contact-item">
          💼 LinkedIn: <br />
          <a
            href="https://www.linkedin.com/in/zakir-rahimi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/zakir-rahimi
          </a>
        </p>

        <p className="contact-item">
          📍 Locatie: Assendelft
        </p>
      </div>
    </div>
  );
}