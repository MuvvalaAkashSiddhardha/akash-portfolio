const quickView = [
  ["Target Roles", "Software Engineer, Backend Developer"],
  ["Primary Stack", "Python, SQL, SQLite, Git"],
  ["Strength", "From requirement to working implementation"],
  ["Availability", "Internships and entry-level opportunities"]
];

const projectCards = [
  {
    title: "Automation System Prototype",
    description:
      "Developed an integrated software-hardware workflow for automated object handling. Focused on control logic, reliability, and repeatable behavior under changing input."
  },
  {
    title: "ML-Powered Email Screening",
    description:
      "Built a text-classification pipeline for risk detection in email content. Implemented preprocessing, baseline modeling, and tuning for consistent output quality."
  },
  {
    title: "Student Platform Web Application",
    description:
      "Created a web application with persistent storage for user and progress tracking. Structured the project for maintainability and incremental feature development."
  }
];

const fitPoints = [
  "Can convert ambiguous ideas into working software with clear execution steps.",
  "Comfortable collaborating, receiving feedback, and improving implementation quickly.",
  "Balances speed with quality through testing mindset and clean architecture choices.",
  "Strong intent to grow into a reliable software engineer in high-accountability teams."
];

export default function App() {
  return (
    <>
      <header className="hero" id="top">
        <nav className="nav wrap">
          <a className="brand" href="#top">Akash Siddhardha</a>
          <div className="menu">
            <a href="#about">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#fit">Engineering Fit</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Software Engineer - Early Career</p>
            <h1>Building dependable software with clear logic, clean code, and practical impact.</h1>
            <p className="lead">
              I am a Computer Science student focused on backend development, data-driven applications, and shipping end-to-end features.
              I work best on teams that value code quality, ownership, and steady delivery.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="mailto:akashsiddhardhamuvvala@gmail.com">Contact Recruiter</a>
              <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
              <a className="btn ghost" href="https://github.com/MuvvalaAkashSiddhardha" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn ghost" href="https://linkedin.com/in/muvvalaakashsiddhardha" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <aside className="card quick">
            <h2>Quick View</h2>
            <ul>
              {quickView.map(([label, value]) => (
                <li key={label}>
                  <strong>{label}:</strong> {value}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </header>

      <main className="wrap">
        <section id="about" className="section card">
          <h2>Profile</h2>
          <p>
            I approach software engineering as a problem-solving discipline. My focus is writing readable, maintainable code
            and delivering solutions that are easy to test, improve, and scale. I have built projects across automation,
            web applications, and ML-backed workflows, and I am ready to contribute in production-oriented engineering teams.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="grid two">
            <article className="card">
              <h3>Engineering Skills</h3>
              <p>Python, SQL, data structures basics, debugging, API-oriented thinking, database modeling, version control</p>
            </article>
            <article className="card">
              <h3>Delivery Skills</h3>
              <p>Requirement breakdown, communication, teamwork, iterative development, documentation, time management</p>
            </article>
          </div>
          <article className="card lang-card">
            <h3>Working Style</h3>
            <p>I prioritize clarity, consistency, and measurable progress in every project cycle.</p>
          </article>
        </section>

        <section id="projects" className="section">
          <h2>Project Highlights</h2>
          <div className="grid three">
            {projectCards.map((project) => (
              <article className="card project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="fit" className="section card">
          <h2>Engineering Fit</h2>
          <ul className="achievements">
            {fitPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section card contact">
          <h2>Contact</h2>
          <p>Open to software engineering interviews and technical assignments.</p>
          <div className="contact-links">
            <a href="mailto:akashsiddhardhamuvvala@gmail.com">akashsiddhardhamuvvala@gmail.com</a>
            <a href="tel:+917013141583">+91 7013141583</a>
            <a href="https://linkedin.com/in/muvvalaakashsiddhardha" target="_blank" rel="noreferrer">linkedin.com/in/muvvalaakashsiddhardha</a>
            <a href="https://github.com/MuvvalaAkashSiddhardha" target="_blank" rel="noreferrer">github.com/MuvvalaAkashSiddhardha</a>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <p>&copy; 2026 Akash Siddhardha</p>
      </footer>
    </>
  );
}
