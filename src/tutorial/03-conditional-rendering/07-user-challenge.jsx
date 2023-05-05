import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    // normally this information is gotten from the DB or API
    setUser({ name: "Vegan Food Truck" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
