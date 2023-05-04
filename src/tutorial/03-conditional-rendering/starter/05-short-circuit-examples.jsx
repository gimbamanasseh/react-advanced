import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h4>{text || "Default Value"}</h4>
      {text && (
        <div>
          <h2>whatever returns</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <hr />
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>Hey there please login</h4>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Hello friend, {name}</h2>
      <button className="btn">Log Out</button>
    </div>
  );
};

export default ShortCircuitExamples;
