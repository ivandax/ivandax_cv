import "../App.css";
import { useState } from "react";

import { DequeComponent } from "../components/DequeComponent";

function Algorithms() {
  const [activeSection, setActiveSection] = useState("deque");

  return (
    <div style={{ padding: "12px" }}>
      <div
        className="displayColumn displayJustify"
        id="content"
        style={{ paddingBottom: "12px" }}
      >
        <div
          className="displayColumn"
          style={{ display: "flex", width: "100%" }}
        >
          <div
            className="white fancyBorder"
            id="tutorials_content"
            style={{
              flexGrow: 1,
              display: "flex",
              padding: "10px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Tabs
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <SectionContent activeSection={activeSection} />
          </div>
        </div>
      </div>

      <footer className="displayColumn displayAlignCenter deepBlueBackground">
        <div id="footer_content">Web Development</div>
      </footer>
    </div>
  );
}

export default Algorithms;

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
      <TabButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tab="deque"
        label="Deque"
        position="left"
      />
    </div>
  );
}

function TabButton({ label, tab, setActiveSection, activeSection, position }) {
  const style =
    position === "left"
      ? { borderRadius: "8px 0 0 8px" }
      : position === "right"
      ? { borderRadius: "0 8px 8px 0" }
      : {};
  return (
    <button
      onClick={() => setActiveSection(tab)}
      style={{
        margin: 0,
        padding: "10px",
        backgroundColor: activeSection === tab ? "#2952a3" : "#849ac5",
        color: activeSection === tab ? "white" : "black",
        border: "none",
        flexGrow: 1,
        cursor: "pointer",
        ...style,
        width: "100%",
      }}
      className="tabButton"
    >
      {label}
    </button>
  );
}

function SectionContent({ activeSection }) {
  switch (activeSection) {
    case "deque": {
      return <DequeComponent />;
    }
    default: {
      return <>Not Found</>;
    }
  }
}
