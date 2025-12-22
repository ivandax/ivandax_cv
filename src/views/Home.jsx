import "../App.css";
import "./Home.css";
import ivanPhoto from "../images/ivan.jpg";

function Home() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Ivan Dario Pinzon</h1>
            <p className="headline">
              Senior Frontend Engineer (React-TypeScript)
            </p>
          </div>
          <div className="header-photo">
            <img src={ivanPhoto} alt="Ivan Dario Pinzon" />
          </div>
        </div>
      </header>

      <div className="cv-content">
        <main className="cv-main">
          <section className="cv-section">
            <h2>Experience</h2>

            <div className="experience-item">
              <h3>Senior Frontend Engineer</h3>
              <p className="company">Enverus / Rated Power</p>
              <p className="date">June 2024 - Present (Remote - Barcelona)</p>
              <p className="description">
                Built and maintained complex, responsive React interfaces for a
                large-scale solar plant design platform, collaborating closely
                with product and backend teams to deliver user-focused features
                used by energy engineers.
              </p>
            </div>

            <div className="experience-item">
              <h3>Frontend Engineer</h3>
              <p className="company">Zeelo.co</p>
              <p className="date">March 2022 - May 2024 (Hybrid - Barcelona)</p>
              <p className="description">
                Developed intuitive, production-ready web interfaces for a
                transport and logistics platform, working cross-functionally to
                ship features that improved usability and supported day-to-day
                operational workflows.
              </p>
            </div>

            <div className="experience-item">
              <h3>Frontend Engineer</h3>
              <p className="company">Nexiona</p>
              <p className="date">
                July 2020 - February 2022 (Remote - Barcelona)
              </p>
              <p className="description">
                Contributed to multiple web applications in the IoT and
                industrial domain, building front-end features and integrations
                for data-driven platforms used to monitor and manage industrial
                systems.
              </p>
            </div>
          </section>

          <section className="cv-section">
            <h2>Education</h2>

            <div className="education-item">
              <h3>
                Frontend Development with Javascript, React, UI/UX, Firebase
              </h3>
              <p className="institution">Skylab Coders</p>
              <p className="date">2020, Barcelona</p>
            </div>

            <div className="education-item">
              <h3>Backend Development with Java, Springboot, MySQL</h3>
              <p className="institution">Ironhack</p>
              <p className="date">2022, Barcelona</p>
            </div>
          </section>
        </main>

        <aside className="cv-sidebar">
          <section className="sidebar-section contact">
            <p>
              <a
                href="mailto:ivandariogye@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ivandariogye@gmail.com
              </a>
            </p>
            <p>+34 692623935</p>
            <p>
              <a
                href="https://github.com/ivandax"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ivandax
              </a>
            </p>
            <p>
              <a
                href="https://ivandax-cv.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                ivandax-cv.web.app
              </a>
            </p>
            <p>Barcelona</p>
          </section>

          <section className="sidebar-section">
            <h3>Technical Skills</h3>
            <div className="skills-group">
              <p>
                <strong>Languages:</strong> JavaScript, TypeScript
              </p>
              <p>
                <strong>Frontend:</strong> React, React Query, React Router,
                Zustand, Recoil, GraphQL, Zod
              </p>
              <p>
                <strong>UI & Styling:</strong> Material UI, Tailwind, Styled
                Components, Sass
              </p>
              <p>
                <strong>Maps & Visualization:</strong> Three.js, React Three
                Fiber, Mapbox, Leaflet
              </p>
              <p>
                <strong>Backend / BaaS:</strong> Firebase, Supabase
              </p>
            </div>
          </section>

          <section className="sidebar-section">
            <h3>Languages</h3>
            <p>
              <strong>Spanish:</strong> Native
            </p>
            <p>
              <strong>English:</strong> Professional
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default Home;
