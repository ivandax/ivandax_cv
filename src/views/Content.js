import "../App.css";

import SidePanel from "../components/SidePanel";

function Content() {
  return (
    <body style={{ paddingTop: "12px" }}>
      <div className="displayColumn displayJustify" id="content">
        <SidePanel />

        <div className="displayColumn" id="details">
          <div className="white fancyBorder" id="tutorials_content">Hello!</div>
        </div>
      </div>

      <footer className="displayColumn displayAlignCenter deepBlueBackground">
        <div id="footer_content">Web Development</div>
      </footer>
    </body>
  );
}

export default Content;
