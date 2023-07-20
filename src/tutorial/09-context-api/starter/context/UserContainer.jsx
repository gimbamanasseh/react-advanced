import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();

  // return "Hello World";
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
