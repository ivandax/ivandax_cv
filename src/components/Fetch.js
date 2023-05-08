import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Fetch() {
  const fetchExample = `
  fetch('https://api.someapi.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
`;
  const fetchExample2 = `
  async function getData() {
    try {
      const response = await fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({foo: 'bar'})
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();
  
`;

const tryCatch = `
async function tryCatch(callback) {
  try {
      const data = await callback();
      return { result: "success", data };
  } catch (e) {
      console.log(e);
      return { result: "failure", error: e };
  }
}
`;

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <h3 style={{ margin: 0 }}>Fetch</h3>
      <p style={{ wordWrap: "break-word" }}>
        Javascript provides a built-in functionality to make network
        requests: "fetch". This returns a promise:
      </p>
      <SyntaxHighlighter language="javascript">
        {fetchExample}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        We can also pass an objectas a second parameter with various options to
        customise the network call. Note that we can also use async/ await to
        handle the promise.
      </p>
      <SyntaxHighlighter language="javascript">
        {fetchExample2}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        As an extra, we can abstract a generic function to handle the try catch process.
      </p>
      <SyntaxHighlighter language="javascript">
        {tryCatch}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        This allows us to return an object with explicit keys for success or failure.
      </p>
    </div>
  );
}

export { Fetch };
