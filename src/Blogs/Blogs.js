import React from "react";

const Blogs = () => {
  return (
    <div className="mx-16 my-10">
      <h1 className="text-3xl">
        How will you improve the performance of a React Application?
      </h1>
      <br />
      <p>1. Keeping component state local where necessary</p>
      <p>2. Memoizing React components to prevent unnecessary re-renders</p>
      <p>3. Code-splitting in React using dynamic import()</p>
      <p>4. Windowing or list virtualization in React applications</p>
      <p>5. Lazy loading images in React</p>
      <br />
      <h1 className="text-3xl">
        What are the different ways to manage a state in a React application?
      </h1>
      <br />
      <p>
        React applications are built using components and they manage their
        state internally and it works well for applications with few components,
        but when the application grows bigger, the complexity of managing states
        shared across components becomes difficult..React components have a
        built-in state object. The state is encapsulated data where you store
        assets that are persistent between component renderings.The state is
        just a fancy term for a JavaScript data structure. If a user changes
        state by interacting with your application, the UI may look completely
        different afterwards, because it's represented by this new state rather
        than the old state.
      </p>
      <br />
      <h1 className="text-3xl">How does prototypical inheritance work?</h1>
      <br />
      <p>
        JavaScript is a prototype-based, Object Oriented programming language.
        After the ES6 updates, JavaScript allowed for “prototypal inheritance”,
        meaning that objects and methods can be shared, extended, and
        copied.Simply put, prototypical inheritance refers to the ability to
        access object properties from another object. We use a JavaScript
        prototype to add new properties and methods to an existing object
        constructor. We can then essentially tell our JS code to inherit
        properties from a prototype. Prototypical inheritance allows us to reuse
        the properties or methods from one JavaScript object to another through
        a reference pointer function.
      </p>
      <h1 className="text-3xl">
        How will you implement a search to find products by name?
      </h1>
      <br />
      <p>
        1 . A product description is the marketing copy that explains what a
        product is and why it’s worth purchasing. The purpose of a product
        description is to supply customers with important information about the
        features and benefits of the product so they’re compelled to buy.
      </p>
      <p>
        2 . <span> Deduplication</span>
        If you run a marketplace with merchants, chances are high, those
        merchants are selling the same goods unless they are the producers of
        those, and even then you might have a bunch of resellers in your
        platform as well.
      </p>
      <p>
        3 . <span> Prices</span>
        The naive implementation of pricing is that every product has one price
        - well maybe two, because of a strike price. Well, maybe three, because
        of bulk deductions. Well, maybe four, because of different sales taxes.
        Well maybe fifty-two, because of different sales taxes per state. At
        least those are static prices.
      </p>
      <br />
      <h1 className="text-3xl">5.1 What is a unit test?</h1>
      <br />
      <p>
        UNIT TESTING is a type of software testing where individual units or
        components of a software are tested. The purpose is to validate that
        each unit of the software code performs as expected. Unit Testing is
        done during the development (coding phase) of an application by the
        developers. Unit Tests isolate a section of code and verify its
        correctness. A unit may be an individual function, method, procedure,
        module, or object.
      </p>
      <br />
      <h1 className="text-3xl"> 5.2 Why should write unit tests?</h1>
      <br />
      <p>
        Unit testing allows software developers to actually think through the
        design of the software and what has to be done before they write the
        code. This can help them to stay focused and can also help them to
        create much better designs.
      </p>
    </div>
  );
};

export default Blogs;
