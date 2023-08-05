import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState } from "react";

function ReactComponent() {
  const basicExampleString = `
  function MyTitle({ title, subtitle }) {
    return (
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  }
    `;

  const basicExampleString2 = `
  function NameDisplay() {
    const [name, setName] = useState("");
  
    return (
      <div>
        <label>Input name:</label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div>The name is: {name}</div>
      </div>
    );
  }
    `;

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <h3 style={{ margin: 0 }}>React</h3>
      <p style={{ wordWrap: "break-word" }}>
        React is a popular Javascript library that helps us build frontend web
        applications.
      </p>
      <p style={{ wordWrap: "break-word" }}>
        The main idea of React is allowing us to model our applications by
        splitting it into "components". Each component is a visual "piece" of
        the application. In code, a component can be a simple JS function.
      </p>
      <SyntaxHighlighter language="javascript">
        {basicExampleString}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        Each piece, like "MyTitle" in the above example, will change depending
        on the values passed to it as "props". In this case, the title and
        subtitle will re-render on the screen every time that the props values
        change.
      </p>
      <p style={{ wordWrap: "break-word" }}>
        React allows us to write html-looking code within javascript files. This
        is called "jsx".
      </p>
      <p style={{ wordWrap: "break-word" }}>
        More importantly, React applications work in a declarative way. The view
        will automatically update based on the changes of the variables that
        React is tracking on its state.
      </p>
      <SyntaxHighlighter language="javascript">
        {basicExampleString2}
      </SyntaxHighlighter>
      <NameDisplay />
      <p style={{ wordWrap: "break-word" }}>
        Try typing the name into the input above. This will automatically update the text below.
      </p>
    </div>
  );
}

export { ReactComponent };

function NameDisplay() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "8px", backgroundColor: "lightblue", width: "90%" }}>
      <label for="nameInput">Input name:</label>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <div>
        <span style={{ marginRight: "8px" }}>The name is: </span>
        <span>{name}</span>
      </div>
    </div>
  );
}
