import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Inheritance() {
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

  class Animal {
    constructor(species) {
      this.species = species;
    }

    info() {
      return "This is animal of species " + this.species;
    }
  }

  class Pet extends Animal {
    constructor(name, species) {
      super(species);
      this.name = name;
    }

    present() {
      return (
        "This is a pet with name " + this.name + " of species " + this.species
      );
    }
  }

  const myPet = new Pet("Fluffy", "cat");
  console.log(myPet);

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <h3 style={{ margin: 0 }}>Inheritance</h3>
      <p style={{ wordWrap: "break-word" }}>
        Javascript supports classes and objects.
      </p>
      <SyntaxHighlighter language="javascript">
        {basicExampleString}
      </SyntaxHighlighter>
    </div>
  );
}

export { Inheritance };
