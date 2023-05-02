import { useState } from "react";
// set default state object
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 28,
    hobby: "swimming with crocodiles",
  });
  // function to update state values with new values upon the click of a button
  const showPerson = () => {
    setPerson({
      name: "Abdul",
      age: 32,
      hobby:
        "talking at the top of his voice, dude always thinks he is on the parade ground",
    });
  };
  return (
    <>
      <article>
        <h3>{person.name}</h3>
        <p>who is {person.age}yrs old</p>
        <p>Has a hobby of {person.hobby}</p>
        <button type="button" className="btn" onClick={showPerson}>
          Show Person
        </button>
      </article>
    </>
  );
};

export default UseStateObject;
