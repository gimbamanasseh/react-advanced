import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    // console.log(fakeId);
    const newUser = { id: fakeId, name: name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    // console.log("form submitted");
    setName("");
  };
  const removeUser = (id) => {
    const updatedUser = users.filter((person) => person.id !== id);
    setUsers(updatedUser);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <hr />
      <h3>Users</h3>
      <hr />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
