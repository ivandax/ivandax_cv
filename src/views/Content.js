import "../App.css";
import { useState } from "react";

import SidePanel from "../components/SidePanel";
import { Promises } from "../components/Promises";
import { EventLoop } from "../components/EventLoop";

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
      <TabButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        tab="event-loop"
        label="Event Loop"
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
        tab="closures"
        label="Closures"
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
      />
    </div>
  );
}

function TabButton({ label, tab, setActiveSection, activeSection }) {
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
    case "closures": {
      return <>Closures</>;
    }
    case "inheritance": {
      return <>Inheritance</>;
    }
    case "fetch": {
      return <>fetch</>;
    }
    case "this": {
      return <>this</>;
    }
    default: {
      return <>Not Found</>;
    }
  }
}
