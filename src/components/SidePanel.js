import "../App.css";
import image from "../images/ivan.jpg";
import { GrLocation, GrPersonalComputer } from "react-icons/gr";
import { IoMdBriefcase, IoMdBusiness } from "react-icons/io";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

function SidePanel() {

  return (
    <div className="displayColumn white fancyBorder" id="summary">
      <div id="summary_photo">
        <img src={image} alt="Ivan img" />
      </div>
      <div className="mildMargin" id="summary_items">
        <h4 className="deepBlue">Ivan Dario Pinzon</h4>
        <p>
          <IoMdBriefcase /> Frontend Web Developer
        </p>
        <p>
          <GrLocation /> Barcelona, Spain
        </p>
        <p>
          <AiOutlineMail /> ivandariogye@gmail.com
        </p>
        <p>
          <AiFillPhone /> +34 692623935
        </p>
        <p>
          <GrPersonalComputer />
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
        <h4 className="deepBlue">
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
        <h4 className="deepBlue">
          <BsGlobe /> Languages
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
    </div>
  );
}

export default SidePanel;
