import "../App.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdBriefcase } from "react-icons/io";

import SidePanel from "../components/SidePanel";
import { Links } from "../components/Links";

function Home() {
  return (
    <div style={{ paddingTop: "12px" }}>
      <div className="displayColumn displayJustify" id="content">
        <SidePanel />

        <div className="displayColumn" id="details">
          <Links />
          <div className="white fancyBorder" id="work_experience">
            <h4 className="mildMargin deepBlue">
              <IoMdBriefcase /> Work Experience
            </h4>
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
              <h5>Freelance Developer - WinterballData</h5>
              <p>
                <AiOutlineCalendar /> April 2020 - July 2020
              </p>
              <p>
                My first full-stack project: Creation of a web app for Dominican baseball historical
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
              <h5>Freelance Frontend Developer - Ekiter</h5>
              <p>
                <AiOutlineCalendar /> Feb 2020 - May 2020
              </p>
              <p>Responsive design and animations with CSS and jQuery.</p>
              <p>Styling with Bootstrap 4.</p>
              <p>
                Building of an app for handling user data and credit card
                payments with React / Redux & MangoPay.
              </p>
              <a
                href="http://www.ekiter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ekiter
              </a>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Report Analyst: Webhelp BOSE</h5>
              <p>
                <AiOutlineCalendar /> Jan 2019 - June 2020
              </p>
              <p>
                Development of New Reports and Working Tools for Performance and
                Quality Monitoring of a Customer Service Project with over 100
                representatives. Automation of Reports using VBA. Development of
                Financial Monitoring tools.
              </p>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Report Analyst: Webhelp Google Android</h5>
              <p>
                <AiOutlineCalendar /> Apr 2017 - Dec 2018
              </p>
              <p>
                Development and maintenance of reports for performance and
                quality monitoring of a Customer Service Project with over 300
                representatives. Automation of reports using Google Sheets API
                (Javascript) and Python.
              </p>
            </div>
          </div>

          <div className="white fancyBorder" id="projects">
            <h4 className="mildMargin deepBlue">
              <IoMdBriefcase /> Projects & Media
            </h4>
            <div className="mildMargin">
              <h5>Web Development Portfolio:</h5>
              <p>
                <a
                  target="_blank"
                  href="https://stats.winterballdata.com/"
                  rel="noopener noreferrer"
                >
                  React & Redux - WinterballData Stats
                </a>
              </p>
              <p style={{ marginLeft: "8px", fontSize: "12px" }}>
                Web platform that offers historical data for the Dominican
                Baseball League. Created with React, Redux and Firebase.
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://belated-valentine.web.app/"
                  rel="noopener noreferrer"
                >
                  Belated Valentine - Comedy and Art blog
                </a>
              </p>
              <p style={{ marginLeft: "8px", fontSize: "12px" }}>
                Web platform to showcase various forms of art and comedy
                content. Created using Next js and Tailwind.
              </p>
              <p>SimpleTask - FullStack Project</p>
              <p style={{ marginLeft: "8px", fontSize: "12px" }}>
                Frontend and Backend for a business "task manager" web app.
                Built using React, Redux, MongoDB, Express and Mongoose.
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://cherry-rate-app.firebaseapp.com/"
                  rel="noopener noreferrer"
                >
                  React & Redux - CherryPeach: Voting and Event Creation Web App
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://simpletxt-post.firebaseapp.com/"
                  rel="noopener noreferrer"
                >
                  React & Redux - SimpleTxt: Social Media with Firebase
                </a>
              </p>
            </div>
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

      <footer className="displayColumn displayAlignCenter deepBlueBackground">
        <div id="footer_content">Web Development</div>
      </footer>
    </div>
  );
}

export default Home;
