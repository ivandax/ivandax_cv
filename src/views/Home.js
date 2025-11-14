import "../App.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdBriefcase } from "react-icons/io";

import SidePanel from "../components/SidePanel";

function Home() {
  return (
    <div style={{ paddingTop: "12px" }}>
      <div className="displayColumn displayJustify" id="content">
        <SidePanel />

        <div className="displayColumn" id="details">
          <div className="white fancyBorder" id="work_experience">
            <h4 className="mildMargin deepBlue">
              <IoMdBriefcase /> Work Experience
            </h4>
            <div className="mildMargin">
              <h5>Senior Frontend Developer - RatedPower | Enverus</h5>
              <p>
                <AiOutlineCalendar /> June 2024 - Present
              </p>
              <p>
                Development of web applications for power plants design
              </p>
              <ul>
                <li>React, Typescript</li>
                <li>Zustand, React Context</li>
                <li>GraphQL</li>
                <li>Styled components</li>
                <li>Mapbox</li>
                <li>Three.js and React Three Fiber</li>
              </ul>
              <a
                href="https://ratedpower.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RatedPower - Enverus
              </a>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Frontend Developer - Zeelo</h5>
              <p>
                <AiOutlineCalendar /> March 2022 - Present
              </p>
              <p>
                Development of frontend applications for a logistics business
              </p>
              <ul>
                <li>Web applications with React, JS and TS</li>
                <li>State management with Recoil, Redux</li>
                <li>Redux Sagas</li>
                <li>Styled Components, Material UI</li>
                <li>Maps with Leaflet</li>
              </ul>
              <a
                href="https://zeelo.co/uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zeelo
              </a>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Frontend Developer - Nexiona</h5>
              <p>
                <AiOutlineCalendar /> June 2020 - March 2022
              </p>
              <p>Development of web platforms for an IoT business</p>
              <ul>
                <li>Web applications with React and TS</li>
                <li>State management with Redux</li>
                <li>Redux loop, Redux observable</li>
                <li>Functional programming with fp-ts and io-ts</li>
              </ul>
              <a
                href="https://nexiona.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nexiona
              </a>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>WinterballData</h5>
              <p>
                <AiOutlineCalendar /> Ongoing freelance project
              </p>
              <p>
                Full-stack project: Creation of a web app for Dominican baseball historical
                statistics.
              </p>
              <p>Design of the data model and implementation on Firestore.</p>
              <p>Authentication, storage and persistence</p>
              <p>
                Development of various reports with a free-trial period option
              </p>
              <a
                href="https://stats.winterballdata.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WinterballData
              </a>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Culturetxt.com</h5>
              <p>
                <AiOutlineCalendar /> Feb 2024
              </p>
              <p>React, Firebase, Firestore, Zustand</p>
              <p>Styling with Styled components</p>
              <p>
                App for self-publishing articles and written content.
              </p>
              <a
                href="https://culturetxt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Culturetxt
              </a>
            </div>
            <hr />
          </div>

          <div className="white fancyBorder" id="education">
            <h4 className="mildMargin deepBlue">
              <i className="fa fa-asterisk deepBlue"></i> Studies
            </h4>
            <div className="mildMargin">
              <h5>Ironhack</h5>
              <p>
                <AiOutlineCalendar /> June 2022 - Nov 2022
              </p>
              <p>Bootcamp on Backend development with Java</p>
              <ul>
                <li>Java programming</li>
                <li>Persistence with MySQL</li>
                <li>Springboot</li>
                <li>JPA</li>
                <li>Security</li>
              </ul>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Udacity</h5>
              <p>
                <AiOutlineCalendar /> March 2022 - June 2022
              </p>
              <p>Web Applications with Python</p>
              <ul>
                <li>REST APIs with Flask</li>
                <li>Postgres</li>
                <li>SQLAlchemy</li>
                <li>Deployment</li>
              </ul>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Skylab Coders</h5>
              <p>
                <AiOutlineCalendar /> Sep 2019 - Dec 2019
              </p>
              <p>Bootcamp on Frontend Development</p>
              <ul>
                <li>Responsive Design with HTML, CSS (Sass)</li>
                <li>Version control with git</li>
                <li>Interactivity with Javascript, jQuery</li>
                <li>React & Redux</li>
                <li>Backend with Firebase</li>
              </ul>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Coursera: Backend Development with Express</h5>
              <p>
                <AiOutlineCalendar /> May 2020 - June 2020
              </p>
              <p>Course on Backend developement with Javascript</p>
              <ul>
                <li>NodeJS</li>
                <li>Express, REST APIs and authentication</li>
                <li>MongoDB</li>
                <li>Mongoose Schemas</li>
              </ul>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Coursera: Building Web Applications with PHP</h5>
              <p>
                <AiOutlineCalendar /> Jul 2018 - Nov 2018
              </p>
              <p>
                5 Course Specialization on Database Application with PHP and SQL
              </p>
              <ul>
                <li>Building PHP Applications</li>
                <li>SQL</li>
              </ul>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>
                Coursera: Responsive Web Design with HTML, CSS and Javascript
              </h5>
              <p>
                <AiOutlineCalendar /> Jan 2018 - May 2018
              </p>
              <p>4 Course Specialization HTML, CSS, Javascript</p>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Universitat Autonoma de Barcelona</h5>
              <p>
                <AiOutlineCalendar /> Sep 2016 - June 2017
              </p>
              <p>Master Degree of Economics and Business</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="displayAlignCenter deepBlueBackground">
        <div id="footer_content">Web Development</div>
      </footer>
    </div>
  );
}

export default Home;
