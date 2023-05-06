import "../App.css";
import { useState } from "react";

import SidePanel from "../components/SidePanel";

function Content() {
  const [activeSection, setActiveSection] = useState("event-loop");

  return (
    <body style={{ paddingTop: "12px" }}>
      <div className="displayColumn displayJustify" id="content">
        <SidePanel />

        <div className="displayColumn" id="details" style={{ display: "flex" }}>
          <div
            className="white fancyBorder"
            id="tutorials_content"
            style={{
              flexGrow: 1,
              display: "flex",
              padding: "10px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Tabs
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </div>
      </div>

      <footer className="displayColumn displayAlignCenter deepBlueBackground">
        <div id="footer_content">Web Development</div>
      </footer>
    </body>
  );
}

export default Content;

function Tabs({ activeSection, setActiveSection }) {
  return (
    <div
      className="tabs"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <button
        onClick={() => setActiveSection("event-loop")}
        style={{
          margin: 0,
          padding: "10px",
          border: "none",
          backgroundColor:
            activeSection === "event-loop" ? "#2952a3" : "#849ac5",
          color: activeSection === "event-loop" ? "white" : "black",
          flexGrow: 1,
          cursor: "pointer",
        }}
      >
        Event Loop
      </button>
      <button
        onClick={() => setActiveSection("promises")}
        style={{
          margin: 0,
          padding: "10px",
          backgroundColor: activeSection === "promises" ? "#2952a3" : "#849ac5",
          color: activeSection === "promises" ? "white" : "black",
          border: "none",
          flexGrow: 1,
          cursor: "pointer",
        }}
      >
        Promises
      </button>
      <button
        onClick={() => setActiveSection("closures")}
        style={{
          margin: 0,
          padding: "10px",
          backgroundColor: activeSection === "closures" ? "#2952a3" : "#849ac5",
          color: activeSection === "closures" ? "white" : "black",
          border: "none",
          flexGrow: 1,
          cursor: "pointer",
        }}
      >
        Closures
      </button>
      <button
        onClick={() => setActiveSection("inheritance")}
        style={{
          margin: 0,
          padding: "10px",
          backgroundColor:
            activeSection === "inheritance" ? "#2952a3" : "#849ac5",
          color: activeSection === "inheritance" ? "white" : "black",
          border: "none",
          flexGrow: 1,
          cursor: "pointer",
        }}
      >
        Inheritance
      </button>
      <button
        onClick={() => setActiveSection("fetch")}
        style={{
          margin: 0,
          padding: "10px",
          backgroundColor: activeSection === "fetch" ? "#2952a3" : "#849ac5",
          color: activeSection === "fetch" ? "white" : "black",
          border: "none",
          flexGrow: 1,
          cursor: "pointer",
        }}
      >
        fetch
      </button>
      <button
        onClick={() => setActiveSection("this")}
        style={{
          margin: 0,
          padding: "10px",
          backgroundColor: activeSection === "this" ? "#2952a3" : "#849ac5",
          color: activeSection === "this" ? "white" : "black",
          border: "none",
          flexGrow: 1,
          cursor: "pointer",
        }}
      >
        this
      </button>
    </div>
  );
}
