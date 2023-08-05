import "../App.css";
import { useState } from "react";

import SidePanel from "../components/SidePanel";
import { Promises } from "../components/Promises";
import { EventLoop } from "../components/EventLoop";
import { Inheritance } from "../components/Inheritance";
import { This } from "../components/This";
import { Fetch } from "../components/Fetch";
import { Links } from "../components/Links";

function Content() {
  const [activeSection, setActiveSection] = useState("event-loop");

  return (
    <div style={{ paddingTop: "12px" }}>
      <div className="displayColumn displayJustify" id="content">
        <SidePanel />

        <div className="displayColumn" id="details" style={{ display: "flex" }}>
          <Links />
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
              maxWidth: "800px",
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
      <TabButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tab="event-loop"
        label="Event Loop"
        position="left"
      />
      <TabButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tab="promises"
        label="Promises"
      />
      <TabButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tab="inheritance"
        label="Inheritance"
      />
      <TabButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tab="fetch"
        label="Fetch"
      />
      <TabButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tab="this"
        label="this"
        position="right"
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
        width: "5%"
      }}
    >
      {label}
    </button>
  );
}

function SectionContent({ activeSection }) {
  switch (activeSection) {
    case "event-loop": {
      return <EventLoop />;
    }
    case "promises": {
      return <Promises />;
    }
    case "inheritance": {
      return <Inheritance />;
    }
    case "fetch": {
      return <Fetch />;
    }
    case "this": {
      return <This />;
    }
    default: {
      return <>Not Found</>;
    }
  }
}
