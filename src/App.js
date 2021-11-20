import "./App.css";
import image from "./images/ivan.jpg";

function App() {
  return (
    <body style={{ paddingTop: "12px" }}>
      <div className="displayColumn displayJustify" id="content">
        <div className="displayColumn white fancyBorder" id="summary">
          <div id="summary_photo">
            <img src={image} alt="Ivan img" />
          </div>
          <div className="mildMargin" id="summary_items">
            <h4 className="deepBlue">Ivan Dario Pinzon</h4>
            <p>
              <i className="fa fa-briefcase deepBlue"></i> Frontend Developer
            </p>
            <p>
              <i className="fa fa-home deepBlue"></i> Barcelona, Spain
            </p>
            <p>
              <i className="fa fa-envelope deepBlue"></i> ivandariogye@gmail.com
            </p>
            <p>
              <i className="fa fa-phone deepBlue"></i> +34 692623935
            </p>
            <p>
              <i className="fa fas fa-link deepBlue"></i>
              <a
                target="_blank"
                href="https://github.com/ivandax"
                rel="noopener noreferrer"
              >
                {" "}
                Github
              </a>
            </p>
            <p>
              <i className="fa fas fa-link deepBlue"></i>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ivandariopd/"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </p>
          </div>
          <hr />
          <div className="mildMargin" id="summary_skills">
            <h4 className="deepBlue">
              <i className="fa fa-asterisk deepBlue"></i> Skills
            </h4>
            <p>Javascript</p>
            <div className="progressBar stoneGrey">
              <div
                className="progress deepBlueBackground"
                id="progressJavascript"
              >
                90%
              </div>
            </div>
            <p>HTML & CSS</p>
            <div className="progressBar stoneGrey">
              <div className="progress deepBlueBackground" id="progressHTML">
                90%
              </div>
            </div>
            <p>React</p>
            <div className="progressBar stoneGrey">
              <div className="progress deepBlueBackground" id="progressReact">
                80%
              </div>
            </div>
            <p>Python</p>
            <div className="progressBar stoneGrey">
              <div className="progress deepBlueBackground" id="progressPython">
                40%
              </div>
            </div>
            <p>PHP</p>
            <div className="progressBar stoneGrey">
              <div className="progress deepBlueBackground" id="progressPHP">
                30%
              </div>
            </div>
          </div>
          <div className="mildMargin" id="summary_languages">
            <h4 className="deepBlue">
              <i className="fa fa-globe deepBlue"></i> Languages
            </h4>
            <p>English</p>
            <div className="progressBar stoneGrey">
              <div className="progress deepBlueBackground" id="progressEnglish">
                100%
              </div>
            </div>
            <p>Spanish</p>
            <div className="progressBar stoneGrey">
              <div className="progress deepBlueBackground" id="progressSpanish">
                100%
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="displayColumn" id="details">
          <div className="white fancyBorder" id="work_experience">
            <h4 className="mildMargin deepBlue">
              <i className="fa fa-briefcase deepBlue"></i> Work Experience
            </h4>
            <div className="mildMargin">
              <h5>Frontend Developer - Nexiona</h5>
              <p>
                <i className="fa fa-calendar deepBlue"></i> June 2020 - Present
              </p>
              <p>Responsive design of web platforms</p>
              <p>Web app development with React and Redux</p>
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
                <i className="fa fa-calendar deepBlue"></i> April 2020 - July
                2020
              </p>
              <p>
                Creation of a web app for Dominican baseball historical
                statistics.
              </p>
              <p>
                Design of the data model and implementation on Google Firebase.
              </p>
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
                <i className="fa fa-calendar deepBlue"></i> Feb 2020 - May 2020
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
                <i className="fa fa-calendar deepBlue"></i> Jan 2019 - June 2020
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
                <i className="fa fa-calendar deepBlue"></i> Apr 2017 - Dec 2018
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
              <i className="fa fa-briefcase deepBlue"></i> Projects & Media
            </h4>
            <div className="mildMargin">
              <h5>Web Development:</h5>
              <p>
                <a
                  target="_blank"
                  href="https://stats.winterballdata.com/"
                  rel="noopener noreferrer"
                >
                  React & Redux - WinterballData Stats
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://simpleprofiles.ew.r.appspot.com/"
                  rel="noopener noreferrer"
                >
                  Express Profiles - Simple Server and REST API
                </a>
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
              <p>
                <a
                  target="_blank"
                  href="http://www.ivandax.com/projects/movies/"
                  rel="noopener noreferrer"
                >
                  React - Movie Browsing App
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="http://www.ivandax.com/projects/beerapp/"
                  rel="noopener noreferrer"
                >
                  React - Beer Consulting App
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://sample-todo-ivan.firebaseapp.com/"
                  rel="noopener noreferrer"
                >
                  React - Simple To Do List
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.ivandax.com/projects/photoapp"
                  rel="noopener noreferrer"
                >
                  PhotoApp: Responsive Design with CSS and Sass
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.ivandax.com/projects/reposearch"
                  rel="noopener noreferrer"
                >
                  Github Repository Search. API requests with Axios
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.ivandax.com/projects/hangman"
                  rel="noopener noreferrer"
                >
                  Hangman Game. Object Oriented
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.ivandax.com/projects/landing"
                  rel="noopener noreferrer"
                >
                  Landing Page: Responsive Design
                </a>
              </p>
            </div>
          </div>

          <div className="white fancyBorder" id="education">
            <h4 className="mildMargin deepBlue">
              <i className="fa fa-asterisk deepBlue"></i> Education
            </h4>
            <div className="mildMargin">
              <h5>Skylab Coders</h5>
              <p>
                <i className="fa fa-calendar deepBlue"></i> Sep 2019 - Ongoing
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
                <i className="fa fa-calendar deepBlue"></i> May 2020 - June 2020
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
                <i className="fa fa-calendar deepBlue"></i> Jul 2018 - Nov 2018
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
                <i className="fa fa-calendar deepBlue"></i> Jan 2018 - May 2018
              </p>
              <p>4 Course Specialization HTML, CSS, Javascript</p>
            </div>
            <hr />
            <div className="mildMargin">
              <h5>Universitat Autonoma de Barcelona</h5>
              <p>
                <i className="fa fa-calendar deepBlue"></i> Sep 2016 - June 2017
              </p>
              <p>Master Degree of Economics and Business</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="displayColumn displayAlignCenter deepBlueBackground">
        <div id="footer_content">
          Social Media:
          <a
            className="twitter-follow-button"
            href="https://twitter.com/ivandax_89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter whiteBackground"></i>
          </a>
        </div>
      </footer>
    </body>
  );
}

export default App;
