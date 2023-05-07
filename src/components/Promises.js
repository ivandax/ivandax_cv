import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Promises() {
  const promiseExampleString = `
    const myPromise = new Promise((resolve, reject) => {
      if (/* operation succeeds */) {
        resolve(result);
      } else {
        reject(error);
      }
    });
    `;

  const promiseWithTimeoutString = `
  function getPromise() {
    const samplePromise = new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        setTimeout(() => {
          resolve({ status: 200, message: "You got your data!" });
        }, 3000);
      } else {
        setTimeout(() => {
          reject({ status: 500, message: "If failed :/" });
        }, 3000);
      }
    });
    return samplePromise;
  }
    `;

  const asyncAwaitString = `
    async function startAsyncOperation() {
      try {
        const data = await getPromise();
        /* We can do something with the data */
      } catch (e) {
        /* We handle the promise failure */
      }
  }
    `;

  const [resolution, setResolution] = useState(null);

  function getPromise() {
    const samplePromise = new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        setTimeout(() => {
          resolve({ status: 200, message: "You got your data!" });
        }, 3000);
      } else {
        setTimeout(() => {
          reject({ status: 500, message: "If failed :/" });
        }, 3000);
      }
    });
    return samplePromise;
  }

  async function startAsyncOperation() {
    setResolution(null);
    setResolution({ status: "pending", message: "Pending..." });
    try {
      const data = await getPromise();
      console.log(data);
      setResolution(data);
    } catch (e) {
      setResolution(e);
    }
  }

  return (
    <div style={{ padding: "10px" }}>
      <h3 style={{ margin: 0 }}>Promises</h3>
      <p>
        A promise in Javascript allows us to handle asynchronous operations. A
        typical case where we use promises is when calling a REST API, the
        response might take some time. The promise is like a container for the
        resulting value of that call.
      </p>
      <p>
        The promise might resolve successfully or it might fail, so it has three
        distinct states: "Pending", "Fullfilled" and "Rejected"
      </p>
      <p>We can create a simple promise like this:</p>
      <SyntaxHighlighter language="javascript">
        {promiseExampleString}
      </SyntaxHighlighter>
      <p>
        We can define an example: It simulates a response that resolves after 3
        seconds, with a 50% chance of resolving the promise, and 50% of
        rejecting it.
      </p>
      <SyntaxHighlighter language="javascript">
        {promiseWithTimeoutString}
      </SyntaxHighlighter>
      <p>
        A very practical way to deal with promises is using the async / await
        pattern. The await keyword basically "pauses" the code execution until
        the promise is resolved.
      </p>
      <SyntaxHighlighter language="javascript">
        {asyncAwaitString}
      </SyntaxHighlighter>
      <button onClick={startAsyncOperation}>Try it</button>
      {resolution === null ? (
        <></>
      ) : resolution.status === "pending" ? (
        <div
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "#f2cf66",
            borderRadius: "8px",
            width: "250px",
          }}
        >
          Promise is waiting, 3 seconds...
        </div>
      ) : resolution.status === 200 ? (
        <div
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "#5ce08d",
            borderRadius: "8px",
            width: "250px",
          }}
        >
          Promise resolved!
        </div>
      ) : (
        <div
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "#e38a64",
            borderRadius: "8px",
            width: "250px",
          }}
        >
          Promise rejected...
        </div>
      )}
    </div>
  );
}

export { Promises };
