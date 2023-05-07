import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Inheritance() {
  const basicClassExampleString = `
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

  console.log(myPet.present());
    /* This is a pet with name Fluffy of species cat */
  console.log(myPet.info());
  /* This is animal of species cat */
    `;

  const prototypeString = `
    const roughTheDog = new Pet("Rough", "dog");
    const someDog = new Animal("dog");
  
    const prototypeOfRough = Object.getPrototypeOf(roughTheDog);
    const prototypeOfSomeDog = Object.getPrototypeOf(someDog);
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

  console.log(myPet.present());
  /* This is a pet with name Fluffy of species cat */
  console.log(myPet.info());
  /* This is animal of species cat */

  const roughTheDog = new Pet("Rough", "dog");
  const someDog = new Animal("dog");

  const prototypeOfRough = Object.getPrototypeOf(roughTheDog);
  const prototypeOfSomeDog = Object.getPrototypeOf(someDog);
  const prototypeOfSimple = Object.getPrototypeOf({});
  console.log(prototypeOfRough);
  console.log(prototypeOfSomeDog);
  console.log(prototypeOfSimple);

  /* 
  logs Animal
  */

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <h3 style={{ margin: 0 }}>Inheritance</h3>
      <p style={{ wordWrap: "break-word" }}>
        Javascript supports classes and objects. We can use the "extends" key
        word to make a new, more specific class from another one. In this
        example, we create a class Pet that extends from Animal.
      </p>
      <SyntaxHighlighter language="javascript">
        {basicClassExampleString}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        The variable "myPet" holds an instance of the Pet class. Notice that
        this object has access to the methods of both Pet and Animal classes.
      </p>
      <p style={{ wordWrap: "break-word" }}>
        The way that Javascript implements inheritance under the hood is by
        using prototypes. Each JS object has a private property which holds a
        link to another object called its prototype. We can check the prototypes
        of the object we defined and see:
      </p>
      <SyntaxHighlighter language="javascript">
        {prototypeString}
      </SyntaxHighlighter>
      <p style={{ wordWrap: "break-word" }}>
        Here we declare instances of both Pet and Animal. If we check the
        prototype of Rough the Dog, which is a pet, it will point to Animal. But
        if we look at the prototype of someDog, it will point to the basic
        object prototype.
      </p>
    </div>
  );
}

export { Inheritance };
