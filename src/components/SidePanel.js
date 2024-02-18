import "../App.css";
import image from "../images/ivan.jpg";
import { GrLocation, GrPersonalComputer } from "react-icons/gr";
import { IoMdBriefcase, IoMdBusiness } from "react-icons/io";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsGlobe as LanguageIcon } from "react-icons/bs";
import { TfiWrite as WriteIcon } from "react-icons/tfi";

function SidePanel() {
  return (
    <div className="displayColumn white fancyBorder" id="summary">
      <div id="summary_photo">
        <img src={image} alt="Ivan img" />
      </div>
      <div className="mildMargin" id="summary_items">
        <h4 className="deepBlue">Ivan Dario Pinzon</h4>
        <p className="iconAndTitle">
          <IoMdBriefcase /> Frontend Web Developer
        </p>
        <p className="iconAndTitle">
          <GrLocation /> Barcelona, Spain
        </p>
        <p className="iconAndTitle">
          <AiOutlineMail />
          {"  ivandariogye@gmail.com"}
        </p>
        <p className="iconAndTitle">
          <AiFillPhone /> +34 692623935
        </p>
        <p className="iconAndTitle">
          <GrPersonalComputer />
          <a
            target="_blank"
            href="https://github.com/ivandax"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <p className="iconAndTitle">
          <IoMdBusiness />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ivandariopd/"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>
      </div>
      <div className="mildMargin" id="summary_skills">
        <h4 className="deepBlue iconAndTitle">
          <GrPersonalComputer /> Skills
        </h4>
        <p>Typescript &amp; Javascript </p>
        <div className="progressBar stoneGrey">
          <div className="progress deepBlueBackground" id="progress90">
            90%
          </div>
        </div>
        <p>React</p>
        <div className="progressBar stoneGrey">
          <div className="progress deepBlueBackground" id="progress90">
            90%
          </div>
        </div>
        <p>HTML &amp; CSS </p>
        <div className="progressBar stoneGrey">
          <div className="progress deepBlueBackground" id="progress90">
            90%
          </div>
        </div>
        <p>Node JS</p>
        <div className="progressBar stoneGrey">
          <div className="progress deepBlueBackground" id="progress60">
            60%
          </div>
        </div>
        <p>Java</p>
        <div className="progressBar stoneGrey">
          <div className="progress deepBlueBackground" id="progress60">
            60%
          </div>
        </div>
      </div>
      <div className="mildMargin" id="summary_languages">
        <h4 className="deepBlue iconAndTitle">
          <LanguageIcon /> Languages
        </h4>
        <p>English</p>
        <div className="progressBar stoneGrey">
          <div className="progress deepBlueBackground" id="progress100">
            100%
          </div>
        </div>
        <p>Spanish</p>
        <div className="progressBar stoneGrey">
          <div className="progress deepBlueBackground" id="progress100">
            100%
          </div>
        </div>
        <hr />
      </div>
      <div className="mildMargin" id="summary_languages">
        <h4 className="deepBlue iconAndTitle">
          <WriteIcon /> More stuff
        </h4>
        <a
          href="https://github.com/ivandax/webpack-basic"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Webpack (link to Github)"}
        </a>
        <hr />
      </div>
    </div>
  );
}

export default SidePanel;
