import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function This() {
  const thisExample1 = `
  const person = {
    name: 'John',
    sayHello: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  person.sayHello(); // output: "Hello, my name is John"
`;

  const thisExample2 = `
  function sayHello() {
    console.log('Hello, my name is ' + this.name);
  }
  sayHello(); // output: "Hello, my name is undefined"
  `;

  const thisExample3 = `
  const object1 = { name: 'John' };
  const object2 = { name: 'Jane' };
  function sayHello() {
    console.log('Hello, my name is ' + this.name);
  }
  sayHello.call(object1); // output: "Hello, my name is John"
  sayHello.apply(object2); // output: "Hello, my name is Jane"
  
  `;

  const thisExample4 = `
  const person = {
    name: 'John',
    sayHello: () => {
      console.log('Hello, my name is ' + this.name);
    }
  };
  person.sayHello(); // output: "Hello, my name is undefined"
  
  `;

  const thisExample5 = `
  const person = {
    name: 'John',
    sayHello() {
      setTimeout(() => {
        console.log('Hello, my name is ' + this.name);
      }, 1000);
    }
  };
  person.sayHello(); // output: "Hello, my name is John"
  
  `;

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <h3 style={{ margin: 0 }}>This</h3>
      <p style={{ wordWrap: "break-word" }}>
        "this" is a Javascript keyword that allows us to reference the object of
        the context in which a function is run. However, depending on the
        situation and the type of function, the value of "this" can be
        different. So it's better to see some examples:
      </p>
      <SyntaxHighlighter language="javascript">
        {thisExample1}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        In the above example, "this" refers to the object, or would refer to the
        instance of the class. Calling it would log "The pet name is Fluffy".
      </p>
      <SyntaxHighlighter language="javascript">
        {thisExample2}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        In the above example, "this" refers to the global context, so the
        property name is undefined.
      </p>
      <SyntaxHighlighter language="javascript">
        {thisExample3}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        If the context is not defined, we can use "apply" or "call" on a
        function to explicitly define what context to use. If we provide the
        object, then "this" refers to the object.
      </p>
      <SyntaxHighlighter language="javascript">
        {thisExample4}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        If we use arrow functions, the context will be of the surrounding code,
        not the object. So in this case, it is undefined again.
      </p>
      <SyntaxHighlighter language="javascript">
        {thisExample5}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        However, when using the arrow function as a callback, it does retain the value of the surrounding scope.
      </p>
    </div>
  );
}

export { This };
