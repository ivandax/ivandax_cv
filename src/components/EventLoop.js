import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function EventLoop() {
  const basicExampleString = `
  function multiply(a, b) {
    return a * b;
  }

  function square(n) {
    return multiply(n, n);
  }

  function logSquare(n) {
    const result = square(n);
    console.log(result);
  }

  logSquare(4);
    `;

  const logExampleString = `
  console.log("logs first");
  setTimeout(() => {
    console.log("This logs third, after 1 second");
  }, 1000);
  console.log("logs second");
      `;

  function multiply(a, b) {
    return a * b;
  }

  function square(n) {
    return multiply(n, n);
  }

  function logSquare(n) {
    const result = square(n);
    console.log(result);
  }

  logSquare(4);

  console.log("logs first");
  setTimeout(() => {
    console.log("This logs third, after 1 second");
  }, 1000);
  console.log("logs second");

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <h3 style={{ margin: 0 }}>Event Loop</h3>
      <p style={{ wordWrap: "break-word" }}>
        Javascript is a high level, interpreted, single threaded non-blocking,
        asynchronous, concurrent language. It's interesting to note that while
        JS is single threaded, it is also capable of handling various operations
        occurring at the same time (concurrently).
      </p>
      <p style={{ wordWrap: "break-word" }}>
        This is possible thanks to the "event loop". Javascript itself works
        together with the Web API provided by the browser to handle special
        operations that are not part of the core JS implementation. To us, the
        developers, it all seems like a single programming language, but a few
        operations can only be possible due to the Web API, like:
      </p>
      <ul>
        <li>Working with the DOM (Document Object Model)</li>
        <li>ajax (asynchronous requests)</li>
        <li>timers (setTimeout)</li>
      </ul>
      <SyntaxHighlighter language="javascript">
        {basicExampleString}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        The above is an example of typical synchronous code. Once "logSquare" is
        called, this function will call "square", which will then call
        "multiply". This happens in order, as JS passes each function into the
        call stack. The last item (in this case the function "multiply") will be
        the first to be resolved and is removed from the stack. And it keeps
        going like that until all the functions on the stack are resolved.
      </p>
      <p style={{ wordWrap: "break-word" }}>
        However, when dealing with timers or asynchronous code, JS is still able
        to process other functions while others have not yet finished running.
        Like on this example:
      </p>
      <SyntaxHighlighter language="javascript">
        {logExampleString}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        In this example, the second console log will be the third to actually
        log. The setTimeout, although it looks like plain JS, it's actually a
        functionality provided by the Web API. Besides the call stack, which
        runs functions in order, the Web API provides a "task queue" for
        operations that are blocking, like timers.
      </p>
      <p style={{ wordWrap: "break-word" }}>
        Put simply, the event loop is a process that waits for the call stack to
        be clear before pushing new callbacks from the task queue. This is how,
        by leveraging the Web API, JS is able to handle blocking code in a
        concurrent way.
      </p>
      <div>Sources:</div>
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://geekflare.com/javascript-event-loops/"
        >
          Geekflare
        </a>
      </div>
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"
        >
          Web Docs
        </a>
      </div>
    </div>
  );
}

export { EventLoop };
